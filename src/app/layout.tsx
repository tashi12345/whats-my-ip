import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What's My IP Address? Free IP Lookup Tool",
  description:
    "Instantly check your public IP address, location, ISP, and browser details. Free, no sign-up, no tracking beyond what your browser already sends.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
