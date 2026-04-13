import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    title: "AI-Powered Scanning",
    description: "Point your camera at any printout. AI extracts the data for you.",
    bullets: [
      "Biometry: AL, K1, K2, ACD, LT, WTW, CCT, and full IOL tables",
      "Also scans autokeratometry, specular microscopy, and phaco summaries",
      "Supports all major optical and immersion biometers",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    title: "Personal Analytics",
    description: "Six modules that show your real surgical performance.",
    bullets: [
      "Refractive accuracy, visual outcomes, complication rates, and more",
      "SIA analysis with polar plots",
      "Compare against published benchmarks (RCOphth, UK NOD)",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Complete Case Records",
    description: "Log every detail from pre-op to final follow-up.",
    bullets: [
      "Your preferred IOL, formula, and technique are pre-selected",
      "Follow-ups at Day 1, Week 1, Month 1, and extended intervals",
      "25+ comorbidity flags and complication debrief",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
      </svg>
    ),
  },
  {
    title: "SIA Calculator",
    description: "Understand your surgically induced astigmatism.",
    bullets: [
      "Alpins vector analysis with double-angle polar plots",
      "Centroid calculation with standard deviation",
      "Filter by incision type, location, and time period",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M4.5 19.5H12M4.5 19.5V12" />
      </svg>
    ),
  },
  {
    title: "Export & Audit",
    description: "Your data, ready when you need it.",
    bullets: [
      "Export your full case database as CSV for Excel or research tools",
      "Generate PDF case reports for individual patients",
      "Anonymise patient data for presentations or publications",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: "Cloud Sync",
    description: "Encrypted backup across all your devices.",
    bullets: [
      "AES-256 encryption for all patient identifiers",
      "Syncs automatically in the background",
      "Only your Apple ID can decrypt your data",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-positive" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Features() {
  return (
    <SectionWrapper id="features">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          Features
        </p>
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
          Built around real cataract surgery workflows.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
        {features.map((feature, i) => (
          <AnimateOnScroll key={feature.title} delay={i * 60}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-[1rem] font-bold text-ink">{feature.title}</h3>
              </div>
              <p className="mt-3 text-[14px] text-ink-muted">{feature.description}</p>
              <ul className="mt-3 space-y-1.5">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[13px] text-ink-muted">
                    <CheckIcon />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
