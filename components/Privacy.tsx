import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

const trustPoints = [
  {
    title: "AES-256 Encryption",
    detail: "All data encrypted at rest and in transit",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Face ID / Touch ID",
    detail: "Biometric lock keeps your app private",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    ),
  },
  {
    title: "Offline-first",
    detail: "Works without internet — sync when you're ready",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "PDPA Aware",
    detail: "Designed with Thailand's data protection law in mind",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Privacy() {
  return (
    <SectionWrapper id="privacy">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          Your Data, Your Control
        </p>
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
          Privacy-first. Always.
        </h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
          Your surgical data is sensitive. PhacoTrack treats it that way.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, i) => (
          <AnimateOnScroll key={point.title} delay={i * 100}>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface-alt px-5 py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {point.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-1 text-[14px] text-ink-muted">
                  {point.detail}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
