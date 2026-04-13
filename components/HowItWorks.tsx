import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "1",
    title: "Snap",
    description: "Photograph your biometry, autokeratometry, ECC, or phaco summary printout. AI reads every value for you.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Log",
    description: "Fill in your case details. Your preferred IOL, formula, and technique are already selected for you.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Learn",
    description: "Your dashboard shows your real outcomes, trends, and where you can improve \u2014 updated with every case.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" alt>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          How It Works
        </p>
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
          From printout to insight in three steps.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.number} delay={i * 150}>
            <div className="relative flex flex-col items-center rounded-2xl border border-line bg-surface px-6 py-8 text-center">
              {/* Step number */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white text-[1.1rem] font-bold shadow-[0_4px_14px_-2px_rgba(42,122,223,0.35)]">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {step.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
