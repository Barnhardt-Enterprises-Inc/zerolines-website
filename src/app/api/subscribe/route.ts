import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof (body as Record<string, unknown>).email !== "string"
  ) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const email = ((body as Record<string, unknown>).email as string).trim().toLowerCase();

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const redis = getRedisClient();

  if (!redis) {
    // Dev mode: no Redis configured — still return success so the UI works
    return NextResponse.json({ success: true, message: "You're on the list." });
  }

  // Rate limiting: max 5 signups per IP per hour
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const rateLimitKey = `rate:subscribe:${ip}`;
  const currentCount = await redis.get<number>(rateLimitKey);

  if (currentCount !== null && currentCount >= 5) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Check for duplicate
  const existingScore = await redis.zscore("subscribers", email);
  if (existingScore !== null) {
    return NextResponse.json(
      { success: true, message: "You're already on the list." }
    );
  }

  // Add to sorted set with timestamp as score
  const timestamp = Date.now();
  await redis.zadd("subscribers", { score: timestamp, member: email });

  // Increment rate limit counter (expires after 1 hour)
  const pipeline = redis.pipeline();
  pipeline.incr(rateLimitKey);
  pipeline.expire(rateLimitKey, 3600);
  await pipeline.exec();

  return NextResponse.json({ success: true, message: "You're on the list." });
}
