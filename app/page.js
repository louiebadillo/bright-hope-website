import Image from "next/image";
import { HomeWorkshops } from "./components/home-workshops";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
        <header className="relative pt-24 md:pt-28 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/brighthopevid1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="max-w-3xl space-y-8" data-aos="fade-up" data-aos-duration="1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm font-label font-bold tracking-widest uppercase text-secondary">
                  Community First
                </span>
              </div>

              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Together, We Grow.
                <br />
                Together, We Thrive.
              </h1>

              <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
                At Bright Hope Support Services, we offer comprehensive programs
                designed to address the diverse and unique needs of children,
                youth, and families. We believe in healing, empowerment, and
                fostering strong communities.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-tertiary to-tertiary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:from-on-tertiary-container hover:to-tertiary-fixed hover:scale-105 transition-all inline-flex items-center"
                >
                  Join Our Community
                </Link>
                <Link
                  href="/our-programs"
                  className="bg-white/90 text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors inline-flex items-center"
                >
                  Explore Workshops
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Core Components Section */}
        <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
              <span className="text-sm font-label font-bold tracking-widest uppercase text-secondary">
                Foundational Care
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mt-2">
                Our Core Components
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">
                Every program we offer is built upon these essential pillars of
                support, ensuring a holistic and trauma-informed approach to
                growth.
              </p>
            </div>

            {/* Mobile: no background image, just cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              <CoreComponentCard
                icon="temple_buddhist"
                iconClassName="text-on-tertiary-fixed-variant"
                iconBgClassName="bg-tertiary-fixed"
                title="Culturally Safe Environment"
                description="Incorporates cultural activities, language programs, and Elder visits to foster identity and belonging."
              />
              <CoreComponentCard
                icon="psychology"
                iconClassName="text-on-primary-fixed-variant"
                iconBgClassName="bg-primary-fixed"
                title="Trauma-Informed Care"
                description="Provides therapy and crisis intervention to support emotional healing and psychological well-being."
              />
              <CoreComponentCard
                icon="medical_services"
                iconClassName="text-on-secondary-fixed-variant"
                iconBgClassName="bg-secondary-fixed"
                title="Health & Wellness Services"
                description="Holistic access to medical, dental, optical, and traditional healing services through trusted providers."
              />
              <CoreComponentCard
                icon="school"
                iconClassName="text-on-tertiary-fixed-variant"
                iconBgClassName="bg-tertiary-fixed"
                title="Educational Support"
                description="Academic support, life skills training, and career guidance for continuous personal growth."
              />
              <CoreComponentCard
                icon="groups"
                iconClassName="text-on-primary-fixed-variant"
                iconBgClassName="bg-primary-fixed"
                title="Family & Community Engagement"
                description="Strengthening bonds through reunification, cultural engagement, and community connections."
              />
              <CoreComponentCard
                icon="emergency"
                iconClassName="text-on-secondary-fixed-variant"
                iconBgClassName="bg-secondary-fixed"
                title="Crisis & Emergency Response"
                description="Immediate 24/7 intervention and dedicated staff trained in trauma-informed care."
              />
            </div>

            {/* Desktop/tablet: background image with overlay cards */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl hidden md:block"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <div className="relative w-full h-[550px]">
                <Image
                  alt="A high-quality image of a community circle gathering, symbolizing holistic and integrated care and support services"
                  src="/photos/brighthope11.jpg"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                  <CoreComponentCard
                    icon="temple_buddhist"
                    iconClassName="text-on-tertiary-fixed-variant"
                    iconBgClassName="bg-tertiary-fixed"
                    title="Culturally Safe Environment"
                    description="Incorporates cultural activities, language programs, and Elder visits to foster identity and belonging."
                  />
                  <CoreComponentCard
                    icon="psychology"
                    iconClassName="text-on-primary-fixed-variant"
                    iconBgClassName="bg-primary-fixed"
                    title="Trauma-Informed Care"
                    description="Provides therapy and crisis intervention to support emotional healing and psychological well-being."
                  />
                  <CoreComponentCard
                    icon="medical_services"
                    iconClassName="text-on-secondary-fixed-variant"
                    iconBgClassName="bg-secondary-fixed"
                    title="Health & Wellness Services"
                    description="Holistic access to medical, dental, optical, and traditional healing services through trusted providers."
                  />
                  <CoreComponentCard
                    icon="school"
                    iconClassName="text-on-tertiary-fixed-variant"
                    iconBgClassName="bg-tertiary-fixed"
                    title="Educational Support"
                    description="Academic support, life skills training, and career guidance for continuous personal growth."
                  />
                  <CoreComponentCard
                    icon="groups"
                    iconClassName="text-on-primary-fixed-variant"
                    iconBgClassName="bg-primary-fixed"
                    title="Family & Community Engagement"
                    description="Strengthening bonds through reunification, cultural engagement, and community connections."
                  />
                  <CoreComponentCard
                    icon="emergency"
                    iconClassName="text-on-secondary-fixed-variant"
                    iconBgClassName="bg-secondary-fixed"
                    title="Crisis & Emergency Response"
                    description="Immediate 24/7 intervention and dedicated staff trained in trauma-informed care."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-down">
              <span className="text-sm font-label font-bold tracking-widest uppercase text-secondary">
                Our Programs
              </span>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mt-2">
                Nurturing Growth at Every Stage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProgramCard
                aosDelay="0"
                imageAlt="Caregiver interacting with a young child in a playful, supportive environment"
                imageSrc="/photos/brighthope9.jpg"
                badgeIcon="child_care"
                badgeBgClassName="bg-primary-container/30"
                badgeIconClassName="text-primary"
                title="Bright Start Early Childhood"
                description="Ages 0-6: Safe emergency home environment emphasizing early development and attachment."
                bullets={[
                  "24/7 supervision & security",
                  "Early developmental assessments",
                  "Supervised family visits",
                ]}
                linkText="Learn More"
                linkHref="/our-programs"
                linkIcon="arrow_forward"
              />

              <ProgramCard
                aosDelay="150"
                containerClassName="bg-tertiary-container/5 border-tertiary-container/20"
                imageAlt="A modern apartment interior representing a fresh start and independent living for youth"
                imageSrc="/photos/brighthope1.jpg"
                badgeIcon="apartment"
                badgeBgClassName="bg-tertiary-container"
                badgeIconClassName="text-on-tertiary-container"
                title="Semi-Independent Living"
                description="Ages 18-24: Structured guidance for stepping into adulthood with confidence."
                bullets={[
                  "Housing & budgeting support",
                  "Job readiness & life skills",
                  "Financial assistance navigation",
                ]}
                linkText="Explore more"
                linkHref="/our-programs"
              />

              <ProgramCard
                aosDelay="300"
                imageAlt="A family sitting together in a garden, sharing wisdom and connecting with nature"
                imageSrc="/photos/brighthope12.jpg"
                badgeIcon="forest"
                badgeBgClassName="bg-secondary-container/20"
                badgeIconClassName="text-secondary"
                title="Strong Roots Program"
                description="Strengthening family bonds through parenting support and traditional practices."
                bullets={[
                  "Family-centered reunification",
                  "Young Mothers Wellness (18+)",
                  "Crisis safety planning",
                ]}
                linkText="Connect with Roots"
                linkHref="/our-programs"
                linkIcon="arrow_forward"
              />

              <ProgramCard
                aosDelay="450"
                imageAlt="Supportive care setting representing services for individuals with developmental disabilities"
                imageSrc="/photos/brighthope10.jpg"
                badgeIcon="accessible"
                badgeBgClassName="bg-tertiary-container"
                badgeIconClassName="text-on-tertiary-container"
                title="Persons with Developmental Disabilities (DDS)"
                description="Tailored support focused on independence and daily life skills."
                bullets={[
                  "24/7 support & crisis intervention",
                  "Life skills coaching",
                  "Community inclusion activities",
                ]}
                linkText="Learn More"
                linkHref="/our-programs"
                linkIcon="arrow_forward"
              />
            </div>
          </div>
        </section>

        {/* Training and Workshops */}
        <section className="py-16 md:py-24 bg-surface-container-high relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
              data-aos="fade-up"
            >
              <div className="max-w-2xl">
                <span className="text-sm font-label font-bold tracking-widest uppercase text-primary">
                  Skill Building
                </span>
                <h2 className="font-headline text-4xl font-extrabold text-on-surface mt-2">
                  Training & Interactive Workshops
                </h2>
                <p className="text-on-surface-variant mt-4 text-lg">
                  From Traditional Parenting Guidance to Blanket Ceremonies, we
                  provide practical workshops for healing and empowerment.
                </p>
              </div>
              <a
                className="bg-tertiary text-white px-8 py-3 rounded-full font-bold hover:bg-on-tertiary-container transition-colors shadow-lg"
                href="/contact"
              >
                Contact Us for Workshop Inquiries
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <HomeWorkshops />
              <div
                className="h-full hidden lg:block"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] hover-lift relative">
                  <Image
                    alt="A warm, inviting image of a diverse group of people sitting in a circle for a community workshop in a bright, modern room"
                    src="/photos/brighthope13.jpg"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 rounded-tr-full blur-3xl -z-0" />
        </section>

        {/* Support Invitation */}
        <section className="py-20 px-6">
          <div
            className="max-w-5xl mx-auto radiant-gradient rounded-xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
            data-aos="zoom-in-up"
          >
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6">
                Need a helping hand?
              </h2>
              <p className="text-on-primary-fixed-variant text-xl mb-10 max-w-2xl mx-auto font-medium">
                We’re here to listen and provide the support you need to thrive.
                Let’s start the journey together toward stability and resilience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  className="bg-white text-primary px-10 py-4 rounded-xl font-black text-lg hover:bg-stone-100 transition-colors shadow-lg"
                  href="/contact"
                >
                  Get Support
                </a>
                <a
                  className="bg-tertiary text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-green-800 transition-colors"
                  href="tel:4038076088"
                >
                  Call 403-807-6088
                </a>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-y-12 translate-y-1/2" />
          </div>
        </section>
      </main>
    </>
  );
}

