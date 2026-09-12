import Link from "next/link";

export const metadata = { title: "Privacy Policy — What's My IP" };

export default function Privacy() {
  return (
    <main className="flex-1 max-w-2xl mx-auto px-4 py-16 text-sm leading-relaxed text-white/80">
      <h1 className="text-2xl font-bold mb-6 text-white">Privacy Policy</h1>

      <p className="mb-4">
        This site (&quot;What&apos;s My IP&quot;) shows visitors their own public IP address
        and related network information. We built it to be as privacy-respecting as
        possible.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-white">What we collect</h2>
      <p className="mb-4">
        Your IP address is looked up directly in your browser via a third-party lookup
        API and displayed to you. We do not store, log, or sell your IP address or any
        information shown on this page.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-white">Advertising & cookies</h2>
      <p className="mb-4">
        This site may show ads served by third-party advertising networks (such as
        Google AdSense). These networks may use cookies or similar technologies to
        serve ads based on your prior visits to this or other websites. You can opt
        out of personalized advertising by visiting your ad settings with the relevant
        provider (for Google, at{" "}
        <a
          href="https://adssettings.google.com"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          adssettings.google.com
        </a>
        ).
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-white">Analytics</h2>
      <p className="mb-4">
        We may use basic, privacy-respecting analytics to understand overall traffic
        (e.g. number of visits), without identifying individual users.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-white">Contact</h2>
      <p className="mb-4">
        Questions about this policy can be sent to{" "}
        <a className="underline" href="mailto:gieeksoftwaresolutions@gmail.com">
          gieeksoftwaresolutions@gmail.com
        </a>
        .
      </p>

      <Link href="/" className="underline text-white/60 hover:text-white">
        ← Back home
      </Link>
    </main>
  );
}
