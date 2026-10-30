import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    nav: "Home",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1920&q=85",
    title: ["Learn the craft.", "Master the frame."],
    description:
      "Photography, cinematography and editing courses taught through real projects.",
    button: "Explore Courses",
    link: "#courses",
  },
  {
    id: 2,
    nav: "Courses",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=85",
    title: ["Find your passion.", "Build your future."],
    description:
      "Explore professional photography, cinematography, editing and content creation courses.",
    button: "Explore Courses",
    link: "#courses",
  },
  {
    id: 3,
    nav: "Student Work",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1920&q=85",
    title: ["Original work.", "Emerging voices."],
    description:
      "Explore films, portraits, reels and visual experiments created by our students.",
    button: "Explore Student Work",
    link: "#student-work",
  },
  {
    id: 4,
    nav: "Library",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1920&q=85",
    title: ["A library built for", "creators."],
    description:
      "Watch tutorials, project breakdowns and visual learning resources.",
    button: "Explore Library",
    link: "#videos",
  },
  {
    id: 5,
    nav: "Reviews",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1920&q=85",
    title: ["Stories from our", "community."],
    description:
      "Read honest learning experiences from developing photographers and filmmakers.",
    button: "Explore Reviews",
    link: "#reviews",
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Automatic slideshow
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [paused, activeIndex]);

  // Preload background images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  const activeSlide = slides[activeIndex];

  return (
    <section
      id="home"
      aria-label="PDS Photography Academy slideshow"
      aria-roledescription="carousel"
      className="relative isolate flex min-h-[650px] w-full flex-col overflow-hidden bg-[#002D20] text-white sm:min-h-[700px] lg:min-h-[calc(100svh-88px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 -z-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* CINEMATIC DARK GREEN OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#00291E]/95 via-[#00291E]/75 to-[#00180F]/25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#001E16]/65 via-transparent to-black/10"
      />

      {/* MAIN CONTENT */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pb-12 pt-16 sm:px-8 lg:px-10 lg:py-20">
        <div
          key={activeSlide.id}
          className="max-w-[950px]"
        >
          {/* EYEBROW */}
          <p className="mb-6 font-serif text-[11px] font-bold uppercase tracking-[0.25em] text-[#FFD600] sm:text-sm">
            PDS PHOTOGRAPHY ACADEMY
          </p>

          {/* MAIN HEADING */}
          <h1 className="max-w-[950px] font-serif text-[clamp(2.7rem,7vw,6.3rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white">
            {activeSlide.title.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[650px] font-serif text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
            {activeSlide.description}
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={activeSlide.link}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#FFD000] px-7 py-3.5 font-serif text-sm font-bold text-[#071C14] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFE04D] hover:shadow-xl sm:px-8 sm:text-base"
            >
              {activeSlide.button}
            </a>

           
<Link
  to="/enquiry"
  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/45 bg-white/5 px-7 py-3.5 font-serif text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15 sm:px-8 sm:text-base"
>
  Admission enquiry
</Link>

          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-10 lg:pb-12">

        <div className="border-t border-white/20 pt-6">

          <div
            role="group"
            aria-label="Choose featured slide"
            className="grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-5 sm:gap-4"
          >
            {slides.map((slide, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => changeSlide(index)}
                  aria-label={`Show ${slide.nav} slide`}
                  aria-pressed={isActive}
                  className={`min-h-11 text-left font-serif text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "text-[#FFD600]"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {slide.nav}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
