import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QueueBot — Discord Voice Channel Queue Manager",
  description: "Manage speaker queues in Discord voice channels. Hand-raising, time limits, and moderator controls for meetings and events."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dc7223d0-dca2-4935-b28b-12b751e0bfd3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
