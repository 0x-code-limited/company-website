import Image from "next/image";
import Link from "next/link";

export default function BetterBCAssessmentPage() {
  return (
    <main className="font-sans min-h-screen">
      <section className="px-6 sm:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto grid gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/better-bc-assessment.png"
              alt="Better BC Assessment Logo"
              width={64}
              height={64}
            />
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
              Better BC Assessment
            </h1>
          </div>
          <p className="text-foreground/80 text-base sm:text-lg max-w-3xl">
            A mobile app that shows property assessment information based on
            your current location across British Columbia, Canada. Quickly
            discover assessed values and related details nearby with a clean,
            map-centric experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.02]">
              <Image
                src="/images/better-bc-assessment.png"
                alt="Better BC Assessment app screenshot"
                width={1280}
                height={800}
                className="w-full h-auto object-contain bg-white"
              />
            </div>
            <div className="grid gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Highlights</h2>
                <ul className="list-disc list-inside text-foreground/80">
                  <li>Location-aware assessment results around you</li>
                  <li>BC-focused data with practical property details</li>
                  <li>Fast, simple UI with offline-friendly caching</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Get the app</h2>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="https://apps.apple.com/ca/app/better-bc-assessment/id6504163154"
                    target="_blank"
                    aria-label="Download on the App Store"
                  >
                    <Image
                      src="/images/App_Store_Badge.svg"
                      alt="Download on the App Store"
                      width={160}
                      height={48}
                    />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.oxcode.betterbcassessment"
                    target="_blank"
                    aria-label="Get it on Google Play"
                  >
                    <Image
                      src="/images/GooglePlay_Badge.png"
                      alt="Get it on Google Play"
                      width={180}
                      height={54}
                    />
                  </Link>
                </div>
              </div>

              <div className="text-sm text-foreground/70">
                Built for iOS and Android.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
