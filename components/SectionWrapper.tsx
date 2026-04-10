import AnimateOnScroll from "./AnimateOnScroll";

export default function SectionWrapper({
  id,
  children,
  className = "",
  alt = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alt ? "bg-surface-alt" : "bg-surface"} ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>{children}</AnimateOnScroll>
      </div>
    </section>
  );
}
