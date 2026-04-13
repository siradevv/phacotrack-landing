import DeviceFrame from "./DeviceFrame";
import AnimateOnScroll from "./AnimateOnScroll";

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const h = 18;
  const w = 48;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-[16px] w-[44px]" fill="none">
      <polyline points={points} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg className="h-[10px] w-[10px] text-[#C7C7CC]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  );
}

function MockDashboard() {
  return (
    <div className="flex h-full flex-col bg-[#F2F2F7] text-[10px]">
      {/* Status bar */}
      <div className="flex h-[48px] items-end justify-between px-5 pb-1">
        <span className="text-[9px] font-semibold text-[#1C1C1E]">9:41</span>
        <div className="flex items-center gap-1">
          <svg className="h-[9px] w-[13px]" fill="#1C1C1E" viewBox="0 0 17 12"><rect x="0" y="3" width="3" height="9" rx="0.5" opacity="0.3"/><rect x="4.5" y="2" width="3" height="10" rx="0.5" opacity="0.5"/><rect x="9" y="1" width="3" height="11" rx="0.5" opacity="0.7"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
          <svg className="h-[9px] w-[18px]" fill="#1C1C1E" viewBox="0 0 25 12"><rect x="0" y="0.5" width="21" height="11" rx="2" stroke="#1C1C1E" strokeWidth="1" fill="none"/><rect x="22" y="3.5" width="2" height="5" rx="0.5"/><rect x="1.5" y="2" width="16" height="8" rx="1" fill="#34C759"/></svg>
        </div>
      </div>

      {/* Large nav title — matches real app */}
      <div className="mx-4 mb-2">
        <span className="text-[18px] font-bold text-[#1C1C1E]">Insights</span>
      </div>

      {/* Time window pills */}
      <div className="mx-3 mb-2.5 flex gap-[5px]">
        {["7D", "1M", "3M", "6M", "12M", "All"].map((t, i) => (
          <div
            key={t}
            className={`rounded-full px-[6px] py-[3px] text-[7px] font-semibold ${
              i === 5 ? "bg-[#2A7ADF] text-white" : "bg-[#E5E5EA] text-[#8E8E93]"
            }`}
          >
            {t}
          </div>
        ))}
      </div>

      <div className="space-y-[6px] overflow-hidden px-3 pb-2">
        {/* Practice Overview — collapsed like real app */}
        <div className="rounded-xl bg-white px-3 py-2.5 shadow-[0_0.5px_2px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#1C1C1E]">Practice Overview</span>
            <Chevron />
          </div>
        </div>

        {/* Refractive Outcomes */}
        <div className="rounded-xl bg-white px-3 py-2.5 shadow-[0_0.5px_2px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#1C1C1E]">Refractive Outcomes</span>
            <Chevron />
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-[7px] text-[#8E8E93]">Within ±0.50 D</div>
              <div className="text-[15px] font-bold leading-tight text-[#2A7ADF]">87%</div>
              <Sparkline data={[78, 80, 82, 84, 85, 86, 87]} color="#2A7ADF" />
            </div>
            <div className="text-right">
              <div className="text-[7px] text-[#8E8E93]">MAE</div>
              <div className="text-[15px] font-bold leading-tight text-[#1C1C1E]">0.31 D</div>
            </div>
          </div>
        </div>

        {/* Visual Outcomes */}
        <div className="rounded-xl bg-white px-3 py-2.5 shadow-[0_0.5px_2px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#1C1C1E]">Visual Outcomes</span>
            <Chevron />
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-[7px] text-[#8E8E93]">BCVA ≥ 20/40</div>
              <div className="text-[15px] font-bold leading-tight text-[#34C759]">95%</div>
              <Sparkline data={[88, 89, 91, 92, 93, 94, 95]} color="#34C759" />
            </div>
            <div className="text-right">
              <div className="text-[7px] text-[#8E8E93]">UCVA ≥ 20/40</div>
              <div className="text-[15px] font-bold leading-tight text-[#1C1C1E]">68%</div>
            </div>
          </div>
        </div>

        {/* Safety & Efficiency */}
        <div className="rounded-xl bg-white px-3 py-2.5 shadow-[0_0.5px_2px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#1C1C1E]">Safety &amp; Efficiency</span>
            <Chevron />
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-[7px] text-[#8E8E93]">Intra-op complications</div>
              <div className="text-[15px] font-bold leading-tight text-[#34C759]">1.2%</div>
              <Sparkline data={[2.8, 2.4, 2.1, 1.8, 1.5, 1.3, 1.2]} color="#FF9500" />
            </div>
            <div className="text-right">
              <div className="text-[7px] text-[#8E8E93]">Median op time</div>
              <div className="text-[15px] font-bold leading-tight text-[#1C1C1E]">14:32</div>
            </div>
          </div>
        </div>

        {/* Energy & Corneal Health */}
        <div className="rounded-xl bg-white px-3 py-2.5 shadow-[0_0.5px_2px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#1C1C1E]">Energy &amp; Corneal Health</span>
            <Chevron />
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-[7px] text-[#8E8E93]">Median energy</div>
              <div className="text-[15px] font-bold leading-tight text-[#1C1C1E]">8.24</div>
              <Sparkline data={[11.2, 10.5, 9.8, 9.4, 8.9, 8.5, 8.24]} color="#5AC8FA" />
            </div>
            <div className="text-right">
              <div className="text-[7px] text-[#8E8E93]">Median cell loss</div>
              <div className="text-[15px] font-bold leading-tight text-[#1C1C1E]">4.2%</div>
            </div>
          </div>
        </div>

        {/* SIA Analysis — partially visible to show scroll */}
        <div className="rounded-xl bg-white px-3 pt-2.5 shadow-[0_0.5px_2px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#1C1C1E]">SIA Analysis</span>
            <Chevron />
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              <div className="text-[7px] text-[#8E8E93]">Median SIA</div>
            </div>
            <div className="text-right">
              <div className="text-[7px] text-[#8E8E93]">Median axis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab bar — matches real app */}
      <div className="mt-auto">
        <div className="mx-1.5 mb-1.5 flex items-center justify-around rounded-[14px] bg-[#F0F0F0] px-1 py-[4px] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
          {[
            { name: "Home", icon: <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.71 2.29a1 1 0 00-1.42 0l-9 9a1 1 0 001.42 1.42L4 12.41V21a1 1 0 001 1h5a1 1 0 001-1v-5h2v5a1 1 0 001 1h5a1 1 0 001-1v-8.59l.29.3a1 1 0 001.42-1.42l-9-9z" /></svg> },
            { name: "Patients", icon: <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg> },
            { name: "Insights", icon: <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 4h5a1 1 0 010 2H6a1 1 0 010-2zm0 3h12a1 1 0 010 2H6a1 1 0 010-2zm0 3h8a1 1 0 010 2H6a1 1 0 010-2z" /></svg> },
            { name: "Settings", icon: <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54A.48.48 0 0013.93 2h-3.84a.48.48 0 00-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.47a.48.48 0 00.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.26.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg> },
          ].map((tab) => {
            const active = tab.name === "Insights";
            return (
              <div key={tab.name} className="flex flex-col items-center gap-[1px]">
                <div className={`flex items-center justify-center rounded-[8px] p-[5px] ${active ? "bg-[#2A7ADF] text-white" : "text-[#1C1C1E]"}`}>
                  {tab.icon}
                </div>
                <span className={`text-[7px] ${active ? "font-semibold text-[#2A7ADF]" : "text-[#1C1C1E]"}`}>{tab.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AppStoreBadge() {
  return (
    <img
      src="/app-store-badge.svg"
      alt="Download on the App Store"
      className="h-[44px] w-auto"
    />
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
              <h1 className="text-[2.25rem] leading-[1.08] font-bold tracking-tight text-ink sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem]">
                Know your numbers.
                <br />
                Improve your surgery.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-muted">
                PhacoTrack gives you a personal analytics dashboard for every
                cataract case — track your true surgical performance from
                biometry to post-op refraction. Built by ophthalmologists,
                for ophthalmologists.
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
