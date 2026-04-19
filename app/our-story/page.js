import Image from "next/image";
import Link from "next/link";

export default async function OurStoryPage() {
  return (
    <main className="bg-surface font-body text-on-surface-variant selection:bg-primary-container selection:text-on-primary-container pt-24 overflow-x-hidden">
      <section className="reveal px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label text-xs font-bold tracking-widest uppercase">
              ESTABLISHED 2023
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-tertiary leading-[1.1] tracking-tight">
              Our Story
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
              <p className="font-medium">
                Bright Hope Support Services was founded in 2023, building on
                frontline residential care experience established in 2020.
              </p>
              <p>
                Guided by a strong commitment to serve, we respond to the
                evolving needs of children, youth, and families during times of
                transition, crisis, and change. We offer supportive services
                that walk alongside individuals and families—from early
                childhood emergency and interim care, to family preservation and
                reunification, and supported transitions into adulthood.
              </p>
              <p className="italic text-primary font-semibold">
                “At Bright Hope Support Services, we believe growth happens
                through connection.”
              </p>
              <p>
                By working together with children, youth, families, and
                community partners, we help create pathways toward stability,
                resilience, and shared success.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl" />
            <div className="rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 relative h-[600px]">
              <Image
                alt="Community Connection"
                src="/photos/brighthope5.jpg"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-lg shadow-xl max-w-xs reveal"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  favorite
                </span>
                <span className="font-headline font-bold text-tertiary">
                  Our Core Value
                </span>
              </div>
              <p className="text-sm">
                Building resilience through compassionate, consistent trust-based
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 reveal" style={{ animationDelay: "0.1s" }}>
              <div className="relative w-full aspect-[4/5] rounded-lg shadow-lg -ml-12 md:-ml-24 overflow-hidden">
                <Image
                  alt="Philosophy in Action"
                  src="/photos/brighthope6.jpg"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 reveal" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="font-label text-secondary font-bold tracking-widest uppercase text-sm">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-tertiary leading-tight">
                Care rooted in dignity, compassion, and respect.
              </h2>
              <p className="text-xl leading-relaxed">
                We believe that children, youth, and families thrive when care
                is rooted in dignity, compassion, and respect. A safe,
                trauma-informed, and culturally responsive environment creates
                the conditions where trust can grow and healing can begin.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-surface-container-lowest rounded-lg border-l-4 border-primary">
                  <h4 className="font-headline font-bold text-on-surface mb-2">
                    Empathy First
                  </h4>
                  <p className="text-sm">
                    Our team is grounded in empathy and committed to building
                    consistent, trust-based relationships.
                  </p>
                </div>
                <div className="p-6 bg-surface-container-lowest rounded-lg border-l-4 border-secondary">
                  <h4 className="font-headline font-bold text-on-surface mb-2">
                    Recognizing Strengths
                  </h4>
                  <p className="text-sm">
                    By recognizing strengths and honoring lived experiences, we
                    support growth and positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="md:col-span-2 bg-primary-container/10 p-10 md:p-14 rounded-lg reveal flex flex-col justify-between"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">
                  lightbulb
                </span>
              </div>
              <h3 className="text-3xl font-headline font-extrabold text-tertiary">
                Our Purpose
              </h3>
              <p className="text-xl leading-relaxed text-on-surface-variant">
                At Bright Hope Support Services, our purpose is to support
                children, youth, and families through critical moments by
                creating environments where growth is encouraged, strengths are
                nurtured, and challenges are faced together.
              </p>
            </div>
            <p className="mt-8 font-medium text-primary">
              Through compassionate, consistent support, we help families
              stabilize and children feel secure.
            </p>
          </div>

          <div
            className="bg-tertiary p-10 rounded-lg text-white reveal flex flex-col items-start"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">
                visibility
              </span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-6">Our Vision</h3>
            <p className="text-lg leading-relaxed text-white/90 italic">
              “A future where all individuals - regardless of age, background,
              or ability - are supported, connected, and thriving in strong,
              inclusive communities that value diversity, resilience, and
              possibility.”
            </p>
            <div className="mt-auto pt-8">
              <div className="h-1 w-20 bg-primary-container" />
            </div>
          </div>

          <div
            className="md:col-span-3 bg-surface-container-high p-10 md:p-14 rounded-lg reveal overflow-hidden relative"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="font-label text-secondary font-bold tracking-widest uppercase text-xs">
                  A Shared Commitment
                </span>
                <h3 className="text-3xl font-headline font-bold text-on-surface">
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed">
                  Our mission is to support children, youth, and families as
                  they grow and navigate change, providing compassionate,
                  nurturing care rooted in respect, learning, and shared
                  responsibility. We cultivate inclusive and welcoming spaces
                  where people feel valued, empowered, and supported.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Inclusivity", "Resilience", "Empowerment"].map((label) => (
                    <span
                      key={label}
                      className="bg-surface-container-lowest px-4 py-2 rounded-full text-sm font-semibold border border-outline-variant/20 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative w-full aspect-[4/3] rounded-lg shadow-inner overflow-hidden opacity-90 mix-blend-multiply">
                  <Image
                    alt="Group of diverse people standing in a circle with hands joined in the middle, representing teamwork and community support"
                    src="/photos/brighthope4.jpg"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-4xl mx-auto text-center reveal" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-4xl font-headline font-extrabold text-tertiary mb-4">
          Get in Touch
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          We are here to walk alongside you. Reach out today to learn more about
          our programs and how we can support your journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            className="group p-8 bg-surface-container-low rounded-xl hover:bg-primary-container transition-all duration-300 transform hover:-translate-y-2"
            href="tel:4038076088"
          >
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-4xl mb-4">
              call
            </span>
            <h4 className="font-headline font-bold text-on-surface mb-1">Phone</h4>
            <p className="text-sm font-medium">403-807-6088</p>
          </a>
          <a
            className="group p-8 bg-surface-container-low rounded-xl hover:bg-primary-container transition-all duration-300 transform hover:-translate-y-2"
            href="mailto:info@brighthopess.com"
          >
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-4xl mb-4">
              mail
            </span>
            <h4 className="font-headline font-bold text-on-surface mb-1">Email</h4>
            <p className="text-sm font-medium">info@brighthopess.com</p>
          </a>
          <Link
            className="group p-8 bg-surface-container-low rounded-xl hover:bg-primary-container transition-all duration-300 transform hover:-translate-y-2"
            href="/contact"
          >
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-4xl mb-4">
              contact_mail
            </span>
            <h4 className="font-headline font-bold text-on-surface mb-1">
              Contact form
            </h4>
            <p className="text-sm font-medium">Send us a message</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

