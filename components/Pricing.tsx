import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";

const freeBullets = [
  "Up to 30 cases",
  "5 AI scans per day",
  "Basic analytics dashboard",
  "Works offline, always",
];

const proBullets = [
  "Unlimited cases",
  "Unlimited AI scanning",
  "Full analytics (6 modules + benchmarks)",
  "SIA calculator with polar plots",
  "CSV & PDF export",
  "Encrypted cloud backup & sync",
  "14-day free trial",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-4 w-4 flex-shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          Pricing
        </p>
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
          Start free. Upgrade when you&apos;re ready.
        </h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
          No credit card required. No commitment. Just better outcomes.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
        {/* Free tier */}
        <AnimateOnScroll>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-surface px-7 py-8">
            <h3 className="text-xl font-bold text-ink">Free</h3>
            <p className="mt-1 text-[14px] text-ink-muted">Perfect for getting started</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-[2.5rem] font-bold leading-none text-ink">$0</span>
              <span className="text-[15px] text-ink-muted">forever</span>
            </div>
            <ul className="mt-8 flex-1 space-y-3">
              {freeBullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] text-ink-muted">
                  <CheckIcon className="mt-0.5 text-ink-faint" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="mt-8 block rounded-xl border border-line py-3 text-center text-[15px] font-semibold text-ink transition-colors hover:bg-surface-alt"
            >
              Get Started
            </a>
          </div>
        </AnimateOnScroll>

        {/* Pro tier */}
        <AnimateOnScroll delay={120}>
          <div className="relative flex h-full flex-col rounded-2xl border-2 border-accent bg-surface px-7 py-8 shadow-[0_8px_30px_-8px_rgba(42,122,223,0.15)]">
            <div className="absolute -top-3.5 right-6 rounded-full bg-accent px-4 py-1 text-[12px] font-semibold text-white">
              Most Popular
            </div>

            <h3 className="text-xl font-bold text-ink">Pro</h3>
            <p className="mt-1 text-[14px] text-ink-muted">For surgeons who want the full picture</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-[2.5rem] font-bold leading-none text-ink">$9.99</span>
              <span className="text-[15px] text-ink-muted">/month</span>
            </div>
            <p className="mt-2 text-[14px] text-ink-muted">
              or $79.99/year{" "}
              <span className="inline-flex items-center rounded-full bg-positive/10 px-2.5 py-0.5 text-[12px] font-semibold text-positive">
                Save 33%
              </span>
            </p>

            <ul className="mt-8 flex-1 space-y-3">
              {proBullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] text-ink-muted">
                  <CheckIcon className="mt-0.5 text-accent" />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-8 block rounded-xl bg-accent py-3 text-center text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start Free Trial
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Price anchoring — enterprise comparison */}
      <p className="mt-10 text-center text-[14px] text-ink-muted">
        Enterprise surgical audit systems cost $274&ndash;$9,000/month per surgeon.
        <br className="hidden sm:block" />
        {" "}PhacoTrack gives you personal outcomes tracking for less than a coffee a week.
      </p>

      <p className="mt-3 text-center text-[13px] text-ink-faint">
        Pricing in USD. Local pricing may vary. Cancel anytime.
      </p>
    </SectionWrapper>
  );
}
