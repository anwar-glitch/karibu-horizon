
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    content:
      "Karibu Horizon is a travel discovery platform that helps visitors explore destinations, experiences, and travel information about Tanzania. We respect your privacy and are committed to handling personal information responsibly.",
  },
  {
    title: "2. Information We Collect",
    content:
      "When you browse our website, we may collect basic technical information such as your browser type, device information, and pages visited. If you contact us by email or through a future contact form, we may receive information such as your name, email address, and the message you send.",
  },
  {
    title: "3. How We Use Information",
    content:
      "Information may be used to respond to inquiries, improve our website, understand how visitors use our content, and maintain the security and performance of the platform.",
  },
  {
    title: "4. Cookies and Analytics",
    content:
      "Karibu Horizon may use cookies or analytics tools in the future to understand website usage and improve the visitor experience. If these tools are introduced, this policy will be updated to describe their use.",
  },
  {
    title: "5. Sharing of Information",
    content:
      "We do not sell personal information. Information may be shared with service providers who help operate the website, where required by law, or when necessary to protect the rights and security of the platform.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "Our website may include links to external websites, including travel resources and social media platforms. We are not responsible for the privacy practices or content of those websites. Please review their privacy policies when visiting them.",
  },
  {
    title: "7. Data Security",
    content:
      "We take reasonable steps to protect information. However, no method of transmitting or storing data online can be guaranteed to be completely secure.",
  },
  {
    title: "8. Your Choices",
    content:
      "You may choose not to provide personal information when contacting us. If you have sent us information and would like to ask about it, please contact us using the email address below.",
  },
  {
    title: "9. Updates to This Policy",
    content:
      "We may update this Privacy Policy as Karibu Horizon develops. Any changes will be published on this page with an updated revision date.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-[#F8F7F2]">
      {/* Hero */}
      <section className="px-6 pb-14 pt-24 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#D4A45D]">
          YOUR PRIVACY MATTERS
        </p>

        <h1 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-tight text-[#242A27] md:text-6xl">
          Privacy <span className="text-[#174C38]">Policy.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#707A73]">
          Learn how Karibu Horizon handles information when you
          explore our travel discovery platform.
        </p>

        <p className="mt-5 text-xs text-[#707A73]">
          Last updated: November 3, 2026
        </p>
      </section>

      {/* Policy content */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl border border-[#E7E4DA] bg-white p-7 md:p-12">
          <p className="text-sm leading-8 text-[#707A73]">
            This Privacy Policy describes how Karibu Horizon
            (“we,” “our,” or “us”) may collect, use, and protect
            information when you visit our website.
          </p>

          <div className="mt-10 space-y-9">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[#242A27]">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-8 text-[#707A73]">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8F7F2] p-6">
            <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[#242A27]">
              Contact us about privacy
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#707A73]">
              If you have questions about this policy, you can
              contact us by email.
            </p>

            <a
              href="mailto:hello@karibuhorizon.com"
              className="mt-4 inline-block text-sm font-bold text-[#174C38] transition hover:text-[#D4A45D]"
            >
              dijalu817@gmail.com
            </a>
          </div>

          <div className="mt-8 border-t border-[#E7E4DA] pt-6">
            <Link
              href="/"
              className="text-sm font-bold text-[#174C38] transition hover:text-[#D4A45D]"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
