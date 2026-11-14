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
        <p className="mt-2 text-sm text-ink-muted">Last updated: 14 November 2026</p>

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
              Sign in with Apple is optional. You can use the app and run a
              limited number of AI scans without signing in. When you do sign
              in, we receive your Apple-issued user identifier and (if you
              choose to share it) your name and email. We store an authentication token on the
              server so you can stay signed in without re-entering credentials.
            </p>
            <p>
              Cloud sync requires a Pro subscription. Free-tier data stays on
              your device only and is never uploaded to our server. With Pro,
              your case data syncs across your signed-in devices through our
              server. Your app preferences and surgeon setup (equipment and
              defaults) sync between your devices through your own iCloud
              account, run by Apple &mdash; not through our server.
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

          <Section title="Subscriptions & Billing">
            <p>
              Subscriptions are processed by Apple through the App Store. Apple
              shares a transaction record with us so we can confirm your Pro
              status across your devices &mdash; this includes a unique
              transaction identifier and an opaque account token tied to your
              Apple ID. We do not receive your payment card details.
            </p>
            <p>
              Subscription management (upgrade, downgrade, cancellation,
              refund) is handled by Apple in your Apple ID settings.
            </p>
          </Section>

          <Section title="AI Document Scanning">
            <p>
              When you scan a clinical document, the image is uploaded to our
              server and processed by Google (Gemini) for measurement
              extraction, with Anthropic (Claude) as a backup if the primary
              service is unavailable. An internet connection is required.
            </p>
            <p>
              The app does not attach patient details to the request. Clinical
              printouts may, however, contain identifiers that are visible in
              the image itself. Neither AI provider uses scan images to train
              its models. Each may keep requests for a limited time for abuse
              and safety monitoring, as its API terms allow.
            </p>
            <p>
              We do not keep your scan images. When you are signed in, each scan
              leaves a short diagnostic record on our server &mdash; the document
              type, which AI service read it, how long it took, and which fields
              it was unsure about &mdash; with no image, no measurements and no
              patient details. These records are deleted automatically after 90
              days, and immediately when you delete your account.
            </p>
            <p>
              So that a scan is not processed twice if your connection drops,
              the extracted result (which can include details printed on the
              sheet, such as a patient name) is held on our server for about an
              hour and deleted within a day. For questions about scan data,
              contact{" "}
              <a
                href="mailto:support@phacotrack.com"
                className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                support@phacotrack.com
              </a>
              .
            </p>
            <p>
              When you are not signed in, no diagnostic record is kept: the
              image is used only to extract your measurements and is never
              stored on our server. To count your free guest scans, the app
              sends a random identifier created on your device &mdash; it is not
              your name, email, or Apple ID, and we do not use it to track you.
            </p>
          </Section>

          <Section title="Analytics">
            <p>
              PhacoTrack collects anonymous usage analytics, such as which
              screens are opened or whether a feature was used, to help us
              improve the app. Analytics are processed by TelemetryDeck, which
              never receives patient data, case content, free text, or
              personally identifying information. No advertising identifiers or
              persistent user IDs are used. You can opt out in Settings.
            </p>
          </Section>

          <Section title="Third-Party Processors">
            <p>
              We rely on a small number of services to operate PhacoTrack.
              Each only receives the data it needs for its specific purpose:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Apple</strong> &mdash; Sign in with Apple
                (authentication), the App Store (subscriptions), and iCloud
                Calendar (if you enable calendar integration).
              </li>
              <li>
                <strong>Railway (United States)</strong> &mdash; hosts our
                server and database.
              </li>
              <li>
                <strong>Google</strong> &mdash; processes scan images for
                measurement extraction (Gemini).
              </li>
              <li>
                <strong>Anthropic</strong> &mdash; processes scan images as a
                backup when Google is unavailable (Claude).
              </li>
              <li>
                <strong>TelemetryDeck</strong> &mdash; receives anonymous
                in-app usage analytics from the iOS app.
              </li>
              <li>
                <strong>Vercel Web Analytics</strong> &mdash; receives
                anonymous page-view metrics from this website
                (phacotrack.com). No cookies, no identifiers, no
                cross-site tracking.
              </li>
            </ul>
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
              surgery and follow-up events in your iOS Calendar. Each event
              title contains the patient&rsquo;s name so the entry is
              recognisable at a glance. Hospital numbers, dates of birth and
              clinical content are not written into calendar entries.
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
