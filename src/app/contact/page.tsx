
import Link from "next/link";
import {
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="bg-[#F8F7F2]">
      {/* Hero */}
      <section className="px-6 pb-16 pt-24 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#D4A45D]">
          GET IN TOUCH
        </p>

        <h1 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-tight text-[#242A27] md:text-6xl">
          Let&apos;s talk about
          <span className="text-[#174C38]"> Tanzania.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#707A73]">
          Have a question, suggestion, or an idea to share?
          We&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact content */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-2">
        {/* Contact information */}
        <div className="rounded-3xl bg-[#103829] p-8 text-white md:p-10">
          <p className="text-xs font-bold tracking-[0.18em] text-[#D4A45D]">
            CONTACT INFORMATION
          </p>

          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl font-bold">
            We&apos;re here to help.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Whether you&apos;re planning your next adventure or
            simply curious about Tanzania, reach out to us.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D4A45D]">
                <FiMail size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold">Email us</p>
                <a
                  href="mailto:hello@karibuhorizon.com"
                  className="mt-1 block text-sm text-white/65 transition hover:text-[#D4A45D]"
                >
                  dijalu817@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D4A45D]">
                <FiMapPin size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold">Our location</p>
                <p className="mt-1 text-sm text-white/65">
                  Tanzania, East Africa
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6">
            <p className="text-sm text-white/60">
              Discover somewhere extraordinary.
            </p>

            <Link
              href="/destinations"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#D4A45D] transition hover:text-[#E5B975]"
            >
              Explore destinations
              <FiArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Message form design */}
        <div className="rounded-3xl border border-[#E7E4DA] bg-white p-8 md:p-10">
          <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#242A27]">
            Send us a message
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#707A73]">
            Fill in the details below and we&apos;ll get back to you.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#242A27]"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#E7E4DA] bg-[#F8F7F2] px-4 py-3 text-sm outline-none transition focus:border-[#174C38]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#242A27]"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#E7E4DA] bg-[#F8F7F2] px-4 py-3 text-sm outline-none transition focus:border-[#174C38]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-[#242A27]"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is your message about?"
                className="w-full rounded-xl border border-[#E7E4DA] bg-[#F8F7F2] px-4 py-3 text-sm outline-none transition focus:border-[#174C38]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#242A27]"
              >
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-xl border border-[#E7E4DA] bg-[#F8F7F2] px-4 py-3 text-sm outline-none transition focus:border-[#174C38]"
              />
            </div>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#174C38] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#103829]"
            >
              Send message
              <FiArrowUpRight size={17} />
            </button>

            <p className="text-xs leading-5 text-[#707A73]">
              This form is currently a visual frontend design.
              Message delivery will be connected later.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
