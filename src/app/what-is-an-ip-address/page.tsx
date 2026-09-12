import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is an IP Address? A Simple Explanation",
  description:
    "A plain-English guide to what an IP address is, the difference between public and private IPs, and IPv4 vs IPv6.",
};

export default function WhatIsAnIpAddress() {
  return (
    <main className="flex-1 max-w-2xl mx-auto px-4 py-16 text-sm leading-relaxed text-white/80">
      <h1 className="text-2xl font-bold mb-6 text-white">
        What Is an IP Address?
      </h1>

      <p className="mb-4">
        An IP address (Internet Protocol address) is a unique number assigned
        to every device connected to the internet or a local network. It
        works like a postal address for your device — it&apos;s how data
        finds its way to and from you online.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-white">
        Public vs. private IP addresses
      </h2>
      <p className="mb-4">
        Your <strong>public IP</strong> is the address your internet provider
        assigns your connection, visible to the wider internet — it&apos;s
        what a site like this one shows you. Your <strong>private IP</strong>{" "}
        is used only inside your home or office network (e.g. between your
        phone, laptop, and router) and isn&apos;t visible externally.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-white">
        IPv4 vs. IPv6
      </h2>
      <p className="mb-4">
        IPv4 addresses look like <code>192.168.1.1</code> — four numbers
        separated by dots. The internet is running out of these, so IPv6 was
        introduced, using a longer format like{" "}
        <code>2001:0db8:85a3::8a2e:0370:7334</code> to allow vastly more
        addresses.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-white">
        Can your IP address reveal who you are?
      </h2>
      <p className="mb-4">
        On its own, an IP address typically reveals your internet provider
        and an approximate city or region — not your name or exact address.
        Only your ISP can map an IP back to a specific customer, and
        generally only does so under legal process.
      </p>

      <p className="mb-8">
        Want to see your own IP address right now?{" "}
        <Link href="/" className="underline text-blue-400 hover:text-blue-300">
          Check it here
        </Link>
        .
      </p>

      <Link href="/" className="underline text-white/60 hover:text-white">
        ← Back home
      </Link>
    </main>
  );
}
