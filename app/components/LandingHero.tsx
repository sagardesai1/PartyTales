import Image from "next/image";

export default function LandingHero() {
  return (
    <div className="grid grid-cols-12 gap-16 items-center">
      {/* Left Column - Text Content (7 columns instead of 8) */}
      <div className="col-span-12 lg:col-span-7">
        <h1 className="font-display text-6xl sm:text-7xl font-bold text-gray-800 mb-6">
          Turn Your Child into the Star of Their Tale
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          With PartyTales, you can instantly create storybook-style{" "}
          <span className="font-bold">e-invites</span> that feature your child
          as a magical character — all customizable, RSVP-ready, and shareable
          in seconds.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
          
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="text-sm text-gray-600">Google Play</div>
              <div className="text-xs text-gray-500">Best App of 2024</div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="text-sm text-gray-600">App Store</div>
              <div className="text-xs text-gray-500">2024 Finalist</div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://getwaitlist.com/waitlist/27919"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium transition-all hover:bg-gray-200 text-center"
          >
            Get the app
          </a>
          <a
            href="https://getwaitlist.com/waitlist/27919"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-lg text-lg font-medium transition-all hover:bg-gray-800 text-center"
          >
            Create invite
          </a>
        </div>
      </div>

      {/* Right Column - Invitation Preview (5 columns instead of 4) */}
      <div className="col-span-12 lg:col-span-5 relative max-w-sm mx-auto lg:mx-0">
        {/* Card Preview Container with gradient background */}
        <div className="aspect-[2/3] bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blue p-4 rounded-[2rem] shadow-2xl">
          {/* Inner container for image with its own rounded borders */}
          <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
            <Image
              src="/KofiVertical.jpg"
              alt="AI-generated birthday invitation showing a child with party decorations"
              fill
              className="object-cover rounded-[1.5rem]"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 w-24 h-24 bg-pastel-yellow/30 rounded-full blur-xl -top-8 -right-8 animate-float"></div>
        <div className="absolute -z-10 w-32 h-32 bg-pastel-pink/30 rounded-full blur-xl -bottom-8 -left-8 animate-float delay-1000"></div>
      </div>
    </div>
  );
}
