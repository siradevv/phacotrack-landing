import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — PhacoTrack",
  description: "PhacoTrack privacy policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[720px] px-6 pt-28 pb-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: 6 April 2026</p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-ink/80">
          <Section title="What Data We Collect">
            <p>
              PhacoTrack records cataract surgery case data that you enter,
              including pre-operative measurements, intra-operative details, IOL
              data, and post-operative follow-up observations.
            </p>
            <p>
              Patient-identifiable information (name, hospital number, date of
              birth, gender, and notes) is stored locally on your device by
              default.
            </p>
          </Section>

          <Section title="Local-First Storage">
            <p>
              All case data is stored on your device in the iOS app sandbox with
              file-level protection. Your data exists on your phone first — cloud
              sync is entirely optional.
            </p>
            <p>
              Images captured for AI scanning are stored locally and are never
              uploaded to the cloud.
            </p>
          </Section>

          <Section title="Cloud Sync">
            <p>
              Cloud sync is opt-in and requires Sign in with Apple. When enabled,
              clinical case data is synced to our secure server so you can recover
              it on a new device.
            </p>
            <p>
              Patient-identifiable fields (name, hospital number, date of birth,
              gender, notes) are encrypted on your device before upload using a
              key derived from your Apple ID. Our server only sees an opaque
              encrypted blob — never plaintext names or identifiers.
            </p>
            <p>
              You can sign out or delete your cloud account at any time from
              Settings.
            </p>
          </Section>

          <Section title="AI Document Scanning">
            <p>
              When you use the AI scanning feature, your photo is sent to our
              secure server for automatic data extraction. The server uses AI to
              read printed clinical documents (biometry printouts, autokeratometry
              sheets, etc.) and return structured measurements.
            </p>
            <p>
              Our server processes images using the Anthropic Claude API, a
              third-party AI service provided by Anthropic, PBC. The image is sent
              to Anthropic&rsquo;s API for text recognition and data extraction.
              Per Anthropic&rsquo;s privacy policy, API inputs are not used to
              train their models.
            </p>
            <p>
              Only the image is transmitted — no patient names, hospital numbers,
              or other identifying information is included in the request to
              Anthropic.
            </p>
            <p>
              Photos are processed in real time and are not stored on our servers
              or by Anthropic beyond the duration of the API request.
            </p>
            <p>
              You must explicitly consent to AI scanning before first use. You can
              revoke consent at any time in Settings.
            </p>
          </Section>

          <Section title="Data Sharing">
            <p>
              We do not sell, rent, or share your data with third parties.
            </p>
            <p>
              No analytics or tracking SDKs are included in the app. We do not
              collect usage telemetry.
            </p>
          </Section>

          <Section title="Data Security">
            <p>All network communication uses HTTPS/TLS encryption.</p>
            <p>
              Authentication tokens are stored in the iOS Keychain with
              &ldquo;when unlocked, this device only&rdquo; protection.
            </p>
            <p>Local data files are written with iOS file protection.</p>
            <p>
              Encrypted backups use AES-256 encryption with a password you set at
              export time.
            </p>
          </Section>

          <Section title="Deleting Your Data">
            <p>
              You can delete all local patient data from Settings &rarr; Delete
              All Patient Data.
            </p>
            <p>
              If you have cloud sync enabled, you can delete your cloud account
              from Settings &rarr; Account &rarr; Delete Account. This permanently
              removes all server-side data associated with your account.
            </p>
            <p>
              Uninstalling the app removes all local data from your device.
            </p>
          </Section>

          <Section title="Cross-Border Data Transfer">
            <p>
              If you enable cloud sync, your case data (with patient-identifiable
              fields encrypted) is transmitted to and stored on servers located
              outside of Thailand, operated by Railway Corp. in the United States.
            </p>
            <p>
              When you use AI document scanning, your image is processed via
              Anthropic&rsquo;s API, which may involve servers located in the
              United States.
            </p>
            <p>
              By using these features, you consent to the transfer of data outside
              your country of residence in accordance with Thailand&rsquo;s
              Personal Data Protection Act (PDPA) and other applicable data
              protection laws.
            </p>
          </Section>

          <Section title="Your Responsibilities">
            <p>
              PhacoTrack is a personal surgical logbook tool. It is not a
              certified medical device or electronic health record system.
            </p>
            <p>
              You are responsible for complying with your institution&rsquo;s data
              governance policies and applicable regulations (e.g. HIPAA, GDPR,
              PDPA) when recording patient information.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about this privacy policy or your data,
              contact us at{" "}
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
