import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — PhacoTrack",
  description: "PhacoTrack privacy policy — how we handle your data.",
  alternates: { canonical: "https://phacotrack.com/privacy" },
  openGraph: {
    title: "Privacy Policy — PhacoTrack",
    description: "How PhacoTrack handles patient data, encryption, and cloud sync.",
    url: "https://phacotrack.com/privacy",
    type: "article",
    siteName: "PhacoTrack",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — PhacoTrack",
    description: "How PhacoTrack handles patient data, encryption, and cloud sync.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[720px] px-6 pt-28 pb-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: 5 May 2026</p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-ink/80">
          <Section title="What We Collect">
            <p>
              PhacoTrack stores the cataract surgery case data you enter: pre-op
              measurements, intra-op details, IOL data, and post-op follow-up.
            </p>
            <p>
              Patient identity fields &mdash; name, hospital number, date of
              birth, gender, and notes &mdash; remain on your device. When synced
              to our server, these fields are encrypted on-device with
              AES-256-GCM using a key derived from your Apple account.
            </p>
          </Section>

          <Section title="Account & Cloud Sync">
            <p>
              Sign in with Apple is required. Your surgeon setup and case data
              sync across your signed-in devices through our server. Cloud sync
              beyond the free tier requires a Pro subscription.
            </p>
            <p>
              Patient identity fields are stored on our server only in encrypted
              form, and all data transfers use HTTPS. Because the encryption key
              is tied to your Apple account, we technically have the ability to
              decrypt these fields. As a matter of policy, we do not.
            </p>
            <p>
              You can delete your account from Settings at any time. Doing so
              permanently removes your data from our server.
            </p>
          </Section>

          <Section title="AI Document Scanning">
            <p>
              When you scan a clinical document, the image is uploaded to our
              server and processed by a third-party AI provider to extract
              structured measurements. An internet connection is required.
            </p>
            <p>
              The app does not attach patient details to the request. Clinical
              printouts may, however, contain identifiers that are visible in the
              image itself. AI providers do not retain inputs beyond the request
              and do not use them for training.
            </p>
            <p>
              A copy of each scan is retained on our server for quality
              monitoring. Samples are deleted automatically 90 days after
              capture, and immediately when you delete your account. To request
              earlier removal of specific samples, contact{" "}
              <a
                href="mailto:support@phacotrack.com"
                className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                support@phacotrack.com
              </a>
              .
            </p>
          </Section>

          <Section title="Analytics">
            <p>
              PhacoTrack collects anonymous usage analytics, such as which
              screens are opened or whether a feature was used, to help us
              improve the app. Analytics are processed by a third-party service
              that never receives patient data, case content, free text, or
              personally identifying information. No advertising identifiers or
              persistent user IDs are used. You can opt out in Settings.
            </p>
          </Section>

          <Section title="Security">
            <p>
              Authentication tokens are stored in the iOS Keychain with
              &ldquo;when unlocked, this device only&rdquo; protection. Local
              data files use iOS file protection. Encrypted backup files use
              AES-256 with a password you choose.
            </p>
          </Section>

          <Section title="Surgery Timer on the Lock Screen">
            <p>
              If you start a surgery timer, the active patient&rsquo;s name,
              hospital number, eye, and planned IOL appear on your device&rsquo;s
              lock screen and Dynamic Island as part of the Live Activity, so you
              can glance at the timer mid-procedure without unlocking the device.
            </p>
            <p>
              This information is rendered on your device only and is never
              transmitted. It remains visible until the timer is stopped or you
              dismiss the Live Activity. You are responsible for the physical
              security of your device while a timer is active.
            </p>
          </Section>

          <Section title="Calendar Integration">
            <p>
              If you enable calendar integration in Settings, PhacoTrack creates
              surgery and follow-up events in your iOS Calendar. These events
              include the patient&rsquo;s name and hospital number so each entry
              is recognisable at a glance.
            </p>
            <p>
              Calendar data is managed by iOS. If you have iCloud Calendar
              enabled, Apple syncs your calendars across your Apple devices on
              your behalf &mdash; PhacoTrack does not transmit calendar events
              to our server. You can disable calendar integration at any time
              in Settings, which stops new events from being created.
            </p>
          </Section>

          <Section title="Cross-Border Transfer">
            <p>
              When you use cloud sync or AI scanning, your data is transmitted to
              and processed on servers in the United States. By using these
              features, you consent to this transfer.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time. Account deletion is available in-app.
              If you live in the European Union, you have additional rights under
              GDPR, including the right to receive your data in a portable format
              and to object to certain uses of it.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For questions about this policy or your data, contact{" "}
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
