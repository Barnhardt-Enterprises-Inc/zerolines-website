import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zero Lines of Code — AI Development Framework",
  description:
    "How a 45-year software veteran rebuilt a production SaaS with AI — without writing a single line of code. Book and course by Glen Barnhardt.",
  openGraph: {
    title: "Zero Lines of Code — AI Development Framework",
    description:
      "How a 45-year software veteran rebuilt a production SaaS with AI — without writing a single line of code.",
    type: "website",
    locale: "en_US",
    siteName: "Zero Lines of Code",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Lines of Code — AI Development Framework",
    description:
      "How a 45-year software veteran rebuilt a production SaaS with AI — without writing a single line of code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
