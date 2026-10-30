
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const courses = [
  {
    id: 1,
    slug: "photography",
    number: "01",
    category: "PHOTOGRAPHY",
    title: "Photography Masterclass",
    description:
      "Discover the art of photography through camera settings, lighting, composition and practical shooting techniques. Learn to capture portraits, landscapes and professional photographs.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=85",
  },
  {
    id: 2,
    slug: "cinematography",
    number: "02",
    category: "CINEMATOGRAPHY",
    title: "Cinematography & Filmmaking",
    description:
      "Explore cinematic camera movements, lighting, composition and visual storytelling. Understand how creative ideas are transformed into engaging films and visual experiences.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=85",
  },
  {
    id: 3,
    slug: "video-editing",
    number: "03",
    category: "VIDEO EDITING",
    title: "Professional Video Editing",
    description:
      "Master the essentials of professional video editing, transitions, colour grading, sound design and post-production. Create engaging videos and cinematic edits.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=85",
  },
  {
    id: 4,
    slug: "content-creation",
    number: "04",
    category: "CONTENT CREATION",
    title: "Content Creation & Social Media",
    description:
      "Learn to create engaging Instagram Reels, YouTube videos and social media content. Develop skills in scripting, shooting, editing and creative storytelling.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=85",
  },
];

export default function CoursesPage() {
  const location = useLocation();

  useEffect(() => {
    const courseId = location.hash.replace("#", "");

    if (!courseId) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const timer = setTimeout(() => {
      const targetSection = document.getElementById(courseId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[#FDFBF6]">

      {/* HERO SECTION */}
      <section className="bg-[#EAF4E8] px-5 py-16 text-center sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#008D36]">
          PDS Photography Academy
        </p>

        <h1 className="mt-5 font-serif text-4xl font-bold text-[#053D2D] sm:text-5xl lg:text-6xl">
          Explore Our{" "}
          <span className="italic text-[#008D36]">
            Courses.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#355E4F] sm:text-base">
          Discover your passion. Learn practical skills.
          Create something extraordinary.
        </p>

        <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-[#FFD600]" />
      </section>

      {/* FOUR COURSES */}
      {courses.map((course, index) => (
        <section
          key={course.id}
          id={course.slug}
          className={`scroll-mt-24 px-5 py-14 sm:px-8 lg:scroll-mt-28 lg:py-20 ${
            index % 2 === 0
              ? "bg-[#FDFBF6]"
              : "bg-[#F0F7EF]"
          }`}
        >
          <div
            className={`mx-auto grid max-w-[1160px] items-center gap-9 lg:grid-cols-2 lg:gap-14 ${
              index % 2 !== 0
                ? "lg:[&>div:first-child]:order-2"
                : ""
            }`}
          >
            {/* COURSE IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[350px]"
              />
            </div>

            {/* COURSE CONTENT */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#008D36]">
                {course.number} / {course.category}
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#053D2D] sm:text-4xl">
                {course.title}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#49675C] sm:text-base">
                {course.description}
              </p>

              <Link
                to="/enquiry"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#053D2D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#008D36]"
              >
                Enquire Now
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
