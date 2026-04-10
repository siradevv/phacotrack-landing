export default function DeviceFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer bezel */}
      <div className="relative rounded-[3rem] border-[12px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)]">
        {/* Screen */}
        <div className="relative aspect-[393/852] w-[260px] overflow-hidden rounded-[2.25rem] bg-white md:w-[290px]">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />

          {/* Screen content */}
          <div className="relative h-full w-full">{children}</div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 z-20 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-black/20" />
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute top-[100px] -right-[2px] h-[52px] w-[3px] rounded-r-sm bg-[#2a2a2a]" />
      <div className="absolute top-[85px] -left-[2px] h-[28px] w-[3px] rounded-l-sm bg-[#2a2a2a]" />
      <div className="absolute top-[125px] -left-[2px] h-[46px] w-[3px] rounded-l-sm bg-[#2a2a2a]" />
      <div className="absolute top-[180px] -left-[2px] h-[46px] w-[3px] rounded-l-sm bg-[#2a2a2a]" />
    </div>
  );
}
