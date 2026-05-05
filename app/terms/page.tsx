import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — PhacoTrack",
  description: "PhacoTrack terms of service.",
  alternates: { canonical: "https://phacotrack.com/terms" },
  openGraph: {
    title: "Terms of Service — PhacoTrack",
    description: "Terms of service for the PhacoTrack iOS app.",
    url: "https://phacotrack.com/terms",
    type: "article",
    siteName: "PhacoTrack",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — PhacoTrack",
    description: "Terms of service for the PhacoTrack iOS app.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[720px] px-6 pt-28 pb-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: 5 May 2026</p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-ink/80">
          <Section title="Acceptance">
            <p>
              By installing or using PhacoTrack, you agree to these Terms. If you
              do not agree, please discontinue use.
            </p>
          </Section>

          <Section title="What PhacoTrack Is">
            <p>
              PhacoTrack is a personal surgical logbook for ophthalmologists. It
              helps you document cataract cases and review your own outcomes.
            </p>
            <p>
              It is not a registered medical device, electronic health record, or
              clinical decision-support tool. It does not diagnose, recommend
              treatment, or substitute for professional clinical judgment. Always
              verify AI-extracted data before using it in any clinical decision.
            </p>
          </Section>

          <Section title="Account & Subscription">
            <p>
              Sign in with Apple is required. You are responsible for the
              security of your Apple ID.
            </p>
            <p>
              Pro subscriptions are billed through the App Store and renew
              automatically unless cancelled at least 24 hours before the next
              billing period. You can manage or cancel anytime in your Apple ID
              settings. Refunds are handled by Apple.
            </p>
          </Section>

          <Section title="Acceptable Use">
            <p>
              Use PhacoTrack only as a personal surgical logbook for qualified
              ophthalmologists. Do not share your account with anyone, do not
              upload non-clinical material such as patient photographs or staff
              images, and do not reverse engineer the app.
            </p>
            <p>
              You are responsible for using PhacoTrack in line with applicable
              laws and your institution&rsquo;s policies.
            </p>
          </Section>

          <Section title="Your Data & Compliance">
            <p>
              You own the data you enter. We do not claim any rights to it. How
              we store and process your data is described in the{" "}
              <Link
                href="/privacy"
                className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              PhacoTrack is not a HIPAA-compliant service, and we do not offer
              Business Associate Agreements. If your country, region, or
              institution has specific rules about storing patient information
              &mdash; including HIPAA, GDPR, PDPA, or hospital policy &mdash; it
              is your responsibility to ensure your use of PhacoTrack complies.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p>
              PhacoTrack is provided &ldquo;as is.&rdquo; We do not guarantee
              that the app will be error-free, always available, or that
              AI-extracted data will be accurate. You are responsible for keeping
              backups of important data.
            </p>
            <p>
              To the extent allowed by law, we are not liable for any losses
              arising from your use of PhacoTrack, including clinical decisions,
              data loss, or service interruption. Our maximum liability for any
              claim is limited to what you have paid us in the previous twelve
              months.
            </p>
          </Section>

          <Section title="Changes & Termination">
            <p>
              We may update these Terms from time to time. Continued use after
              changes are posted means you accept them. We may suspend cloud
              access if you violate these Terms. You can delete your account from
              Settings at any time.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For questions about these Terms, contact{" "}
              <a
                href="mailto:support@phacotrack.com"
                className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                support@phacotrack.com
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-surface/80 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/app-icon-small.png"
            alt="PhacoTrack"
            width={32}
            height={32}
            className="rounded-[7px]"
          />
          <span className="text-base font-semibold tracking-tight text-ink">
            PhacoTrack
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          &larr; Home
        </Link>
      </div>
    </nav>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
