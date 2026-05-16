"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "Is PhacoTrack a medical device?",
    a: "No. PhacoTrack is a personal outcomes tracker for individual surgeons to review their own surgical data. It is not a regulated medical device and does not provide diagnostic or treatment recommendations. All clinical decisions remain with the operating surgeon.",
  },
  {
    q: "Does PhacoTrack work offline?",
    a: "Yes. Case logging, browsing, and analytics all work fully offline \u2014 your data lives on your iPhone. Only AI scanning (photo \u2192 server for extraction) and Pro cloud sync need a connection. Sync queues automatically and uploads when you reconnect.",
  },
  {
    q: "Which biometry devices are supported?",
    a: "Any of them. PhacoTrack\u2019s AI scanning works with printouts from any biometry \u2014 optical or immersion. It also extracts data from autokeratometry, specular microscopy (ECC), and phaco machine summary printouts.",
  },
  {
    q: "Is my patient data safe?",
    a: "Case data is stored locally on your device and protected by Face ID or Touch ID. Cloud sync (Pro) encrypts patient identifiers (name, hospital number, date of birth, notes) with AES-256 on your device before upload \u2014 the encryption keys are tied to your Apple account. AI scanning is the one exception: photos are uploaded to our server for measurement extraction and a copy is retained so we can monitor accuracy. You can request removal of your scanned images at any time. See our Privacy Policy for full details.",
  },
  {
    q: "Can I export my data for audits or research?",
    a: "Pro subscribers can export their full case database as CSV (compatible with Excel, SPSS, R) with 9 customisable column groups. You can also generate individual A4 PDF case reports with optional patient anonymisation for presentations.",
  },
  {
    q: "What analytics does PhacoTrack provide?",
    a: "Six modules: refractive outcomes (MAE, \u00b10.50D accuracy), visual outcomes (BCVA/UCVA), safety & efficiency (complication rate, op time), energy & corneal health (phaco energy, ECC loss), SIA analysis (polar plots), and follow-up coverage. All with benchmarks against RCOphth and UK NOD standards.",
  },
  {
    q: "How is PhacoTrack different from IOL calculators?",
    a: "IOL calculators help you pick a lens for one patient. PhacoTrack tracks your outcomes across all patients \u2014 so you can see your real prediction accuracy, optimise your personal IOL constants from your own surgical data, analyse your SIA, and monitor your complication rate over time.",
  },
  {
    q: "What happens to my data if I cancel Pro?",
    a: "Your existing cases stay on your device \u2014 nothing is deleted. Cancelling stops cloud sync and turns off Pro-only features (full analytics, export, SIA polar plots), but you keep full access to every case you\u2019ve already logged. Re-subscribing picks up where you left off.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 text-ink-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
