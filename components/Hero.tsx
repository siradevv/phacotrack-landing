import DeviceFrame from "./DeviceFrame";
import AnimateOnScroll from "./AnimateOnScroll";

function MockDashboard() {
  return (
    <div className="flex h-full flex-col bg-[#F2F2F7] text-[10px]">
      {/* Status bar spacer */}
      <div className="h-[52px]" />

      {/* Nav bar */}
      <div className="mx-3 mb-3 flex items-center justify-between">
        <span className="text-[13px] font-bold text-[#1C1C1E]">Insights</span>
        <div className="flex gap-2">
          <div className="h-4 w-4 rounded-full bg-[#D1D1D6]" />
          <div className="h-4 w-4 rounded-full bg-[#D1D1D6]" />
        </div>
      </div>

      {/* Summary cards */}
      <div className="space-y-2 px-3">
        <div className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <span className="text-[9px] font-medium tracking-wide text-[#8E8E93] uppercase">
            Total Cases
          </span>
          <div className="mt-1 text-[22px] font-bold leading-none text-[#1C1C1E]">
            247
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <span className="text-[9px] font-medium tracking-wide text-[#8E8E93] uppercase">
              MAE
            </span>
            <div className="mt-1 text-[18px] font-bold leading-none text-[#34C759]">
              0.31D
            </div>
            <div className="mt-1.5 text-[8px] text-[#8E8E93]">
              ±0.50D: 87.2%
            </div>
          </div>
          <div className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <span className="text-[9px] font-medium tracking-wide text-[#8E8E93] uppercase">
              Complication
            </span>
            <div className="mt-1 text-[18px] font-bold leading-none text-[#2A7ADF]">
              1.2%
            </div>
            <div className="mt-1.5 text-[8px] text-[#8E8E93]">PCR rate</div>
          </div>
        </div>

        {/* Chart placeholder */}
        <div className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <span className="text-[9px] font-medium tracking-wide text-[#8E8E93] uppercase">
            Refractive Outcomes
          </span>
          <div className="mt-2 flex items-end gap-[3px]">
            {[38, 55, 70, 82, 90, 87, 92, 78, 85, 88, 95, 91].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-[#2A7ADF]"
                style={{ height: `${h * 0.55}px`, opacity: 0.6 + i * 0.033 }}
              />
            ))}
          </div>
        </div>

        {/* SIA mini card */}
        <div className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <span className="text-[9px] font-medium tracking-wide text-[#8E8E93] uppercase">
            Mean SIA
          </span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-[18px] font-bold leading-none text-[#1C1C1E]">
              0.42
            </span>
            <span className="text-[10px] text-[#8E8E93]">D @ 95°</span>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="mt-auto flex items-center justify-around border-t border-[#D1D1D6] bg-white/80 px-2 py-2">
        {["Home", "Patients", "Insights", "Settings"].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div
              className={`h-4 w-4 rounded-sm ${
                i === 2 ? "bg-[#2A7ADF]" : "bg-[#D1D1D6]"
              }`}
            />
            <span
              className={`text-[8px] ${
                i === 2
                  ? "font-semibold text-[#2A7ADF]"
                  : "text-[#8E8E93]"
              }`}
            >
              {tab}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppStoreBadge() {
  return (
    <svg
      viewBox="0 0 120 40"
      className="h-[44px] w-auto"
      role="img"
      aria-label="Download on the App Store"
    >
      <rect width="120" height="40" rx="6" fill="#000" />
      <text x="60" y="13" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="-apple-system, sans-serif" fontWeight="400">
        Download on the
      </text>
      <text x="60" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="-apple-system, sans-serif" fontWeight="600">
        App Store
      </text>
      {/* Apple logo simplified */}
      <path
        d="M17 11.5c0.8-1 1.3-2.3 1.2-3.5-1.2 0.1-2.6 0.8-3.5 1.8-0.8 0.9-1.4 2.2-1.2 3.5 1.3 0.1 2.6-0.7 3.5-1.8zm1.2 1.9c-1.9-0.1-3.6 1.1-4.5 1.1-0.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-0.5 8.7 1.5 11.5 1 1.4 2.1 3 3.6 2.9 1.5-0.1 2-0.9 3.8-0.9 1.8 0 2.3 0.9 3.8 0.9 1.6 0 2.5-1.4 3.5-2.9 1.1-1.6 1.5-3.2 1.5-3.3-0.1 0-3-1.1-3-4.5 0-2.8 2.3-4.2 2.4-4.3-1.3-2-3.4-2.2-4-2.4z"
        fill="#fff"
        transform="translate(7, 9) scale(0.6)"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-surface pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <AnimateOnScroll>
              <p className="mb-4 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
                Your Surgical Companion
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1 className="text-[2.75rem] leading-[1.08] font-bold tracking-tight text-ink md:text-[3.25rem] lg:text-[3.5rem]">
                Know your numbers.
                <br />
                Improve your surgery.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-muted">
                PhacoTrack gives you a personal analytics dashboard for every
                cataract case — from biometry capture to post-op refraction.
                Built by ophthalmologists. Designed for your pocket.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                <a href="#download" aria-label="Download on the App Store">
                  <AppStoreBadge />
                </a>
                <a
                  href="#how-it-works"
                  className="group flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-accent-deep"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <svg
                      className="ml-0.5 h-3.5 w-3.5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.271 4.44a.5.5 0 0 1 .529.047l4 3a.5.5 0 0 1 0 .8l-4 3A.5.5 0 0 1 6 10.8V5.2a.5.5 0 0 1 .271-.46z" />
                    </svg>
                  </span>
                  See how it works
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Device mockup */}
          <AnimateOnScroll delay={200} className="flex-shrink-0">
            <div className="rotate-[2deg] transition-transform duration-500 hover:rotate-0">
              <DeviceFrame>
                <MockDashboard />
              </DeviceFrame>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
