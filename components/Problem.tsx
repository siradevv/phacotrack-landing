import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Problem() {
  return (
    <SectionWrapper id="problem" alt>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          The Problem
        </p>
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
          Most surgeons don&apos;t know their real numbers.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-muted">
          Whether you track outcomes manually or don&apos;t track at all,
          the result is the same.
        </p>
        <p className="mt-2 text-[1.1rem] font-semibold text-ink">
          You&apos;re operating without feedback.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Group 1: Manual trackers */}
        <AnimateOnScroll>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-[1.25rem] font-bold text-ink">
                Logging cases manually?
              </h3>
            </div>
            <p className="mt-2 text-[14px] italic text-ink-muted">
              &ldquo;Logging more doesn&apos;t mean learning more.&rdquo;
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                "Typos slip into IOL calculations unnoticed",
                "Cases are hard to find when you need them",
                "Slow to log, easy to fall behind",
                "No analytics, just raw data",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink-muted">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3B30]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Or divider */}
        <div className="hidden items-center md:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-alt text-[13px] font-semibold text-ink-muted">
            or
          </div>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-alt text-[12px] font-semibold text-ink-muted">
            or
          </div>
        </div>

        {/* Group 2: Non-trackers */}
        <AnimateOnScroll delay={150}>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </div>
              <h3 className="text-[1.25rem] font-bold text-ink">
                Not logging at all?
              </h3>
            </div>
            <p className="mt-2 text-[14px] italic text-ink-muted">
              &ldquo;You don&apos;t know what you don&apos;t know.&rdquo;
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                "No visibility into your own outcomes",
                "No way to know if you\u2019re above or below average",
                "Still using factory IOL constants",
                "No data for audits or appraisals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink-muted">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF9500]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Bridge statement */}
      <AnimateOnScroll>
        <p className="mx-auto mt-12 max-w-2xl text-center text-[1.1rem] font-medium text-ink">
          There&apos;s a better way...
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
