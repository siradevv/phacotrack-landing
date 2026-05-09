import Image from "next/image";
import DeviceFrame from "./DeviceFrame";
import AnimateOnScroll from "./AnimateOnScroll";

const screens = [
  {
    src: "/screenshots/home.png",
    title: "Today",
    description: "Surgeries scheduled, follow-ups pending.",
    alt: "PhacoTrack home screen showing today's scheduled surgeries and pending follow-ups",
  },
  {
    src: "/screenshots/patients.png",
    title: "Patients",
    description: "Every case organised by upcoming surgery and follow-up window.",
    alt: "PhacoTrack patients list grouped by upcoming surgery and follow-up window",
  },
  {
    src: "/screenshots/insights.png",
    title: "Insights",
    description: "Refractive accuracy, complication rates, SIA — your real performance.",
    alt: "PhacoTrack insights dashboard showing refractive outcomes, visual outcomes, and SIA analysis",
  },
];

export default function AppTour() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
              On your phone
            </p>
            <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
              Built for the way you actually work.
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              Quick to log on theatre days, organised between cases, insightful when you review.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 flex flex-col items-center justify-center gap-12 md:flex-row md:items-start md:gap-16">
          {screens.map((screen, i) => (
            <AnimateOnScroll key={screen.src} delay={i * 120}>
              <div className="flex flex-col items-center gap-5 text-center">
                <DeviceFrame hideDynamicIsland>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1320}
                    height={2868}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </DeviceFrame>
                <div className="max-w-[280px]">
                  <h3 className="text-[17px] font-semibold text-ink">{screen.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">
                    {screen.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
