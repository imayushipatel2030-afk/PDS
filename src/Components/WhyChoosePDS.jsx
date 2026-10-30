
import { useEffect, useRef, useState } from "react";

// ==========================================
// YOUR 7 YOUTUBE SHORTS
// ==========================================

const videos = [
  {
    id: 1,
    youtubeId: "16Q-PbOzLik",
    category: "Indoor",
  },
  {
    id: 2,
    youtubeId: "AX16-M35hbg",
    category: "Outdoor",
  },
  {
    id: 3,
    youtubeId: "6w6YBzNuCg0",
    category: "Studio",
  },
  {
    id: 4,
    youtubeId: "XY7JeswDpkM",
    category: "Student Journey",
  },
  {
    id: 5,
    youtubeId: "55K20pH5Pec",
    category: "Indoor",
  },
  {
    id: 6,
    youtubeId: "AX16-M35hbg",
    category: "Outdoor",
  },
  {
    id: 7,
    youtubeId: "43rfGHJrtnk",
    category: "Student Work",
  },
];

// ==========================================
// LOAD YOUTUBE API
// ==========================================

let youtubeApiPromise = null;

function loadYouTubeAPI() {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise((resolve, reject) => {
    const previousCallback = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousCallback === "function") {
        previousCallback();
      }

      resolve(window.YT);
    };

    if (
      !document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () =>
        reject(new Error("YouTube API failed"));

      document.body.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

// ==========================================
// VIDEO CARD
// ==========================================

function VideoCard({ item, muted, onToggleMute }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeAPI()
      .then((YT) => {
        if (cancelled || !containerRef.current) return;

        const holder = document.createElement("div");
        containerRef.current.appendChild(holder);

        playerRef.current = new YT.Player(holder, {
          videoId: item.youtubeId,
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            playsinline: 1,
            loop: 1,
            playlist: item.youtubeId,
            rel: 0,
            disablekb: 1,
            fs: 0,
          },
          events: {
            onReady: (event) => {
              if (cancelled) return;

              event.target.mute();
              event.target.playVideo();
              setReady(true);
            },
            onStateChange: (event) => {
              if (
                event.data === YT.PlayerState.ENDED
              ) {
                event.target.playVideo();
              }
            },
          },
        });
      })
      .catch((error) => {
        console.error("YouTube player error:", error);
      });

    return () => {
      cancelled = true;

      try {
        playerRef.current?.destroy();
      } catch {
        // Ignore cleanup errors
      }

      playerRef.current = null;

      if (containerRef.current) {
        containerRef.current.replaceChildren();
      }
    };
  }, [item.youtubeId]);

  useEffect(() => {
    if (!ready || !playerRef.current) return;

    try {
      if (muted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
        playerRef.current.playVideo();
      }
    } catch {
      // Player not ready
    }
  }, [muted, ready]);

  return (
    <article className="w-[175px] shrink-0 sm:w-[195px] lg:w-[215px]">

      {/* VIDEO */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-[#053D2D]">

        <div
          ref={containerRef}
          className="absolute inset-0 h-full w-full [&_iframe]:h-full [&_iframe]:w-full"
        />

        {/* PREVENT YOUTUBE CLICKS */}
        <div className="absolute inset-0 z-10" />

        {/* MUTE / UNMUTE */}
        <button
          type="button"
          onClick={() => onToggleMute(item.id)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
        >
          {muted ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="m16 9 5 6" />
              <path d="m21 9-5 6" />
            </svg>
          ) : (
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M19 5a10 10 0 0 1 0 14" />
            </svg>
          )}
        </button>

        {!ready && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs text-white/70">
            Loading video...
          </div>
        )}
      </div>

      {/* ONLY CENTERED CATEGORY */}
      <div className="flex w-full items-center justify-center px-2 pb-2 pt-3">
        <h3 className="text-center font-serif text-sm font-bold uppercase tracking-[0.08em] text-[#053D2D] sm:text-base">
          {item.category}
        </h3>
      </div>

    </article>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function WhyChoosePDS() {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);
  const pausedRef = useRef(false);

  const [unmutedId, setUnmutedId] = useState(null);

  const toggleMute = (id) => {
    setUnmutedId((previous) =>
      previous === id ? null : id
    );
  };

  // CONTINUOUS INFINITE SLIDER
  useEffect(() => {
    let animationFrame;

    const speed = 40;

    const animate = (time) => {
      const track = trackRef.current;
      const firstSet = firstSetRef.current;

      if (!track || !firstSet) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(
        (time - lastTimeRef.current) / 1000,
        0.05
      );

      lastTimeRef.current = time;

      if (!pausedRef.current) {
        positionRef.current += speed * delta;

        const groupWidth = firstSet.offsetWidth + 16;

        if (groupWidth > 0) {
          positionRef.current %= groupWidth;
        }

        track.style.transform =
          `translate3d(${-positionRef.current}px,0,0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="why-pds"
      className="w-full overflow-hidden bg-[#FDFBF6] py-12 sm:py-16"
    >

      {/* SECTION HEADING */}
      <div className="mx-auto mb-9 max-w-[1440px] px-5 text-center sm:px-8 lg:px-10">

        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#168044]">
          WHY CHOOSE PDS
        </p>

        <h2 className="font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-tight text-[#053D2D]">
          More than a course, it's a creative community
        </h2>

        <p className="mx-auto mt-4 max-w-[700px] text-sm leading-relaxed text-[#60746A] sm:text-base">
          Learn from real experiences, professional equipment
          and hands-on creative training.
        </p>

      </div>

      {/* CONTINUOUS MOVING VIDEOS */}
      <div
        className="w-full overflow-hidden"
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
          if (!event.currentTarget.contains(event.relatedTarget)) {
            pausedRef.current = false;
          }
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-4 will-change-transform"
        >

          {/* FIRST SET */}
          <div
            ref={firstSetRef}
            className="flex shrink-0 gap-4"
          >
            {videos.map((item) => (
              <VideoCard
                key={`first-${item.id}`}
                item={item}
                muted={unmutedId !== item.id}
                onToggleMute={toggleMute}
              />
            ))}
          </div>

          {/* DUPLICATE SET FOR INFINITE LOOP */}
          <div
            className="flex shrink-0 gap-4"
            aria-hidden="true"
          >
            {videos.map((item) => (
              <VideoCard
                key={`second-${item.id}`}
                item={item}
                muted={unmutedId !== item.id}
                onToggleMute={toggleMute}
              />
            ))}
          </div>

        </div>
      </div>

      {/* BOTTOM INFORMATION */}
      <div className="mx-auto mt-5 flex max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <p className="text-xs text-[#60746A]">
          Explore the creative world of PDS Photography Academy
        </p>

        <span className="text-xs font-bold text-[#168044]">
          07 Videos
        </span>
      </div>

    </section>
  );
}
