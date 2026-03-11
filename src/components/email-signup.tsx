"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailSignup({ variant = "default" }: { variant?: "default" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isDark = variant === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string; message?: string };

      if (!res.ok || !data.success) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        setMessage(data.message ?? "You're on the list. We'll email you on launch day.");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <p className={`text-lg font-medium rounded-lg px-6 py-4 ${
          isDark
            ? "text-white bg-white/20 border border-white/30"
            : "text-green-400 bg-green-950 border border-green-800"
        }`}>
          You&apos;re on the list. We&apos;ll email you on launch day.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className={`flex-1 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 disabled:opacity-50 ${
            isDark
              ? "border border-white/30 bg-white/10 text-white placeholder-blue-200 focus:border-white focus:ring-white/20"
              : "border border-zinc-700 bg-zinc-900 text-white placeholder-zinc-500 focus:border-accent focus:ring-accent/20"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email.trim()}
          className={`rounded-lg px-6 py-3 text-base font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${
            isDark
              ? "bg-white text-accent hover:bg-blue-50"
              : "bg-accent text-white hover:bg-accent-hover"
          }`}
        >
          {status === "loading" ? "Submitting..." : "Notify Me"}
        </button>
      </form>

      {status === "error" && (
        <p className={`mt-3 text-sm ${isDark ? "text-red-200" : "text-red-400"}`}>{message}</p>
      )}

      <p className={`mt-4 text-sm text-center ${isDark ? "text-blue-200" : "text-muted"}`}>
        No spam. Just launch day notification and early access pricing.
      </p>
    </div>
  );
}
