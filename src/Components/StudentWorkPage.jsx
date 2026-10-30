
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ==========================================
// 1. TRENDING STUDENT REELS
// ==========================================

const studentReels = [
  {
    id: 1,
    title: "Golden Hour Shoot",
    student: "PDS Academy",
    category: "Photography",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793256321/Behind_Every_Divine_Frame..._Theres_a_Beautiful_BTS._Ek_traditional_Mata_Ji_shoot_sirf_ph.mp4",
  },
  {
    id: 2,
    title: "Outdoor Model Practice",
    student: "PDS Academy",
    category: "Photography",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255598/Outdoor_Model_Practice_Shoot_at_Lal_Bagh_Indore_PDS_Photography_Academy_ke_students_ne_k.mp4",
  },
  {
    id: 3,
    title: "Behind The Scenes",
    student: "PDS Academy",
    category: "Cinematography",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255179/REAL_MODEL_REAL_OUTDOOR_SHOOT_REAL_EXPERIENCE_PDS_Photography_Academy_ke_students_ke_l.mp4",
  },
  {
    id: 4,
    title: "Creative Editing",
    student: "PDS Academy",
    category: "Video Editing",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255702/Behind_The_Scenes._Beyond_The_Skills._PDS_Photography_Academy_mein_students_sirf_Shoot_Ed.mp4",
  },
  {
    id: 5,
    title: "Student Batch Journey",
    student: "PDS Academy",
    category: "Content Creation",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793254452/One_Journey_Ends_Another_Begins_%EF%B8%8FPDS_Photography_Academy_ka_ek_aur_batch_successfully_c_1.mp4",
  },
];

// ==========================================
// 2. STUDENT STORIES
// ==========================================

const studentStories = [
  {
    id: 101,
    title: "My Journey at PDS",
    student: "Student Story",
    category: "Student Story",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793254166/Sapna_Sirf_Photographer_Banne_Ka_Tha_PDS_Photography_Academy_ne_mujhe_sirf_Photography_nahi_s.mp4",
  },
  {
    id: 102,
    title: "Learning Experience",
    student: "Student Story",
    category: "Student Story",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255998/Student_Review_-_Learning_Jo_Sirf_Classroom_Tak_Nahi_Yahan_sirf_Photoshop_ke_tools_nahi_pr.mp4",
  },
  {
    id: 103,
    title: "From Beginner to Creator",
    student: "Student Story",
    category: "Student Story",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793258893/From_Beginner_to_Creator_Kuch_samay_pehle_tak_is_student_ke_liye_camera_aur_editing_software.mp4",
  },
  {
    id: 104,
    title: "My Creative Growth",
    student: "Student Story",
    category: "Student Story",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793259017/Student_Success_Story_-_PDS_Photography_AcademyKuch_hi_hafton_pehle_tak_camera_settings_aur_s.mp4",
  },
];

// ==========================================
// 3. CINEMATOGRAPHY & VIDEO EDITING
// ==========================================

const filmProjects = [
  {
    id: 201,
    title: "Short Film",
    student: "Student Project",
    category: "Cinematography",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793168314/Cinematography_Course_-_PDS_Photography_AcademyCinematography_sirf_camera_chalana_nahi_storytel_2.mp4",
  },
  {
    id: 202,
    title: "Creative Reel",
    student: "Student Project",
    category: "Video Editing",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255045/Ganesh_Ji_Shoot_ka_REAL_BTS_Photography_aur_Cinematography_ko_professionally_seekhna_ha.mp4",
  },
  {
    id: 203,
    title: "Travel Video",
    student: "Student Project",
    category: "Cinematography",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255702/Behind_The_Scenes._Beyond_The_Skills._PDS_Photography_Academy_mein_students_sirf_Shoot_Ed.mp4",
  },
  {
    id: 204,
    title: "Documentary",
    student: "Student Project",
    category: "Cinematography",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793259971/Turn_Your_Creativity_Into_Cinematic_Art_with_PDS_Photography_Academy_Yaha_sirf_photos_videos.mp4",
  },
  {
    id: 205,
    title: "Editing Breakdown",
    student: "Student Project",
    category: "Video Editing",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793259879/Design_sirf_banana_nahi_creative_ideas_ko_professionally_present_karna_bhi_hota_hai_PDS_Photo.mp4",
  },
  {
    id: 206,
    title: "Action Reel",
    student: "Student Project",
    category: "Content Creation",
    video:
      "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793168314/Cinematography_Course_-_PDS_Photography_AcademyCinematography_sirf_camera_chalana_nahi_storytel_2.mp4",
  },
];

