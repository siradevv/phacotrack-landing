import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "1–3%", label: "Manual transcription error rate" },
  { value: "0", label: "Mobile-first apps built for cataract outcomes" },
  { value: "<30s", label: "Time it should take to log a case" },
];

export default function Problem() {
  return (
    <SectionWrapper id="problem" alt>
      <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
        The Problem
      </p>
      <h2 className="max-w-2xl text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
        The way surgeons track outcomes hasn&apos;t changed in 20 years.
      </h2>
      <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">
        Paper printouts. Handwritten notes. Scattered Excel files. Most cataract
        surgeons have no reliable way to track their personal surgical
        performance — and studies show manual data transcription introduces
        errors that directly impact patient outcomes.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat, i) => (
          <AnimateOnScroll key={stat.label} delay={i * 120}>
            <div className="rounded-2xl border border-line bg-surface px-6 py-8 text-center">
              <div className="text-[2.5rem] font-bold leading-none text-accent">
                {stat.value}
              </div>
              <p className="mt-3 text-[15px] text-ink-muted">{stat.label}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
