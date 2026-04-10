import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Snap",
    description:
      "Photograph your biometry printout — IOLMaster, Lenstar, or any device. PhacoTrack's AI extracts every measurement automatically.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    mockContent: (
      <div className="flex h-full flex-col bg-[#F2F2F7]">
        <div className="h-10" />
        <div className="mx-3 mt-1 text-[9px] font-bold text-[#1C1C1E]">Scan Document</div>
        <div className="mx-3 mt-2 flex-1 rounded-xl bg-[#1C1C1E] p-2">
          <div className="flex h-full flex-col items-center justify-center gap-2">
            <div className="h-6 w-6 rounded-full border-2 border-white/40" />
            <div className="h-1 w-12 rounded bg-white/30" />
          </div>
        </div>
        <div className="mx-auto my-3 h-8 w-8 rounded-full border-[3px] border-white bg-[#D1D1D6]" />
      </div>
    ),
  },
  {
    number: "02",
    title: "Log",
    description:
      "Smart defaults pre-fill your preferred IOL, formula, and technique. Complete a case in under 30 seconds. Add post-op refraction when ready.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    mockContent: (
      <div className="flex h-full flex-col bg-[#F2F2F7]">
        <div className="h-10" />
        <div className="mx-3 mt-1 text-[9px] font-bold text-[#1C1C1E]">New Case</div>
        <div className="space-y-1.5 px-3 mt-2">
          {["Patient Name", "Hospital No.", "Eye"].map((f) => (
            <div key={f} className="rounded-lg bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="text-[7px] text-[#8E8E93]">{f}</div>
              <div className="mt-0.5 h-1.5 w-16 rounded bg-[#E5E5EA]" />
            </div>
          ))}
          <div className="rounded-lg bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-[7px] text-[#8E8E93]">IOL Model</div>
            <div className="mt-0.5 text-[8px] font-semibold text-[#1C1C1E]">SN60WF</div>
          </div>
          <div className="rounded-lg bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-[7px] text-[#8E8E93]">IOL Power</div>
            <div className="mt-0.5 text-[8px] font-semibold text-[#1C1C1E]">21.5 D</div>
          </div>
        </div>
        <div className="mx-3 mt-auto mb-3 rounded-xl bg-[#2A7ADF] py-2 text-center text-[9px] font-semibold text-white">
          Save Case
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Learn",
    description:
      "Your personal dashboard reveals patterns you'd never see otherwise — prediction accuracy, SIA trends, complication rates, and A-constant optimisation.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    mockContent: (
      <div className="flex h-full flex-col bg-[#F2F2F7]">
        <div className="h-10" />
        <div className="mx-3 mt-1 text-[9px] font-bold text-[#1C1C1E]">Insights</div>
        <div className="space-y-1.5 px-3 mt-2">
          <div className="rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="text-[7px] text-[#8E8E93]">REFRACTIVE ACCURACY</div>
            <div className="mt-1 flex items-end gap-[2px]">
              {[40, 58, 72, 85, 78, 90, 82, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-[#34C759]" style={{ height: `${h * 0.35}px` }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="text-[7px] text-[#8E8E93]">±0.50D</div>
              <div className="text-[14px] font-bold text-[#34C759]">87%</div>
            </div>
            <div className="rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="text-[7px] text-[#8E8E93]">±1.0D</div>
              <div className="text-[14px] font-bold text-[#2A7ADF]">96%</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function SmallDeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.2rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-lg">
      <div className="relative aspect-[393/852] w-[120px] overflow-hidden rounded-[0.8rem] bg-white">
        <div className="absolute top-1 left-1/2 z-10 h-[12px] w-[42px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
        {children}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
        How It Works
      </p>
      <h2 className="max-w-2xl text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
        From printout to insight in three steps.
      </h2>

      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.number} delay={i * 150}>
            <div className="flex flex-col items-center text-center">
              <SmallDeviceFrame>{step.mockContent}</SmallDeviceFrame>

              <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {step.icon}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[13px] font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
              </div>
              <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
