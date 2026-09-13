import type { Metadata } from "next";
import Script from "next/script";
import Beacon from "./components/Beacon";
import "./globals.css";

const siteUrl = "https://whats-my-ip-six.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "What's My IP Address? Free IP Lookup Tool",
  description:
    "Check my IP address instantly — free public IP lookup showing your location, ISP, and browser details. No sign-up, nothing stored.",
  keywords: [
    "what is my ip",
    "what is my ip address",
    "check my ip address",
    "my public ip",
    "ip lookup tool",
    "free ip checker",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "What's My IP Address? Free IP Lookup Tool",
    description:
      "Check my IP address instantly — free public IP lookup showing your location, ISP, and browser details.",
    url: siteUrl,
    siteName: "What's My IP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6888500425928718"
          crossOrigin="anonymous"
        />
        <Script
          id="propellerads-inpage-push"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(s){s.dataset.zone='11783169',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Beacon />
        {children}
      </body>
    </html>
  );
}
