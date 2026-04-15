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
        <p className="mt-2 text-sm text-ink-muted">Last updated: 14 April 2026</p>

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
              Photos captured for AI scanning are handled separately — see AI
              Document Scanning below.
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
              When you use the AI scanning feature, your photo is uploaded to our
              secure server for automatic data extraction. The server uses AI to
              read printed clinical documents (biometry printouts, autokeratometry
              sheets, etc.) and return structured measurements. Scanning is not
              performed on your device — it requires an internet connection.
            </p>
            <p>
              Our server processes images using AI services provided by Google
              (Gemini) and Anthropic (Claude). Google Gemini is the primary
              extraction engine; Anthropic Claude serves as a fallback. Per each
              provider&rsquo;s API terms, inputs are not retained by the AI
              provider beyond the duration of the extraction request and are not
              used to train their models.
            </p>
            <p>
              Only the image is transmitted to the AI providers — no patient
              names, hospital numbers, or other identifying information is
              included in the request.
            </p>
            <p>
              After extraction, a copy of the image is retained on our server,
              linked to your account, so we can monitor extraction accuracy and
              debug problems. We delete older samples periodically and you may
              request removal of your samples at any time — see &ldquo;Deleting
              Your Data&rdquo; below.
            </p>
            <p>
              By signing in and using the scanning feature, you consent to
              AI-powered document processing and to the server-side retention
              described above. You can stop using scanning at any time.
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
              removes all server-side case data associated with your account.
            </p>
            <p>
              To request removal of retained AI scan images from our server,
              email us at{" "}
              <a
                href="mailto:sira.dev@hotmail.com"
                className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                sira.dev@hotmail.com
              </a>{" "}
              with your account email. We will delete your samples on request.
            </p>
            <p>
              Uninstalling the app removes all local data from your device.
            </p>
          </Section>

          <Section title="Cross-Border Data Transfer">
            <p>
              If you enable cloud sync, your case data (with patient-identifiable
              fields encrypted) is transmitted to and stored on cloud servers
              located outside of Thailand, in the United States.
            </p>
            <p>
              When you use AI document scanning, your image is processed via
              Google&rsquo;s Gemini API or Anthropic&rsquo;s Claude API, which
              may involve servers located in the United States.
            </p>
            <p>
              By using these features, you consent to the transfer of data outside
              your country of residence in accordance with Thailand&rsquo;s
              Personal Data Protection Act (PDPA) and other applicable data
              protection laws.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us or using the in-app
              account deletion feature.
            </p>
            <p>
              If you are in the European Economic Area, you have additional rights
              under GDPR including data portability and the right to object to
              processing. Contact us to exercise these rights.
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
