import Image from "next/image";
import DeviceFrame from "./DeviceFrame";
import AnimateOnScroll from "./AnimateOnScroll";
import { APP_STORE_URL } from "@/lib/links";

function AppStoreBadge() {
  return (
    <Image
      src="/app-store-badge.svg"
      alt="Download on the App Store"
      width={140}
      height={44}
      priority
      className="h-[44px] w-auto"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <AnimateOnScroll>
              <p className="mb-4 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
                Your Surgical Companion
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1 className="text-[2.5rem] leading-[1.05] font-bold tracking-tight text-ink sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem]">
                Know your numbers.
                <br />
                Improve your surgery.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-muted">
                PhacoTrack gives you a personal analytics dashboard for every
                cataract case — track your true surgical performance from
                biometry to post-op refraction. Built by ophthalmologists,
                for ophthalmologists.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                <a href={APP_STORE_URL} aria-label="Download on the App Store">
                  <AppStoreBadge />
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Device mockup */}
          <AnimateOnScroll delay={200} className="flex-shrink-0">
            <div className="rotate-[2deg] transition-transform duration-500 hover:rotate-0">
              <DeviceFrame hideDynamicIsland>
                <Image
                  src="/screenshots/insights.png"
                  alt="PhacoTrack Insights dashboard showing refractive outcomes, visual outcomes, and SIA analysis"
                  width={1320}
                  height={2868}
                  priority
                  className="h-full w-full object-cover"
                />
              </DeviceFrame>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
