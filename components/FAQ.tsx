"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "Does PhacoTrack work offline?",
    a: "Yes. PhacoTrack is offline-first \u2014 all your data is stored locally on your device. You can log cases and view analytics without internet. Cloud sync (Pro) happens automatically when you reconnect.",
  },
  {
    q: "Which biometry devices are supported?",
    a: "PhacoTrack\u2019s AI scanning works with printouts from any optical biometer (IOLMaster, Lenstar, Pentacam AXL, and more) and immersion A-scan devices. It also extracts data from autokeratometry, specular microscopy (ECC), and phaco machine summary printouts.",
  },
  {
    q: "How fast is case logging?",
    a: "Under 30 seconds for most cases. Smart defaults pre-fill your preferred IOL model, formula, and surgical technique. Biometry data auto-populates from AI scans. You just confirm and save.",
  },
  {
    q: "Is my patient data safe?",
    a: "Yes. Case data is stored locally on your device and protected by Face ID or Touch ID. Cloud sync (Pro) encrypts patient identifiers with AES-256 on your device before upload \u2014 only your Apple ID can decrypt them. The one exception is AI scanning: photos are uploaded to our server for extraction and a copy is retained so we can monitor extraction accuracy. You can request removal of your scanned images at any time. See our Privacy Policy for full details.",
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
    a: "IOL calculators help you pick a lens for one patient. PhacoTrack tracks your outcomes across all patients \u2014 so you can see your real prediction accuracy, optimise your A-constant from your own surgical data, analyse your SIA, and monitor your complication rate over time.",
  },
  {
    q: "What\u2019s included in the free tier?",
    a: "Up to 30 cases, 5 AI scans per day, and a basic analytics dashboard. The free tier never expires and doesn\u2019t require a credit card. Upgrade to Pro when you want unlimited cases, full analytics, export, and cloud sync.",
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
    <SectionWrapper id="faq" alt>
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
