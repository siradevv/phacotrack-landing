import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt =
  "PhacoTrack — Personal Cataract Surgery Outcomes Tracker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  const iconBytes = readFileSync(join(process.cwd(), "public/app-icon.png"));
  const iconSrc = `data:image/png;base64,${iconBytes.toString("base64")}`;

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
          background:
            "linear-gradient(135deg, #2A7ADF 0%, #1959BF 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <img
          src={iconSrc}
          width={160}
          height={160}
          style={{ borderRadius: 36 }}
          alt=""
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            marginTop: 36,
            letterSpacing: "-0.025em",
          }}
        >
          PhacoTrack
        </div>
        <div
          style={{
            fontSize: 38,
            marginTop: 18,
            opacity: 0.92,
            textAlign: "center",
            maxWidth: 960,
            lineHeight: 1.25,
          }}
        >
          Know your numbers. Improve your surgery.
        </div>
      </div>
    ),
    { ...size },
  );
}
