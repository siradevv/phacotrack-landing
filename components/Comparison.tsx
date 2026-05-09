import SectionWrapper from "./SectionWrapper";

function Check({ highlight = false }: { highlight?: boolean }) {
  return (
    <svg className={`mx-auto h-5 w-5 ${highlight ? "text-accent" : "text-positive"}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="mx-auto h-5 w-5 text-ink-faint" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

const rows = [
  { feature: "Cataract-specific fields", paper: false, generic: false, enterprise: true, phacotrack: true },
  { feature: "AI scan extraction", paper: false, generic: false, enterprise: "Own devices", phacotrack: "Any device" },
  { feature: "Case entry < 30 seconds", paper: false, generic: false, enterprise: false, phacotrack: true },
  { feature: "Personal IOL constants", paper: false, generic: false, enterprise: "Some", phacotrack: true },
  { feature: "SIA analysis", paper: false, generic: false, enterprise: "Some", phacotrack: "Built-in" },
  { feature: "Mobile-first", paper: false, generic: "Partial", enterprise: false, phacotrack: true },
  { feature: "CSV & PDF export", paper: false, generic: "Basic", enterprise: true, phacotrack: true },
  { feature: "Hardware lock-in", paper: "N/A", generic: "N/A", enterprise: "Yes", phacotrack: "None" },
];

function CellContent({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (value === true) return <Check highlight={highlight} />;
  if (value === false) return <Cross />;
  return (
    <span className={`text-[13px] ${highlight ? "font-semibold text-accent" : "text-ink-muted"}`}>
      {value}
    </span>
  );
}

export default function Comparison() {
  return (
    <SectionWrapper id="comparison" alt>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          Why PhacoTrack
        </p>
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight text-ink md:text-[2.25rem]">
          Spreadsheet simple. Enterprise capable.
        </h2>
      </div>

      {/* Mobile: stacked feature cards */}
      <div className="mx-auto mt-10 max-w-md space-y-3 md:hidden">
        {rows.map((row) => (
          <div key={row.feature} className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="text-[15px] font-semibold text-ink">{row.feature}</h3>
            <dl className="mt-3 space-y-2 text-[13px]">
              <div className="flex items-center justify-between">
                <dt className="text-ink-muted">Paper / Excel</dt>
                <dd><CellContent value={row.paper} /></dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-muted">Generic Apps</dt>
                <dd><CellContent value={row.generic} /></dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-muted">Enterprise</dt>
                <dd><CellContent value={row.enterprise} /></dd>
              </div>
              <div className="-mx-2 mt-2 flex items-center justify-between rounded-lg bg-accent/5 px-3 py-2">
                <dt className="font-semibold text-accent">PhacoTrack</dt>
                <dd><CellContent value={row.phacotrack} highlight /></dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      {/* Desktop: comparison table */}
      <div className="mx-auto mt-12 hidden max-w-4xl md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-line">
              <th className="py-4 pr-4 text-left text-[13px] font-semibold text-ink-muted">
                Feature
              </th>
              <th className="px-4 py-4 text-center text-[13px] font-medium text-ink-muted">
                Paper / Excel
              </th>
              <th className="px-4 py-4 text-center text-[13px] font-medium text-ink-muted">
                Generic Apps
              </th>
              <th className="px-4 py-4 text-center text-[13px] font-medium text-ink-muted">
                Enterprise
              </th>
              <th className="rounded-t-xl bg-accent/5 px-4 py-4 text-center text-[13px] font-semibold text-accent">
                PhacoTrack
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature} className="border-b border-line/50">
                <td className="py-3.5 pr-4 text-[14px] font-medium text-ink">
                  {row.feature}
                </td>
                <td className="px-4 py-3.5 text-center">
                  <CellContent value={row.paper} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <CellContent value={row.generic} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <CellContent value={row.enterprise} />
                </td>
                <td className={`bg-accent/5 px-4 py-3.5 text-center ${i === rows.length - 1 ? "rounded-b-xl" : ""}`}>
                  <CellContent value={row.phacotrack} highlight />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