// ==========================================
// 4. NEW OUTDOOR VIDEOS
// ADD CLOUDINARY URL IN video: ""
// ==========================================

const outdoorVideos = [
  {
    id: 301,
    title: "Outdoor Shoot 01",
    student: "PDS Academy",
    category: "Outdoor",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793258147/Turn_Your_Passion_Into_a_Professional_Career_PDS_Photography_Academy_presents_Professional_Vi.mp4",
  },
  {
    id: 302,
    title: "Outdoor Shoot 02",
    student: "PDS Academy",
    category: "Outdoor",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255598/Outdoor_Model_Practice_Shoot_at_Lal_Bagh_Indore_PDS_Photography_Academy_ke_students_ne_k.mp4",
  },
  {
    id: 303,
    title: "Outdoor Shoot 03",
    student: "PDS Academy",
    category: "Outdoor",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255179/REAL_MODEL_REAL_OUTDOOR_SHOOT_REAL_EXPERIENCE_PDS_Photography_Academy_ke_students_ke_l.mp4",
  },
  {
    id: 304,
    title: "Outdoor Shoot 04",
    student: "PDS Academy",
    category: "Outdoor",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793254452/One_Journey_Ends_Another_Begins_%EF%B8%8FPDS_Photography_Academy_ka_ek_aur_batch_successfully_c_1.mp4",
  },
];

// ==========================================
// 5. NEW CREATIVE PROJECT VIDEOS
// ADD CLOUDINARY URL IN video: ""
// ==========================================

const creativeVideos = [
  {
    id: 401,
    title: "Creative Project 01",
    student: "PDS Academy",
    category: "Creative Projects",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793168314/Cinematography_Course_-_PDS_Photography_AcademyCinematography_sirf_camera_chalana_nahi_storytel_2.mp4",
  },
  {
    id: 402,
    title: "Creative Project 02",
    student: "PDS Academy",
    category: "Creative Projects",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793255045/Ganesh_Ji_Shoot_ka_REAL_BTS_Photography_aur_Cinematography_ko_professionally_seekhna_ha.mp4",
  },
  {
    id: 403,
    title: "Creative Project 03",
    student: "PDS Academy",
    category: "Creative Projects",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793257487/Behind_Every_Cinematic_Video..._Theres_a_Powerful_BTS._Camera_ke_peeche_sirf_recording_nah.mp4",
  },
  {
    id: 404,
    title: "Creative Project 04",
    student: "PDS Academy",
    category: "Creative Projects",
    video: "https://res.cloudinary.com/dqnywyxb5/video/upload/v1793259971/Turn_Your_Creativity_Into_Cinematic_Art_with_PDS_Photography_Academy_Yaha_sirf_photos_videos.mp4",
  },
];

const categories = [
  "All",
  "Photography",
  "Cinematography",
  "Video Editing",
  "Content Creation",
];

// ==========================================
// ICONS
// ==========================================

function PlayIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  );
}

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

// ==========================================
// VIDEO CARD - DIRECT AUTOPLAY
// ==========================================

function VideoCard({ item, onOpen }) {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setVideoError(false);
  }, [item.video]);

  return (
    <div className="group w-full min-w-0">
      <button
        type="button"
        onClick={() => item.video && onOpen(item)}
        disabled={!item.video}
        className="block w-full text-left disabled:cursor-default"
        aria-label={`Watch ${item.title}`}
      >
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#053D2D]">
          {item.video && !videoError ? (
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setVideoError(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#053D2D] px-4 text-center text-white">
              <PlayIcon size={32} />
              <p className="text-xs font-semibold">
                {videoError
                  ? "Video could not load"
                  : "Video Coming Soon"}
              </p>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <span className="pointer-events-none absolute bottom-3 left-3 max-w-[90%] truncate rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-white">
            {item.category}
          </span>

          {item.video && !videoError && (
            <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white">
              Playing
            </span>
          )}
        </div>

        <h3 className="mt-3 truncate font-serif text-sm font-bold text-[#053D2D] sm:text-base">
          {item.title}
        </h3>

        <p className="mt-1 truncate text-xs text-[#6B7A70]">
          {item.student}
        </p>
      </button>
    </div>
  );
}

// ==========================================
// SECTION HEADING
// ==========================================
  
function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <div className="relative mb-2 flex flex-col items-center justify-center gap-2 text-center">

      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#168044]">
        {eyebrow}
      </p>

      <h2 className="font-serif text-2xl font-bold text-[#053D2D] sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto max-w-[650px] text-sm leading-relaxed text-[#60746A]">
          {description}
        </p>
      )}

      <div className="h-1 w-16 rounded-full bg-[#FFD600]" />

      {children && (
        <div className="mt-3 flex justify-center gap-2">
          {children}
        </div>
      )}

    </div>
  );
}

