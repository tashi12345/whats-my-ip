import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0f14",
          color: "#e6edf3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#8b98a5", marginBottom: 16 }}>
          Free IP Lookup Tool
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, display: "flex" }}>
          What&apos;s My IP Address?
        </div>
        <div style={{ fontSize: 26, color: "#5c9dff", marginTop: 28 }}>
          whats-my-ip-six.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
