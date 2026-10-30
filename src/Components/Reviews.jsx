
import { useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Ramya Thakur",
    course: "Photography",
    initials: "RT",
    review:
      "PDS Photography Academy helped me understand photography through practical sessions. The learning environment and guidance made the experience valuable.",
  },
  {
    id: 2,
    name: "Harshit Singh",
    course: "Cinematography",
    initials: "HS",
    review:
      "Learning cinematography at PDS has been a great experience. From camera handling to creative storytelling, the training helped me develop my skills.",
  },
  {
    id: 3,
    name: "Hardik",
    course: "Content Creation",
    initials: "H",
    review:
      "The practical approach to content creation helped me understand shooting, planning and creating engaging videos with more confidence.",
  },
  {
    id: 4,
    name: "Akshita Patel",
    course: "Video Editing",
    initials: "AP",
    review:
      "The editing sessions were very helpful. I learned about editing workflows, transitions, storytelling and professional techniques.",
  },
  {
    id: 5,
    name: "Aditya Thakur",
    course: "Photography",
    initials: "AT",
    review:
      "PDS provides a creative learning atmosphere where students can improve their photography skills through real assignments and practice.",
  },
  {
    id: 6,
    name: "Mansiiee",
    course: "Video Editing",
    initials: "M",
    review:
      "I enjoyed learning video editing at PDS. The hands-on training and mentorship helped me understand the creative editing process.",
  },
  {
    id: 7,
    name: "Aman Khan",
    course: "Photography",
    initials: "AK",
    review:
      "The academy focuses on practical photography training. Learning camera techniques and lighting through real sessions was very useful.",
  },
  {
    id: 8,
    name: "Rajesh Tiwari",
    course: "Cinematography",
    initials: "RT",
    review:
      "The cinematography course introduced me to professional camera work, framing, lighting and visual storytelling.",
  },
];

// COMPACT REVIEW CARD
function ReviewCard({ review }) {
  return (
    <article className="group flex h-full min-h-[230px] flex-col rounded-2xl border border-[#DCE8DF] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD600] hover:shadow-lg sm:p-5">

      {/* STARS */}
      <div className="mb-3 flex items-center justify-between">
        <div
          className="flex gap-1 text-[17px] text-[#E5B600]"
          aria-label="Five stars"
        >
          ★★★★★
        </div>

        <span
          aria-hidden="true"
          className="font-serif text-4xl leading-none text-[#D7E8DB]"
        >
          “
        </span>
      </div>

      {/* REVIEW TEXT */}
      <p className="flex-1 font-serif text-[14px] leading-[1.65] text-[#40584A] sm:text-[15px]">
        "{review.review}"
      </p>

      {/* STUDENT DETAILS */}
      <div className="mt-4 border-t border-[#E6EDE7] pt-3">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#053D2D] text-xs font-bold text-[#FFD600]">
            {review.initials}
          </div>

          <div className="min-w-0">
            <h3 className="text-[13px] font-bold text-[#053D2D]">
              {review.name}
            </h3>

            <p className="mt-0.5 text-[11px] text-[#7C8E82]">
              {review.course} Student
            </p>
          </div>

          <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF6C8] text-[#053D2D]">
            ★
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const resumeTimeRef = useRef(0);

  const duplicatedReviews = [...reviews, ...reviews];

  // AUTOMATIC INFINITE SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (motionQuery.matches) return;

    const animate = (time) => {
      if (
        lastTimeRef.current !== null &&
        !pausedRef.current &&
        time >= resumeTimeRef.current
      ) {
        const delta = Math.min(
          time - lastTimeRef.current,
          50
        );

        const halfWidth = container.scrollWidth / 2;

        container.scrollLeft += (delta / 1000) * 30;

        if (
          halfWidth > 0 &&
          container.scrollLeft >= halfWidth
        ) {
          container.scrollLeft -= halfWidth;
        }
      }

      lastTimeRef.current = time;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // PREVIOUS / NEXT
  const scrollCards = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("article");

    const distance = card
      ? card.getBoundingClientRect().width + 16
      : 320;

    resumeTimeRef.current = performance.now() + 1000;

    container.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="reviews"
      className="w-full scroll-mt-20 overflow-hidden bg-[#FDFBF6] py-5 sm:py-7 lg:py-8"
    >
      {/* NAVBAR ALIGNED CONTAINER */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* COMPACT HEADING */}
        <div className="mb-5 text-center sm:mb-6">

          <p className="mb-2 font-serif text-xs font-extrabold uppercase tracking-[0.25em] text-[#168044] sm:text-sm">
            STUDENT REVIEWS
          </p>

          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,3rem)] font-bold leading-tight text-[#053D2D]">
            What Our Students{" "}
            <span className="italic text-[#168044]">
              Say.
            </span>
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-[#FFD600]" />

          <p className="mx-auto mt-3 max-w-[750px] text-xs leading-6 text-[#607568] sm:text-sm">
            Discover the learning experiences, creative journeys
            and practical skills developed by students at
            PDS Photography Academy.
          </p>
        </div>

        {/* REVIEW CAROUSEL */}
        <div
          ref={scrollRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onFocusCapture={() => {
            pausedRef.current = true;
          }}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget
              )
            ) {
              pausedRef.current = false;
            }
          }}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            pausedRef.current = false;
          }}
          className="flex gap-4 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Student reviews carousel"
          tabIndex={0}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[270px] shrink-0 sm:w-[310px] lg:w-[340px]"
              aria-hidden={index >= reviews.length}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* ONLY ARROW BUTTONS */}
        <div className="mt-4 flex items-center justify-center gap-3">

          <button
            type="button"
            onClick={() => scrollCards(-1)}
            aria-label="Previous reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#053D2D] bg-white text-lg text-[#053D2D] transition-all duration-300 hover:bg-[#053D2D] hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollCards(1)}
            aria-label="Next reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#053D2D] bg-white text-lg text-[#053D2D] transition-all duration-300 hover:bg-[#053D2D] hover:text-white"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}
