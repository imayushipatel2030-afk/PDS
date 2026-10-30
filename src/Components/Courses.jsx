
import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "photography",
    number: "01",
    title: "PHOTOGRAPHY",
    description:
      "Master camera settings, exposure, composition, portrait photography and professional studio lighting.",
    topics: ["Camera Basics", "Portraits", "Lighting"],
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=85",
  },
  {
    id: "cinematography",
    number: "02",
    title: "CINEMATOGRAPHY",
    description:
      "Learn cinematic storytelling, camera movements, lighting techniques and professional filmmaking.",
    topics: ["Filmmaking", "Camera Work", "Storytelling"],
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=85",
  },
  {
    id: "video-editing",
    number: "03",
    title: "VIDEO EDITING",
    description:
      "Develop professional editing skills including transitions, colour grading, audio editing and post-production.",
    topics: ["Editing", "Colour Grading", "Post-Production"],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=85",
  },
  {
    id: "content-creation",
    number: "04",
    title: "CONTENT CREATION",
    description:
      "Create engaging Instagram Reels, YouTube videos and digital content with professional production techniques.",
    topics: ["Instagram Reels", "YouTube", "Social Media"],
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=85",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="w-full scroll-mt-24 bg-[#053D2D] py-10 text-white sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* CENTER HEADING */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFD600]">
            OUR COURSES
          </p>

          <h2 className="font-serif text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            CHOOSE YOUR{" "}
            <span className="text-[#FFD600]">PATH.</span>
          </h2>

          <div className="h-1 w-16 rounded-full bg-[#FFD600]" />

          <p className="max-w-[620px] text-sm leading-6 text-white/75">
            Explore practical courses designed to turn your
            creativity into professional skills.
          </p>
        </div>

        {/* FOUR COURSE CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

          {courses.map((course) => (
            <article
              key={course.id}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#10513D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD600] hover:shadow-xl"
            >

              {/* CLEAR IMAGE */}
              <div className="relative h-[190px] overflow-hidden bg-[#E7EDE5] sm:h-[180px] lg:h-[165px]">

                <img
                  src={course.image}
                  alt={`${course.title} course`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#053D2D] px-3 py-1.5 text-xs font-bold text-[#FFD600]">
                  {course.number}
                </span>
              </div>

              {/* COURSE DETAILS */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">

                <h3 className="mb-2 font-serif text-lg font-bold uppercase leading-tight text-white lg:text-xl">
                  {course.title}
                </h3>

                <p className="text-[13px] leading-5 text-[#D5E7DC]">
                  {course.description}
                </p>

                {/* TOPICS */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {course.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/90"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-auto pt-5">
                  <Link
  to={`/courses#${course.id}`}
  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD600] px-5 py-2.5 text-xs font-bold uppercase text-[#053D2D] transition hover:bg-[#FFE34D]"
>
  VIEW COURSE
  <span aria-hidden="true">↗</span>
</Link>
                </div>
              </div>

              {/* HOVER ACCENT */}
              <div className="h-[3px] w-0 bg-[#FFD600] transition-all duration-500 group-hover:w-full" />

            </article>
          ))}
        </div>

        {/* EXPLORE ALL COURSES */}
        <div className="mt-9 flex justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 rounded-full bg-[#FFD600] px-7 py-3 text-xs font-bold uppercase tracking-wide text-[#053D2D] transition hover:-translate-y-0.5 hover:bg-[#FFE34D] sm:text-sm"
          >
            EXPLORE ALL COURSES
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
