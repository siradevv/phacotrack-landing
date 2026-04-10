import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — PhacoTrack",
  description: "PhacoTrack terms of service.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[720px] px-6 pt-28 pb-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: 6 April 2026</p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-ink/80">
          <Section title="Acceptance of Terms">
            <p>
              By downloading, installing, or using PhacoTrack, you agree to these
              terms. If you do not agree, please discontinue use.
            </p>
          </Section>

          <Section title="Description of Service">
            <p>
              PhacoTrack is a personal surgical case documentation and analytics
              tool for ophthalmologists, enabling cataract surgery record-keeping
              and outcome tracking.
            </p>
            <p>
              PhacoTrack is not a registered medical device and is not intended
              for clinical decision-making. All information is for personal
              reference only.
            </p>
          </Section>

          <Section title="Account & Cloud Sync">
            <p>
              Cloud sync requires Sign in with Apple and is entirely voluntary.
              The app is fully functional in local-only mode without an account.
            </p>
            <p>
              You are responsible for the security of your Apple ID. We are not
              liable for unauthorised access resulting from compromised
              credentials.
            </p>
          </Section>

          <Section title="Subscription & Billing">
            <p>
              PhacoTrack offers a free tier and a premium Pro tier. Subscriptions
              are managed through Apple&rsquo;s App Store and are subject to
              Apple&rsquo;s pricing and billing policies.
            </p>
            <p>
              Subscriptions auto-renew unless cancelled at least 24 hours before
              the end of the current billing period. You can manage or cancel your
              subscription in your Apple ID settings.
            </p>
            <p>
              Refunds are handled by Apple in accordance with their policies.
            </p>
          </Section>

          <Section title="AI Document Scanning">
            <p>
              The AI scanning feature sends photos of clinical documents to our
              server for data extraction via the Anthropic Claude API. By
              consenting to this feature, you acknowledge that your images will be
              processed by a third-party service.
            </p>
            <p>
              You must only upload clinically necessary documents — do not upload
              patient photographs, staff images, or other non-clinical material.
            </p>
          </Section>

          <Section title="Your Data">
            <p>
              You retain full ownership of the data you enter into PhacoTrack. We
              claim no rights to your content.
            </p>
            <p>
              You are responsible for complying with your institution&rsquo;s data
              governance policies and all applicable regulations.
            </p>
          </Section>

          <Section title="Acceptable Use">
            <p>
              You agree not to attempt unauthorised access to data, reverse
              engineer the application, or use PhacoTrack for purposes other than
              personal surgical case logging.
            </p>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p>
              PhacoTrack is provided &ldquo;as is&rdquo; without warranties of
              any kind, express or implied. The accuracy of AI-extracted data is
              not guaranteed. You must independently verify all extracted
              measurements and information.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              We are not liable for any indirect, incidental, or consequential
              damages, including those arising from decisions made based on data
              in the app.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              We may update these terms from time to time. Continued use of
              PhacoTrack after changes are posted constitutes acceptance of the
              updated terms.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              We may suspend or terminate cloud access for violations of these
              terms. You can delete your account and all associated data at any
              time from Settings.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about these terms, contact us at{" "}
              <a
                href="mailto:sira.dev@hotmail.com"
                className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                sira.dev@hotmail.com
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
