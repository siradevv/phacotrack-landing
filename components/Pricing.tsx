import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "./AnimateOnScroll";
import { monthlyPriceLabel, yearlyPriceLabel, yearlySavingsPercent } from "@/lib/pricing";
import { APP_STORE_URL } from "@/lib/links";

const freeBullets = [
  "Up to 20 cases (lifetime)",
  "5 AI scans per day",
  "Basic analytics dashboard",
  "Your case data stays on-device",
];

const proBullets = [
  "Unlimited cases",
  "Unlimited AI scanning",
  "Full analytics (6 modules + benchmarks)",
  "SIA calculator with polar plots",
  "CSV & PDF export",
  "Encrypted cloud backup & sync",
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
    <SectionWrapper id="pricing" alt>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          Pricing
        </p>
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
          Start free. Upgrade when you&apos;re ready.
        </h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
          Cancel anytime. Your case data stays yours.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
        {/* Free tier */}
        <AnimateOnScroll>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-surface px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-ink">Free</h3>
            <p className="mt-1 text-[14px] text-ink-muted">For your first 20 cases</p>
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
              href={APP_STORE_URL}
              className="mt-8 block rounded-xl border border-line py-3 text-center text-[15px] font-semibold text-ink transition-colors hover:bg-surface-alt"
            >
              Get Started
            </a>
          </div>
        </AnimateOnScroll>

        {/* Pro tier */}
        <AnimateOnScroll delay={120}>
          <div className="relative flex h-full flex-col rounded-2xl border-2 border-accent bg-surface px-7 py-8 shadow-[0_8px_30px_-8px_rgba(42,122,223,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_rgba(42,122,223,0.28)]">
            <div className="absolute -top-3.5 right-6 rounded-full bg-accent px-4 py-1 text-[12px] font-semibold text-white">
              Most Popular
            </div>

            <h3 className="text-xl font-bold text-ink">Pro</h3>
            <p className="mt-1 text-[14px] text-ink-muted">For surgeons who want the full picture</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-[2.5rem] font-bold leading-none text-ink">{monthlyPriceLabel}</span>
              <span className="text-[15px] text-ink-muted">/month</span>
            </div>
            <p className="mt-2 text-[14px] text-ink-muted">
              or {yearlyPriceLabel}/year{" "}
              <span className="inline-flex items-center rounded-full bg-positive/10 px-2.5 py-0.5 text-[12px] font-semibold text-positive">
                Save {yearlySavingsPercent}%
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
              href={APP_STORE_URL}
              className="mt-8 block rounded-xl bg-accent py-3 text-center text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start Free Trial
            </a>
            <p className="mt-3 text-center text-[12px] leading-relaxed text-ink-faint">
              Auto-renews until cancelled in your Apple ID settings. Trial converts to paid after 14 days. By subscribing you agree to our{" "}
              <a href="/terms" className="underline decoration-ink-faint/40 underline-offset-2 hover:text-ink-muted">
                Terms
              </a>
              {" "}and{" "}
              <a href="/privacy" className="underline decoration-ink-faint/40 underline-offset-2 hover:text-ink-muted">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <p className="mt-10 text-center text-[13px] text-ink-faint">
        Pricing in USD. Local pricing may vary.
      </p>
    </SectionWrapper>
  );
}
