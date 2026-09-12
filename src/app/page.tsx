import IpLookup from "./components/IpLookup";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center px-4 py-16 gap-16">
      <header className="text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          What&apos;s My IP Address?
        </h1>
        <p className="text-white/60">
          Free, instant IP address lookup. No sign-up, no data stored on our servers.
        </p>
      </header>

      <IpLookup />

      <section className="max-w-2xl w-full">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4 text-sm text-white/70">
          <FaqItem
            q="What is an IP address?"
            a="An IP (Internet Protocol) address is a unique number assigned to your device by your internet provider so it can send and receive data on the internet. It's similar to a postal address for your connection."
          />
          <FaqItem
            q="Is my IP address stored when I use this tool?"
            a="No. This page looks up your IP in your browser and displays it to you directly — we don't log or store it on our servers."
          />
          <FaqItem
            q="Why does my location look approximate or wrong?"
            a="IP-based geolocation is based on which internet provider and region your IP is registered to, not GPS. It's usually accurate to the city or region level, not your exact address."
          />
          <FaqItem
            q="Can someone find my exact home address from my IP?"
            a="No. An IP address alone typically reveals your ISP and general region (city-level at best) — not a street address."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-lg border border-white/10 p-4">
      <p className="font-medium text-white/90 mb-1">{q}</p>
      <p>{a}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-xs text-white/40 flex gap-4">
      <Link href="/privacy" className="hover:text-white/70">
        Privacy Policy
      </Link>
      <Link href="/terms" className="hover:text-white/70">
        Terms
      </Link>
    </footer>
  );
}
