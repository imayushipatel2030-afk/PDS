
import { useState } from "react";

const projects = [
  {
    id: 1,
    category: "CINEMATOGRAPHY",
    title: "Cinematic Stories",
    description:
      "Explore professional filmmaking, camera movements and creative visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    category: "PHOTOGRAPHY",
    title: "Portrait Studies",
    description:
      "Learn creative portrait photography, lighting techniques and professional composition.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    category: "PRODUCTION",
    title: "Behind the Frame",
    description:
      "Discover behind-the-scenes production, professional cameras and studio setups.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
  },
];

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EAE6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#053D2D]">

        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#10513D] to-[#00291E] px-5 text-center">
            <span className="font-serif text-xl font-bold text-[#FFD600]">
              PDS Photography Academy
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00291E]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* DETAILS */}
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#168044]">
          {project.category}
        </p>

        <h3 className="font-serif text-xl font-bold text-[#053D2D] sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#607568]">
          {project.description}
        </p>

        <div className="mt-auto pt-4">
          <div className="h-[3px] w-10 rounded-full bg-[#FFD600] transition-all duration-300 group-hover:w-20" />
        </div>
      </div>
    </article>
  );
}

export default function StudentWork() {
  return (
    <section
      id="student-work"
      className="w-full scroll-mt-20 bg-[#FDFBF6] pt-3 pb-10 sm:pt-4 sm:pb-12 lg:pt-5 lg:pb-14"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* CENTERED HEADING */}
        <div className="mb-7 text-center sm:mb-9">

          <p className="mb-3 font-serif text-sm font-extrabold uppercase tracking-[0.25em] text-[#168044] sm:text-base">
            STUDENT WORK
          </p>

          <h2 className="mx-auto max-w-full font-serif text-[clamp(1.5rem,3vw,2.7rem)] font-bold uppercase leading-[1.15] tracking-tight text-[#053D2D] xl:whitespace-nowrap">
            REAL CREATIVITY.{" "}
            <span className="text-[#168044]">
              ORIGINAL PERSPECTIVES.
            </span>
          </h2>

        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>



      </div>
    </section>
  );
}
