import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";

export const metadata: Metadata = {
  title: "PaySentinel | AI Revenue Recovery Console",
  description: "Recover more revenue. Take fewer risks. PaySentinel is an AI-driven revenue recovery engine with deterministic safety guardrails and Human-in-the-Loop approval.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#0d1117] text-[#e6edf3] antialiased selection:bg-indigo-900 selection:text-indigo-100">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
