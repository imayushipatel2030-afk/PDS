
import { useState } from "react";

import gaganSirImage from "../assets/gagansir.jpg";
import lenaMamImage from "../assets/lenamam.jpg";

const mentors = [
  {
    id: 1,
    role: "FOUNDER",
    profession: "PHOTOGRAPHER",
    name: "Gagan Sir",
    description:
      "Guiding aspiring photographers through practical learning, creative techniques and professional photography training at PDS Photography Academy.",
    image: gaganSirImage,
    skills: ["Photography", "Lighting"],
  },
  {
    id: 2,
    role: "CO-FOUNDER",
    profession: "ACADEMY MENTOR",
    name: "Lena Mam",
    description:
      "Supporting students throughout their creative learning journey and helping build a practical, encouraging learning environment at PDS Photography Academy.",
    image: lenaMamImage,
    skills: ["Student Guidance", "Creative Learning"],
  },
];

// CLEAN PROFILE PHOTO - NO EXTRA FRAME OR BADGE
function ProfileImage({ mentor }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mx-auto w-[180px] shrink-0 sm:mx-0 sm:w-[190px] lg:w-[205px]">
      <div className="aspect-[3/4] overflow-hidden rounded-[18px] bg-[#EAF4E8]">
        {!failed ? (
          <img
            src={mentor.image}
            alt={`${mentor.name} - ${mentor.role}`}
            onError={() => setFailed(true)}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-[#053D2D]">
            Photo unavailable
          </div>
        )}
      </div>
    </div>
  );
}

// MENTOR DETAILS
function MentorDetails({ mentor, dark = false }) {
  return (
    <div className="min-w-0 flex-1 text-center sm:text-left">

      {/* ROLE */}
      <p
        className={`mb-2 text-[11px] font-extrabold uppercase tracking-[0.17em] ${
          dark ? "text-[#FFD600]" : "text-[#A97C00]"
        }`}
      >
        {mentor.role} · {mentor.profession}
      </p>

      {/* NAME */}
      <h3
        className={`font-serif text-3xl font-bold leading-tight sm:text-[34px] ${
          dark ? "text-white" : "text-[#053D2D]"
        }`}
      >
        {mentor.name}
      </h3>

      {/* DESCRIPTION */}
      <p
        className={`mx-auto mt-4 max-w-[680px] text-sm leading-7 sm:mx-0 sm:text-[15px] ${
          dark ? "text-white/85" : "text-[#456459]"
        }`}
      >
        {mentor.description}
      </p>

      {/* SKILLS */}
      <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
        {mentor.skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-full border px-4 py-2 text-xs font-semibold ${
              dark
                ? "border-white/30 bg-white/5 text-white"
                : "border-[#C7DCCF] bg-[#EAF4EE] text-[#053D2D]"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Mentor() {
  return (
    <section
      id="mentors"
      className="w-full bg-[#FDFBF6] px-4 py-12 sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* SECTION HEADING */}
        <div className="mb-9 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#168044]">
            OUR MENTORS
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#053D2D] sm:text-4xl">
            Meet the people behind{" "}
            <span className="italic text-[#168044]">
              PDS
            </span>
          </h2>
        </div>

        {/* MENTOR CARDS */}
        <div className="overflow-hidden rounded-[24px] shadow-sm">

          {/* GAGAN SIR - DARK GREEN */}
          <article className="flex flex-col items-center gap-7 bg-[#053D2D] p-6 sm:flex-row sm:gap-9 sm:p-8 lg:gap-12 lg:p-10">

            {/* PHOTO LEFT */}
            <ProfileImage mentor={mentors[0]} />

            {/* DETAILS RIGHT */}
            <MentorDetails mentor={mentors[0]} dark />

          </article>

          {/* LENA MAM - WHITE */}
          <article className="flex flex-col items-center gap-7 border-x border-b border-[#E8DFC9] bg-white p-6 sm:flex-row sm:gap-9 sm:p-8 lg:gap-12 lg:p-10">

            {/* DETAILS LEFT */}
            <div className="order-2 w-full flex-1 sm:order-1">
              <MentorDetails mentor={mentors[1]} />
            </div>

            {/* PHOTO RIGHT */}
            <div className="order-1 sm:order-2">
              <ProfileImage mentor={mentors[1]} />
            </div>

          </article>

        </div>
      </div>
    </section>
  );
}
