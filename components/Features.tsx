import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    title: "AI Document Scanning",
    headline: "Snap a photo. Get your data.",
    description:
      "Point your camera at any biometry printout — optical or immersion. PhacoTrack's AI reads AL, K1, K2, ACD, LT, WTW, and more. No manual entry. No transcription errors.",
    bullets: [
      "Works with IOLMaster, Lenstar, and other devices",
      "Supports autokeratometry and ECC printouts",
      "Phaco machine summary extraction",
    ],
    mockContent: (
      <div className="flex h-full flex-col bg-[#F2F2F7]">
        <div className="h-12" />
        <div className="mx-3 text-[10px] font-bold text-[#1C1C1E]">Biometry Scan</div>
        <div className="mx-3 mt-2 rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="text-[8px] font-semibold text-[#34C759]">Extracted Successfully</div>
          <div className="mt-2 space-y-1.5">
            {[
              ["AL", "23.45 mm"],
              ["K1", "43.25 D"],
              ["K2", "44.10 D"],
              ["ACD", "3.12 mm"],
              ["LT", "4.56 mm"],
              ["WTW", "11.8 mm"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-[8px] text-[#8E8E93]">{k}</span>
                <span className="text-[8px] font-semibold text-[#1C1C1E]">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-3 mt-2 rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="text-[8px] font-medium text-[#8E8E93]">IOL CALCULATIONS</div>
          <div className="mt-1 space-y-1">
            {[
              ["SRK/T", "21.5 D"],
              ["Barrett", "21.0 D"],
              ["Holladay 1", "21.5 D"],
            ].map(([f, p]) => (
              <div key={f} className="flex justify-between">
                <span className="text-[8px] text-[#8E8E93]">{f}</span>
                <span className="text-[8px] font-semibold text-[#2A7ADF]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Personal Analytics Dashboard",
    headline: "See your real surgical performance.",
    description:
      "Six analytics modules give you a complete picture of your outcomes: refractive accuracy, visual outcomes, safety metrics, phaco energy trends, SIA analysis, and follow-up coverage.",
    bullets: [
      "Mean absolute error tracking (\u00b10.25D / \u00b10.50D / \u00b11.0D)",
      "Predicted vs. achieved scatter plots",
      "Complication rate trends over time",
      "Monthly performance benchmarks",
    ],
    mockContent: (
      <div className="flex h-full flex-col bg-[#F2F2F7]">
        <div className="h-12" />
        <div className="mx-3 text-[10px] font-bold text-[#1C1C1E]">Analytics</div>
        <div className="space-y-1.5 px-3 mt-2">
          <div className="rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-[7px] text-[#8E8E93]">PRED. vs ACHIEVED</div>
            <div className="mt-1.5 relative h-[50px]">
              {/* Scatter dots */}
              {[
                [15, 38], [25, 32], [35, 28], [42, 22], [50, 18],
                [58, 15], [65, 12], [72, 20], [80, 25], [85, 30],
                [20, 42], [30, 35], [45, 25], [55, 20], [70, 15],
              ].map(([x, y], i) => (
                <div
                  key={i}
                  className="absolute h-[4px] w-[4px] rounded-full bg-[#2A7ADF]"
                  style={{ left: `${x}%`, top: `${y}%`, opacity: 0.7 }}
                />
              ))}
              {/* Trend line */}
              <div className="absolute top-[10%] left-[10%] h-[1px] w-[80%] origin-left rotate-[25deg] bg-[#34C759]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[
              ["\u00b10.25D", "72%", "#34C759"],
              ["\u00b10.50D", "87%", "#2A7ADF"],
              ["\u00b11.0D", "96%", "#8E8E93"],
            ].map(([label, val, color]) => (
              <div key={label as string} className="rounded-lg bg-white p-2 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="text-[7px] text-[#8E8E93]">{label}</div>
                <div className="text-[12px] font-bold" style={{ color: color as string }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "IOL Constant Personalisation",
    headline: "Your A-constant, optimised to your hands.",
    description:
      "PhacoTrack automatically calculates your personalised A-constant from your accumulated case data — so every IOL calculation gets more accurate as you log more cases.",
    bullets: [
      "Auto-calculated from your surgical history",
      "Per-IOL model optimisation",
      "Improves with every case you log",
    ],
    mockContent: (
      <div className="flex h-full flex-col bg-[#F2F2F7]">
        <div className="h-12" />
        <div className="mx-3 text-[10px] font-bold text-[#1C1C1E]">A-Constant</div>
        <div className="space-y-1.5 px-3 mt-2">
          <div className="rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-[7px] text-[#8E8E93]">SN60WF (ALCON)</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[18px] font-bold text-[#2A7ADF]">119.01</span>
              <span className="text-[8px] text-[#34C759]">optimised</span>
            </div>
            <div className="mt-1 text-[8px] text-[#8E8E93]">Manufacturer: 119.00 &middot; 147 cases</div>
          </div>
          <div className="rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-[7px] text-[#8E8E93]">ZCB00 (J&J VISION)</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[18px] font-bold text-[#2A7ADF]">119.42</span>
              <span className="text-[8px] text-[#34C759]">optimised</span>
            </div>
            <div className="mt-1 text-[8px] text-[#8E8E93]">Manufacturer: 119.30 &middot; 63 cases</div>
          </div>
          <div className="rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-[7px] text-[#8E8E93]">PREDICTION IMPROVEMENT</div>
            <div className="flex items-end gap-[2px] mt-1.5">
              {[0.52, 0.48, 0.44, 0.41, 0.38, 0.35, 0.33, 0.31].map((v, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-[#34C759]" style={{ height: `${v * 70}px`, opacity: 0.5 + i * 0.065 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "SIA Calculator & Vector Plots",
    headline: "Understand your astigmatic footprint.",
    description:
      "Built-in SIA calculator with publication-quality double-angle polar plots. See your surgically induced astigmatism by incision type, location, and technique.",
    bullets: [
      "Interactive polar plot visualisation",
      "Magnitude distribution analysis",
      "SIA trends over time",
    ],
    mockContent: (
      <div className="flex h-full flex-col bg-[#F2F2F7]">
        <div className="h-12" />
        <div className="mx-3 text-[10px] font-bold text-[#1C1C1E]">SIA Analysis</div>
        <div className="px-3 mt-2">
          <div className="rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            {/* Polar plot */}
            <div className="relative mx-auto aspect-square w-[85%]">
              <div className="absolute inset-0 rounded-full border border-[#E5E5EA]" />
              <div className="absolute inset-[20%] rounded-full border border-[#E5E5EA]" />
              <div className="absolute inset-[40%] rounded-full border border-[#E5E5EA]" />
              {/* Cross lines */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 bg-[#E5E5EA]" />
              <div className="absolute right-0 left-0 top-1/2 h-[1px] -translate-y-1/2 bg-[#E5E5EA]" />
              {/* Data points */}
              {[
                [48, 42], [52, 38], [55, 45], [45, 50], [50, 48],
                [47, 44], [53, 40], [51, 46], [49, 43], [46, 47],
                [54, 41], [48, 49], [52, 44], [50, 42],
              ].map(([x, y], i) => (
                <div
                  key={i}
                  className="absolute h-[5px] w-[5px] rounded-full bg-[#2A7ADF]"
                  style={{ left: `${x}%`, top: `${y}%`, opacity: 0.7 }}
                />
              ))}
              {/* Centroid */}
              <div className="absolute top-[44%] left-[50%] h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FF3B30] bg-[#FF3B30]/30" />
              {/* Axis labels */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] text-[#8E8E93]">90°</span>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[7px] text-[#8E8E93]">270°</span>
              <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-[7px] text-[#8E8E93]">0°</span>
              <span className="absolute top-1/2 -left-4 -translate-y-1/2 text-[7px] text-[#8E8E93]">180°</span>
            </div>
          </div>
          <div className="mt-1.5 grid grid-cols-2 gap-1.5">
            <div className="rounded-lg bg-white p-2 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="text-[7px] text-[#8E8E93]">Mean SIA</div>
              <div className="text-[12px] font-bold text-[#1C1C1E]">0.42 D</div>
            </div>
            <div className="rounded-lg bg-white p-2 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="text-[7px] text-[#8E8E93]">Axis</div>
              <div className="text-[12px] font-bold text-[#1C1C1E]">95°</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function FeatureMockFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.6rem] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]">
      <div className="relative aspect-[393/852] w-[200px] overflow-hidden rounded-[1.1rem] bg-white md:w-[220px]">
        <div className="absolute top-2 left-1/2 z-10 h-[16px] w-[60px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
        {children}
        <div className="absolute bottom-1.5 left-1/2 h-[3px] w-[60px] -translate-x-1/2 rounded-full bg-black/15" />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <SectionWrapper id="features" alt>
      <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
        Features
      </p>
      <h2 className="max-w-2xl text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
        Everything you need to become a better surgeon.
      </h2>

      <div className="mt-16 space-y-20 md:space-y-28">
        {features.map((feature, i) => (
          <AnimateOnScroll key={feature.title}>
            <div
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Mock */}
              <div className="flex-shrink-0">
                <FeatureMockFrame>{feature.mockContent}</FeatureMockFrame>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-[13px] font-semibold text-accent">
                  {feature.title}
                </p>
                <h3 className="mt-2 text-[1.5rem] leading-snug font-bold text-ink md:text-[1.75rem]">
                  {feature.headline}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[15px] text-ink-muted md:justify-start"
                    >
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-positive"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
