import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

function AppStoreBadge() {
  return (
    <svg
      viewBox="0 0 120 40"
      className="h-[52px] w-auto"
      role="img"
      aria-label="Download on the App Store"
    >
      <rect width="120" height="40" rx="6" fill="#000" />
      <text x="60" y="13" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="-apple-system, sans-serif" fontWeight="400">
        Download on the
      </text>
      <text x="60" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="-apple-system, sans-serif" fontWeight="600">
        App Store
      </text>
      <path
        d="M17 11.5c0.8-1 1.3-2.3 1.2-3.5-1.2 0.1-2.6 0.8-3.5 1.8-0.8 0.9-1.4 2.2-1.2 3.5 1.3 0.1 2.6-0.7 3.5-1.8zm1.2 1.9c-1.9-0.1-3.6 1.1-4.5 1.1-0.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-0.5 8.7 1.5 11.5 1 1.4 2.1 3 3.6 2.9 1.5-0.1 2-0.9 3.8-0.9 1.8 0 2.3 0.9 3.8 0.9 1.6 0 2.5-1.4 3.5-2.9 1.1-1.6 1.5-3.2 1.5-3.3-0.1 0-3-1.1-3-4.5 0-2.8 2.3-4.2 2.4-4.3-1.3-2-3.4-2.2-4-2.4z"
        fill="#fff"
        transform="translate(7, 9) scale(0.6)"
      />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <>
      {/* CTA Section */}
      <section
        id="download"
        className="bg-gradient-to-b from-surface to-accent-light py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.5rem]">
                Start tracking your outcomes today.
              </h2>
              <p className="mt-4 text-[1.1rem] text-ink-muted">
                Join the surgeons who are using data to improve patient care.
              </p>
              <div className="mt-8 flex justify-center">
                <a href="#download" aria-label="Download on the App Store">
                  <AppStoreBadge />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-surface py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/app-icon-small.png"
              alt="PhacoTrack"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-[15px] font-semibold text-ink">
              PhacoTrack
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[14px] text-ink-muted">
            <a href="#" className="transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Terms of Use
            </a>
            <a
              href="mailto:support@phacotrack.com"
              className="transition-colors hover:text-ink"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[13px] text-ink-faint">
            &copy; {new Date().getFullYear()} PhacoTrack
          </p>
        </div>
      </footer>
    </>
  );
}