// ==========================================
// FHOTIC STYLE MOVING REELS
// ==========================================

function MovingReels({ items, onOpen }) {
  const sliderRef = useRef(null);
  const pausedRef = useRef(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || items.length === 0) return;

    let animationId;
    let lastTime = 0;

    positionRef.current = 0;
    slider.scrollLeft = 0;

    const animate = (time) => {
      if (!lastTime) lastTime = time;

      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      if (!pausedRef.current) {
        const halfWidth = slider.scrollWidth / 2;

        if (halfWidth > 0) {
          positionRef.current += (delta / 1000) * 30;

          if (positionRef.current >= halfWidth) {
            positionRef.current -= halfWidth;
          }

          slider.scrollLeft = positionRef.current;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [items]);

  const moveSlider = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const halfWidth = slider.scrollWidth / 2;

    if (!halfWidth) return;

    positionRef.current =
      ((positionRef.current + direction * 230) % halfWidth +
        halfWidth) %
      halfWidth;

    slider.scrollLeft = positionRef.current;
  };

  if (items.length === 0) {
    return (
      <p className="py-10 text-center text-[#60746A]">
        No reels available in this category yet.
      </p>
    );
  }

  return (
    <div className="relative w-full">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => moveSlider(-1)}
          aria-label="Previous reels"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD600] text-[#053D2D] transition hover:scale-105"
        >
          <ArrowIcon direction="left" />
        </button>

        <button
          type="button"
          onClick={() => moveSlider(1)}
          aria-label="Next reels"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5DFD7] bg-white text-[#053D2D] transition hover:bg-[#FFD600]"
        >
          <ArrowIcon />
        </button>
      </div>

      <div
        ref={sliderRef}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onTouchStart={() => {
          pausedRef.current = true;
        }}
        onTouchEnd={() => {
          pausedRef.current = false;
        }}
        className="flex w-full gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-[calc((100%-64px)/5)] min-w-[calc((100%-64px)/5)] shrink-0 max-lg:w-[220px] max-lg:min-w-[220px] max-sm:w-[175px] max-sm:min-w-[175px]"
          >
            <VideoCard item={item} onOpen={onOpen} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// NEW RESPONSIVE 4 VIDEO GRID
// ==========================================

function FourVideoSection({
  eyebrow,
  title,
  description,
  videos,
  onOpen,
  background = "cream",
}) {
  return (
    <section
      className={`w-full py-12 sm:py-14 lg:py-16 ${
        background === "white"
          ? "bg-white"
          : "bg-[#FDFBF6]"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#168044]">
            {eyebrow}
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#053D2D] sm:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-sm leading-relaxed text-[#60746A] sm:text-base">
            {description}
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#FFD600]" />
        </div>

        <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {videos.map((item) => (
            <div key={item.id} className="min-w-0">
              <VideoCard item={item} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// FULLSCREEN VIDEO POPUP
// ==========================================

function MediaPopup({ item, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = oldOverflow;
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="presentation"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black"
      >
        ×
      </button>

      <div
        className="flex max-h-[90vh] max-w-[95vw] flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <video
          key={item.id}
          src={item.video}
          controls
          autoPlay
          playsInline
          className="max-h-[75vh] max-w-full rounded-xl bg-black"
        />

        <div className="mt-4 text-center">
          <h3 className="font-serif text-lg font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-white/70">
            {item.student} · {item.category}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN STUDENT WORK PAGE
// ==========================================

export default function StudentWorkPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const filmsRef = useRef(null);

  const scrollFilms = (direction) => {
    if (!filmsRef.current) return;

    filmsRef.current.scrollBy({
      left: direction * 450,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#FDFBF6] font-sans">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#053D2D] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1800&q=85"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#002D20] via-[#002D20]/90 to-[#002D20]/30" />
        </div>

        <div className="relative mx-auto flex min-h-[220px] max-w-[1440px] flex-col justify-center px-5 py-6 sm:min-h-[240px] sm:px-8 lg:min-h-[260px] lg:px-10">
          <p className="mb-4 text-xs font-semibold text-white/80">
            <Link to="/" className="hover:text-[#FFD600]">
              Home
            </Link>

            <span className="mx-3 text-[#FFD600]">›</span>
            Student Work
          </p>

          <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] font-bold leading-tight">
            Student{" "}
            <span className="text-[#FFD600]">Work</span>
          </h1>

          <p className="mt-3 text-base font-bold sm:text-lg">
            Real students. Real projects. Real growth.
          </p>

          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-white/85 sm:text-base">
            Explore the creative work made by our students
            during their journey at PDS Photography Academy.
          </p>

          <Link
            to="/enquiry"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#FFD600] px-6 py-3 text-sm font-bold text-[#053D2D] transition hover:bg-[#FFE65C]"
          >
            Join Our Courses <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ================= COURSE CATEGORIES ================= */}

      <section className="border-b border-[#E7E8DF] bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-5 px-5 py-7 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[
            ["Photography", "Practical training"],
            ["Cinematography", "Creative filmmaking"],
            ["Video Editing", "Editing projects"],
            ["Student Stories", "Learning experiences"],
          ].map(([name, label]) => (
            <div key={name} className="text-center">
              <h3 className="font-serif text-lg font-bold text-[#053D2D] sm:text-xl">
                {name}
              </h3>

              <p className="mt-1 text-xs text-[#60746A] sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRENDING REELS ================= */}

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Student Creations"
          title="Trending Student Reels"
          description="Creative videos from PDS Photography Academy."
        />

        <MovingReels
          items={studentReels}
          onOpen={setSelectedMedia}
        />
      </section>

      {/* ================= STUDENT STORIES ================= */}

      <section className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#168044]">
            REAL STUDENTS. REAL EXPERIENCES.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#053D2D] sm:text-4xl">
            Student{" "}
            <span className="text-[#168044]">Stories</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-sm leading-relaxed text-[#60746A] sm:text-base">
            Hear directly from our students about their
            learning and creative journey at PDS Photography
            Academy.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {studentStories.map((item) => (
            <div key={item.id} className="min-w-0">
              <VideoCard
                item={item}
                onOpen={setSelectedMedia}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEW OUTDOOR SECTION ================= */}

      <FourVideoSection
        eyebrow="Practical Learning"
        title="Outdoor Practical Shoots"
        description="Explore hands-on outdoor photography sessions, model shoots and real-world practical training."
        videos={outdoorVideos}
        onOpen={setSelectedMedia}
        background="white"
      />

      {/* ================= CINEMATOGRAPHY ================= */}

      <section className="border-t border-[#E7E8DF] bg-white py-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Creative Projects"
            title="Cinematography & Video Editing"
            description="Short films, reels and editing projects."
          >
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollFilms(-1)}
                aria-label="Previous films"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5DFD7] bg-white text-[#053D2D] hover:bg-[#FFD600]"
              >
                <ArrowIcon direction="left" />
              </button>

              <button
                type="button"
                onClick={() => scrollFilms(1)}
                aria-label="Next films"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5DFD7] bg-white text-[#053D2D] hover:bg-[#FFD600]"
              >
                <ArrowIcon />
              </button>
            </div>
          </SectionHeading>

          <div
            ref={filmsRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filmProjects.map((item) => (
              <div
                key={item.id}
                className="w-[210px] shrink-0 snap-start sm:w-[245px] lg:w-[260px]"
              >
                <VideoCard
                  item={item}
                  onOpen={setSelectedMedia}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW CREATIVE SECTION ================= */}

      <FourVideoSection
        eyebrow="Student Creativity"
        title="Behind the Scenes & Creative Projects"
        description="Discover creative concepts, behind-the-scenes moments and student-led video projects."
        videos={creativeVideos}
        onOpen={setSelectedMedia}
        background="cream"
      />

      {/* ================= ENQUIRY CTA ================= */}

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-between gap-6 overflow-hidden rounded-[24px] bg-[#053D2D] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:px-14">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD600]">
              Your Creative Journey Starts Here
            </p>

            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Your Work Could{" "}
              <span className="text-[#FFD600]">
                Be Here.
              </span>
            </h2>

            <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-white/80 sm:text-base">
              Join PDS Photography Academy, learn practical
              skills and start creating your own portfolio.
            </p>
          </div>

          <Link
            to="/enquiry"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#FFD600] px-7 py-3.5 text-sm font-bold text-[#053D2D] transition hover:bg-[#FFE65C]"
          >
            Enquire Now <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ================= VIDEO POPUP ================= */}

      {selectedMedia && (
        <MediaPopup
          item={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
}