function CoreComponentCard({
  icon,
  iconBgClassName,
  iconClassName,
  title,
  description,
}) {
  return (
    <div className="glass-card p-6 rounded-xl hover-lift">
      <div
        className={`w-10 h-10 rounded-lg mb-4 flex items-center justify-center ${iconBgClassName}`}
      >
        <span
          className={`material-symbols-outlined ${iconClassName}`}
          data-icon={icon}
        >
          {icon}
        </span>
      </div>
      <h4 className="font-bold text-on-surface mb-2">{title}</h4>
      <p className="text-xs text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ProgramCard({
  imageAlt,
  imageSrc,
  badgeIcon,
  badgeBgClassName,
  badgeIconClassName,
  title,
  description,
  bullets,
  linkText,
  linkHref,
  linkIcon,
  aosDelay,
  containerClassName = "bg-surface-container-lowest border-stone-100",
}) {
  return (
    <div className="flex flex-col h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay={aosDelay}>
      <div className="aspect-video w-full rounded-t-xl overflow-hidden mb-0 relative">
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          sizes="(min-width: 1024px) 380px, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div
        className={`${containerClassName} p-8 rounded-b-xl border-x border-b shadow-sm hover:shadow-xl transition-all group flex flex-col flex-grow`}
      >
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${badgeBgClassName}`}
        >
          <span
            className={`material-symbols-outlined text-4xl ${badgeIconClassName}`}
            data-icon={badgeIcon}
          >
            {badgeIcon}
          </span>
        </div>
        <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm mb-6">{description}</p>
        <ul className="space-y-3 mb-8 flex-grow">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-on-surface-variant">
              <span
                className={`material-symbols-outlined text-sm ${
                  badgeIconClassName?.includes("tertiary")
                    ? "text-tertiary"
                    : badgeIconClassName?.includes("secondary")
                      ? "text-secondary"
                      : "text-primary"
                }`}
                data-icon="check_circle"
              >
                check_circle
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a
          className={`font-bold inline-flex items-center gap-2 group-hover:underline underline-offset-4 ${
            badgeIconClassName?.includes("tertiary")
              ? "text-tertiary"
              : badgeIconClassName?.includes("secondary")
                ? "text-secondary"
                : "text-primary"
          }`}
          href={linkHref}
        >
          {linkText}{" "}
          {linkIcon ? (
            <span className="material-symbols-outlined" data-icon={linkIcon}>
              {linkIcon}
            </span>
          ) : null}
        </a>
      </div>
    </div>
  );
}
