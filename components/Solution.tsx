import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Solution() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center">
              <Image
                src="/app-icon.png"
                alt="PhacoTrack"
                width={96}
                height={96}
                className="rounded-[22px] shadow-[0_8px_30px_-4px_rgba(42,122,223,0.3)]"
              />
            </div>
            <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
              Introducing PhacoTrack
            </p>
            <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
              Your personal cataract surgery
              <br />
              outcomes tracker.
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              Your cases, your data, your insights — all from your phone.
            </p>
            <div className="mt-7 flex justify-center">
              <a href="#download" aria-label="Download on the App Store">
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-[48px] w-auto"
                />
              </a>
            </div>
            {/* Trust signals */}
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
  );
}
