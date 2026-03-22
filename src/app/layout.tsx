import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebhookShield — Webhook Reliability & Trust Layer for Ghana",
  description:
    "Signing, verification, and guaranteed delivery for webhooks from MTN MoMo, Hubtel, Paystack, and more. Stop webhook fraud, prevent replay attacks, and never miss a payment notification again.",
  keywords: [
    "webhook",
    "Ghana",
    "fintech",
    "MTN MoMo",
    "Hubtel",
    "Paystack",
    "webhook security",
    "webhook delivery",
    "HMAC",
    "signature verification",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
