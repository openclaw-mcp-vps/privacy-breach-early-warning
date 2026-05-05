import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Privacy Breach Early Warning — Get Alerted When Your Data Appears in Breaches",
  description: "Monitors data broker sites, breach databases, and public leaks for your personal information and sends immediate alerts. Built for privacy-conscious professionals and executives."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7484e8fc-1d62-430a-a9e1-ea80a3d9e0e3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
