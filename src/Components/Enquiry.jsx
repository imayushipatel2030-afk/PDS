
import { useState } from "react";

const courseOptions = [
  "Photography",
  "Cinematography",
  "Video Editing",
  "Content Creation",
];

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    course: "",
    question: "",
    consent: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const mobile = form.mobile.trim();
    const city = form.city.trim();

    if (!name || !mobile || !city || !form.course) {
      setError("Please fill in all required details.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!form.consent) {
      setError("Please agree before continuing to WhatsApp.");
      return;
    }

    const message = [
      "Hello PDS Photography Academy!",
      "",
      "I would like to enquire about admission.",
      "",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `City: ${city}`,
      `Interested Course: ${form.course}`,
      form.question.trim()
        ? `Question: ${form.question.trim()}`
        : "",
      "",
      "Please share course details and admission information.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href =
      "https://wa.me/917389400519?text=" +
      encodeURIComponent(message);
  };

  const inputClass =
    "w-full rounded-lg border border-white/20 bg-white " +
    "px-4 py-3 text-sm text-[#053D2D] outline-none " +
    "placeholder:text-[#8A9C94] " +
    "focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/30";

  const labelClass =
    "mb-1.5 block text-[13px] font-semibold text-white";

  return (
    <section
      id="enquiry"
      className="w-full bg-[#FDFBF6] px-4 py-6 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[22px] bg-[#064B35] text-white shadow-lg">

        <div className="grid gap-8 px-6 py-7 sm:px-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-12 lg:py-9">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">

            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FFD600]">
              LET'S CREATE YOUR NEXT CHAPTER
            </p>

            <h1 className="font-serif text-[32px] font-bold leading-[1.2] text-white sm:text-[38px] lg:text-[42px]">
              Your Creative Future.
              <span className="mt-1 block">
                Your First Step.
              </span>
            </h1>

            <p className="mt-4 max-w-[480px] text-[13px] leading-6 text-white/85 sm:text-sm">
              Tell us what you want to learn. Share your
              details and connect directly with PDS
              Photography Academy through WhatsApp.
            </p>

            <div className="mt-6 border-t border-white/20 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-wide text-white/80">
                CALL / WHATSAPP
              </p>

              <a
                href="tel:+917389400519"
                className="mt-1 inline-block font-serif text-[24px] font-bold text-[#FFD600] transition hover:text-white"
              >
                +91 73894 00519
              </a>

              <p className="mt-4 font-serif text-[18px] font-semibold">
                Indore, Madhya Pradesh
              </p>

              <p className="mt-1 text-[13px] text-white/75">
                Contact the academy for the full address.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid content-start grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2"
          >

            {/* NAME */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
                className={inputClass}
              />
            </div>

            {/* MOBILE */}
            <div>
              <label htmlFor="mobile" className={labelClass}>
                Mobile Number *
              </label>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={form.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile"
                required
                className={inputClass}
              />
            </div>

            {/* CITY */}
            <div>
              <label htmlFor="city" className={labelClass}>
                City *
              </label>

              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                placeholder="Your city"
                required
                className={inputClass}
              />
            </div>

            {/* COURSE */}
            <div>
              <label htmlFor="course" className={labelClass}>
                Interested Course *
              </label>

              <select
                id="course"
                name="course"
                value={form.course}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select a course</option>

                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* QUESTION */}
            <div className="sm:col-span-2">
              <label htmlFor="question" className={labelClass}>
                Your Question (Optional)
              </label>

              <textarea
                id="question"
                name="question"
                rows={2}
                value={form.question}
                onChange={handleChange}
                placeholder="Tell us about your learning goals..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* CONSENT */}
            <label className="flex cursor-pointer items-start gap-3 py-1 sm:col-span-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#FFD600]"
              />

              <span className="text-[12px] leading-5 text-white/85">
                I agree to share these details with PDS
                Photography Academy through WhatsApp
                for my course enquiry.
              </span>
            </label>

            {/* ERROR */}
            {error && (
              <p
                role="alert"
                className="text-xs text-[#FFE3A3] sm:col-span-2"
              >
                {error}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="rounded-xl bg-[#FFD600] px-6 py-3.5 text-[13px] font-extrabold text-[#053D2D] transition hover:bg-[#F1CB00] sm:col-span-2"
            >
              Prepare WhatsApp Enquiry ↗
            </button>

            <p className="text-center text-[11px] leading-5 text-white/75 sm:col-span-2">
              Your enquiry is sent only after you confirm
              the message in WhatsApp.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}
