"use client";

import { useEffect, useState } from "react";

type IpInfo = {
  ip: string;
  city?: string;
  region?: string;
  country?: string;
  connection?: { isp?: string };
  timezone?: { id?: string };
};

export default function IpLookup() {
  const [info, setInfo] = useState<IpInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ua, setUa] = useState<string>("");

  useEffect(() => {
    setUa(navigator.userAgent);
    fetch("https://ipwho.is/")
      .then((res) => {
        if (!res.ok) throw new Error("Lookup failed");
        return res.json();
      })
      .then((data) => {
        if (data.success === false) throw new Error("Lookup failed");
        setInfo(data);
      })
      .catch(() => setError("Couldn't reach the IP lookup service. Try again in a moment."));
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      {error && <p className="text-red-400">{error}</p>}

      {!info && !error && (
        <p className="text-white/60 animate-pulse">Looking up your IP…</p>
      )}

      {info && (
        <>
          <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
            Your Public IP Address
          </p>
          <p className="text-4xl sm:text-5xl font-mono font-bold mb-6 break-all">
            {info.ip}
          </p>

          <dl className="grid grid-cols-2 gap-4 text-left text-sm">
            <Row label="City" value={info.city} />
            <Row label="Region" value={info.region} />
            <Row label="Country" value={info.country} />
            <Row label="ISP" value={info.connection?.isp} />
            <Row label="Timezone" value={info.timezone?.id} />
            <Row label="Browser" value={ua ? shortUa(ua) : undefined} />
          </dl>
        </>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-lg bg-white/5 px-3 py-2">
      <dt className="text-white/40 text-xs">{label}</dt>
      <dd className="truncate">{value || "—"}</dd>
    </div>
  );
}

function shortUa(ua: string): string {
  if (ua.includes("Edg/")) return "Microsoft Edge";
  if (ua.includes("Chrome/")) return "Google Chrome";
  if (ua.includes("Firefox/")) return "Mozilla Firefox";
  if (ua.includes("Safari/")) return "Safari";
  return ua.slice(0, 40);
}
