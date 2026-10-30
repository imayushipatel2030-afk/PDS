
import instagramLogo from "../assets/instagramlogo.jpg";
import whatsappLogo from "../assets/whatsapplogo.png";
import logo from "../assets/logoimage.jpg";

const contact = {
  phone: "+91 73894 00519",
  phoneLink: "+917389400519",
  address: "Indore, Madhya Pradesh",
  instagram:
    "https://www.instagram.com/pds_photography_academy/",
  whatsapp: "https://wa.me/917389400519",
};

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Student Work", href: "#student-work" },
  { label: "Reviews", href: "#reviews" },
];

const courses = [
  "Photography",
  "Cinematography",
  "Video Editing",
  "Content Creation",
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-[#FDFBF6] px-4 py-5 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[20px] bg-[#062D22] text-white shadow-lg">

        {/* MAIN FOOTER */}
        <div
          className="
            grid grid-cols-1 gap-8
            px-6 py-8
            sm:grid-cols-2 sm:px-8
            lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.4fr]
            lg:gap-8 lg:px-10 lg:py-9
          "
        >

          {/* COLUMN 1 - ACADEMY */}
<div>
  <a
    href="/#home"
    className="mb-3 inline-flex items-center gap-3"
  >
    <img
      src={logo}
      alt="PDS Photography Academy"
      className="h-[65px] w-auto max-w-[160px] rounded-lg bg-white p-1 object-contain sm:h-[75px]"
    />
  </a>

  <p className="max-w-[235px] text-[12px] leading-[1.7] text-white/75">
    Learn. Shoot. Edit. Create. Grow.
    Practical photography, cinematography
    and video editing training.
  </p>

  {/* SOCIAL LOGOS */}
  <div className="mt-4 flex items-center gap-3">
    <a
      href={contact.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="PDS Instagram"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-1.5 transition hover:bg-white/20"
    >
      <img
        src={instagramLogo}
        alt="Instagram"
        className="h-full w-full rounded-md object-contain"
      />
    </a>

    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="PDS WhatsApp"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-1.5 transition hover:bg-white/20"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="h-full w-full rounded-md object-contain"
      />
    </a>
  </div>
</div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#FFD600]">
              QUICK LINKS
            </h3>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      text-[13px] font-medium text-white/80
                      transition-colors hover:text-[#FFD600]
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - COURSES */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#FFD600]">
              COURSES
            </h3>

            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="
                      text-[13px] font-medium text-white/80
                      transition-colors hover:text-[#FFD600]
                    "
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 - CONTACT */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#FFD600]">
              CONTACT AND VISIT
            </h3>

            {/* LOCATION */}
            <div className="mb-4 flex items-start gap-3">
              <div
                className="
                  flex h-12 w-12 shrink-0 items-center
                  justify-center rounded-lg
                  border border-white/20 bg-[#14513E]
                  text-xl
                "
              >
                📍
              </div>

              <div>
                <p className="text-[13px] font-medium text-white">
                  Indore, Madhya Pradesh
                </p>

                <p className="mt-1 text-xs leading-relaxed text-white/65">
                  Full address available from the academy.
                </p>
              </div>
            </div>

            {/* PHONE */}
            <a
              href={`tel:${contact.phoneLink}`}
              className="
                mb-3 flex items-center gap-3
                text-[13px] text-white/80
                transition hover:text-[#FFD600]
              "
            >
              <span className="text-[#FFD600]">☎</span>
              {contact.phone}
            </a>

            {/* WHATSAPP */}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                text-[13px] text-white/80
                transition hover:text-[#FFD600]
              "
            >
              <img
                src={whatsappLogo}
                alt=""
                className="h-4 w-4 rounded-sm object-contain"
              />
              WhatsApp the Academy ↗
            </a>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div
          className="
            flex flex-col gap-2
            border-t border-white/15
            px-6 py-3.5 text-center
            sm:flex-row sm:items-center
            sm:justify-between sm:px-8
            lg:px-10
          "
        >
          <p className="text-[11px] text-white/55">
            © {new Date().getFullYear()} PDS Photography Academy.
            All rights reserved.
          </p>

          <p className="text-[11px] text-[#FFD600]/80">
            Learn. Shoot. Edit. Create. Grow.
          </p>
        </div>

      </div>
    </footer>
  );
}
