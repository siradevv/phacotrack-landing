"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "Does PhacoTrack work offline?",
    a: "Yes. PhacoTrack is offline-first — you can log cases and view your analytics without internet access. Data syncs automatically when you reconnect (Pro feature).",
  },
  {
    q: "Which biometry devices are supported?",
    a: "PhacoTrack's AI scanning works with printouts from any optical biometer (IOLMaster, Lenstar, Pentacam AXL, etc.) and immersion A-scan devices. If it prints, we can scan it.",
  },
  {
    q: "Is my patient data safe?",
    a: "All data is encrypted with AES-256, protected by Face ID or Touch ID, and stored locally on your device by default. Cloud sync (Pro) uses end-to-end encryption. We never access your data.",
  },
  {
    q: "Can I export my data for research or audits?",
    a: "Pro subscribers can export all case data as CSV (compatible with Excel, SPSS, R) or as encrypted PDF backup files.",
  },
  {
    q: "How is PhacoTrack different from IOL calculators?",
    a: "IOL calculators help you pick a lens for one patient. PhacoTrack tracks your outcomes across all patients — so you can optimise your personal A-constant, analyse your SIA, and see how your technique is improving over time. They're complementary tools.",
  },
  {
    q: "I'm a resident/fellow. Is there a discount?",
    a: "The free tier (30 cases) is a great starting point for trainees. We're exploring institutional licensing for residency programmes — contact us if your department is interested.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 text-ink-muted transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
            FAQ
          </p>
          <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
            Questions? We&apos;ve got answers.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold text-ink">
                    {faq.q}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[15px] leading-relaxed text-ink-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
