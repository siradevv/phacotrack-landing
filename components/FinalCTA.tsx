import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

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
                Know your numbers.
                <br />
                Start with your next case.
              </h2>
              <p className="mt-4 text-[1.1rem] leading-relaxed text-ink-muted">
                Free to download. No credit card required.
                <br />
                See your real outcomes from day one.
              </p>
              <div className="mt-8 flex justify-center">
                <a href="#download" aria-label="Download on the App Store">
                  <img
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    className="h-[52px] w-auto"
                  />
                </a>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[12px] text-ink-faint">
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                  AES-256 encrypted
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                  Offline-first
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                  Face ID protected
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-surface py-8 md:py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-6 md:flex-row md:justify-between">
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
            <a href="/privacy" className="transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-ink">
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
