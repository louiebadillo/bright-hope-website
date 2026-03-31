import Image from "next/image";

export default async function ContactPage() {
  const address = "4715 88 Ave NE #2205, Calgary, AB T3J 2J2";
  const mapsQuery = encodeURIComponent(address);
  const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const googleMapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <main className="bg-surface text-on-surface pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>

          <h1 className="text-5xl md:text-7xl font-black text-tertiary tracking-tight leading-[1.1] mb-8">
            We’re here to <br /> <span className="text-primary italic">listen &amp; support.</span>
          </h1>
          <p className="text-on-surface-variant max-w-lg leading-relaxed text-lg">
            Whether you have a question about our programs or need immediate
            assistance, the Bright Hope community is ready to help you navigate
            your journey.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl -z-10" />
          <div className="rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 relative h-[400px]">
            <Image
              alt="A friendly, smiling support worker in a brightly lit modern office setting, holding a warm cup of coffee and looking approachable"
              src="/photos/brighthope11.jpg"
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="md:col-span-1 bg-surface-container-lowest p-10 rounded-lg flex flex-col justify-between hover:shadow-xl transition-shadow border border-outline-variant/10">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                  Call Us
                </p>
                <p className="text-xl font-bold text-tertiary">403-807-6088</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                  Email Us
                </p>
                <p className="text-xl font-bold text-tertiary">info@brighthopess.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">language</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                  Web
                </p>
                <p className="text-xl font-bold text-tertiary">www.brighthopess.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-outline-variant/10">
            <p className="text-on-surface-variant italic">
              “Strength starts with a single conversation.”
            </p>
          </div>
        </div>

        <div className="md:col-span-2 bg-surface-container-lowest rounded-lg p-10 shadow-sm border border-outline-variant/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 radiance-gradient opacity-10 blur-3xl -mr-16 -mt-16" />
          <h3 className="font-headline text-3xl font-extrabold text-tertiary mb-2">
            Send a Message
          </h3>
          <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
            Fill out the form below and our team will be in touch with more
            information.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
                  Email
                </label>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                  placeholder="hello@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
                  Phone
                </label>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                  placeholder="403-000-0000"
                  type="tel"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
                  Program of Interest
                </label>
                <select className="w-full bg-surface-container-low border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-sm text-on-surface appearance-none">
                  <option disabled value="">
                    Select a program
                  </option>
                  <option value="bright-start">Bright Start Early Childhood</option>
                  <option value="semi-independent">Semi-Independent Living</option>
                  <option value="strong-roots">Strong Roots Program</option>
                  <option value="workshops">Training &amp; Workshops</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
                Message
              </label>
              <textarea
                className="w-full bg-surface-container-low border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                placeholder="How can we support you today?"
                rows={4}
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                className="bg-radiance text-on-primary font-headline font-extrabold px-10 py-4 rounded-full flex items-center gap-3 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                type="submit"
              >
                Send Inquiry
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-surface-container-high rounded-lg overflow-hidden flex flex-col mb-24">
        <div className="p-8 md:p-12">
          <h3 className="text-3xl font-bold text-tertiary mb-2">Our Community Hub</h3>
          <p className="text-on-surface-variant mb-8 text-lg">
            Come visit us for a coffee and a chat at our main office.
          </p>
          <div className="flex items-center gap-3 text-primary mb-10">
            <span className="material-symbols-outlined text-2xl">location_on</span>
            <a
              className="text-xl font-bold hover:underline underline-offset-4"
              href={googleMapsHref}
              target="_blank"
              rel="noreferrer"
            >
              {address}
            </a>
          </div>

          <div className="w-full h-80 rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-low">
            <iframe
              title={`Map: ${address}`}
              src={googleMapsEmbedSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mt-24 text-center max-w-3xl mx-auto">
        <div className="w-16 h-1 bg-primary-container mx-auto mb-10 rounded-full" />
        <h2 className="text-4xl font-black text-tertiary mb-6">
          A Brighter Hope for Everyone.
        </h2>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          At Bright Hope Support Services, we believe that community is the bedrock
          of healing. No matter where you are in your journey, we are here to walk
          beside you with warmth, respect, and unwavering support.
        </p>
      </div>
    </main>
  );
}

