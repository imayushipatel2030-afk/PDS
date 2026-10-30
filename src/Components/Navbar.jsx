
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ASSETS
import pdsLogo from "../assets/logoimage.jpg";
import instagramLogo from "../assets/instagramlogo.jpg";
import whatsappLogo from "../assets/whatsapplogo.png";

// NAVBAR LINKS
const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Courses", href: "/courses", id: "courses" },
  {
    name: "Student Work",
    href: "/student-work",
    id: "student-work",
  },
  {
    name: "Why PDS?",
    href: "/#why-pds",
    id: "why-pds",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/pds_photography_academy/",
    image: instagramLogo,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917389400519",
    image: whatsappLogo,
  },
];

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const isEnquiryPage = location.pathname === "/enquiry";

  // CLOSE MOBILE MENU ON PAGE CHANGE
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // SCROLL TO SECTION
  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
      return;
    }

    const sectionId = location.hash.replace("#", "");

    if (sectionId) {
      const timer = setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  // SCROLL EFFECT + ACTIVE LINK
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      if (location.pathname === "/student-work") {
        setActiveLink("Student Work");
        return;
      }

      if (
        location.pathname === "/courses" ||
        location.pathname === "/coursespage" ||
        location.pathname.startsWith("/courses/")
      ) {
        setActiveLink("Courses");
        return;
      }

      if (location.pathname !== "/") {
        setActiveLink("");
        return;
      }

      let current = "Home";

      navLinks
        .filter((link) => link.href.startsWith("/#"))
        .forEach((link) => {
          const section = document.getElementById(link.id);

          if (
            section &&
            section.getBoundingClientRect().top <= 150
          ) {
            current = link.name;
          }
        });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, location.hash]);

  // CLOSE MOBILE MENU ON ESCAPE
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#E7EDE5] bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled
          ? "shadow-lg shadow-black/5"
          : "shadow-sm"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[88px] lg:px-10">

        {/* PDS LOGO */}
        <Link
          to="/#home"
          onClick={() => closeMenu("Home")}
          className="flex shrink-0 items-center"
          aria-label="PDS Photography Academy Home"
        >
          <img
            src={pdsLogo}
            alt="PDS Photography Academy"
            className="h-[52px] w-auto max-w-[160px] object-contain sm:h-[60px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive =
              !isEnquiryPage &&
              activeLink === link.name;

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => closeMenu(link.name)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative whitespace-nowrap py-3 text-[11px] font-bold uppercase tracking-[0.07em] transition-colors duration-200 xl:text-xs ${
                  isActive
                    ? "text-[#006B43]"
                    : "text-[#183C30] hover:text-[#006B43]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-1 left-0 h-[3px] rounded-full bg-[#FFD600] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP SOCIAL LOGOS + ENQUIRY */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">

          {/* INSTAGRAM AND WHATSAPP */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit PDS on ${social.name}`}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE9DF] bg-[#F6FAF6] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD600] hover:shadow-md"
              >
                <img
                  src={social.image}
                  alt={social.name}
                  className="h-full w-full object-contain"
                />
              </a>
            ))}
          </div>

          {/* ENQUIRE NOW */}
          <Link
            to="/enquiry"
            onClick={() => setMenuOpen(false)}
            className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
              isEnquiryPage
                ? "bg-[#FFD600] text-[#053D2D]"
                : "bg-[#064B35] text-white hover:bg-[#08764D]"
            }`}
          >
            Enquire Now
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="pds-mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#DDE9DF] bg-[#F7FAF5] lg:hidden"
        >
          <span
            className={`h-[2px] w-5 rounded bg-[#064B35] transition-transform ${
              menuOpen
                ? "translate-y-[7px] rotate-45"
                : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded bg-[#064B35] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded bg-[#064B35] transition-transform ${
              menuOpen
                ? "-translate-y-[7px] -rotate-45"
                : ""
            }`}
          />
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        id="pds-mobile-navigation"
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#E7EDE5] bg-white shadow-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[calc(100dvh-76px)] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto px-5 py-5 sm:px-8">

          {/* MOBILE LINKS */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                !isEnquiryPage &&
                activeLink === link.name;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => closeMenu(link.name)}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#EDF5E9] text-[#006B43]"
                      : "text-[#183C30] hover:bg-[#F4F7F2]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* MOBILE SOCIAL LOGOS */}
          <div className="mt-5 flex items-center gap-3 border-t border-[#E7EDE5] pt-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit PDS on ${social.name}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCE9DF] bg-[#F6FAF6] p-2.5"
              >
                <img
                  src={social.image}
                  alt={social.name}
                  className="h-full w-full object-contain"
                />
              </a>
            ))}
          </div>

          {/* MOBILE ENQUIRY BUTTON */}
          <Link
            to="/enquiry"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className={`mt-5 flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold ${
              isEnquiryPage
                ? "bg-[#FFD600] text-[#053D2D]"
                : "bg-[#064B35] text-white"
            }`}
          >
            Enquire Now
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* MOBILE BACKDROP */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
          className="fixed left-0 top-full -z-10 h-screen w-full bg-black/20 lg:hidden"
        />
      )}
    </header>
  );
}
