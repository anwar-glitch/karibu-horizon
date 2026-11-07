import Link from "next/link";
import {
  FiGrid,
  FiMapPin,
  FiBookOpen,
  FiCompass,
  FiImage,
  FiSettings,
  FiEye,
  FiPlus,
  FiArrowUpRight,
  FiClock,
  FiMenu,
} from "react-icons/fi";

const navigation = [
  { label: "Overview", href: "/admin", icon: FiGrid, active: true },
  { label: "Destinations", href: "/admin/destinations", icon: FiMapPin },
  { label: "Travel Guides", href: "/admin/travel-guides", icon: FiBookOpen },
  { label: "Experiences", href: "/admin/experiences", icon: FiCompass },
  { label: "Media Library", href: "/admin/media", icon: FiImage },
  { label: "Settings", href: "/admin/settings", icon: FiSettings },
];

const stats = [
  {
    label: "Destinations",
    value: "6",
    note: "Published on website",
    icon: FiMapPin,
  },
  {
    label: "Travel Guides",
    value: "6",
    note: "Articles available",
    icon: FiBookOpen,
  },
  {
    label: "Experiences",
    value: "—",
    note: "Coming soon",
    icon: FiCompass,
  },
  {
    label: "Media Files",
    value: "—",
    note: "Coming soon",
    icon: FiImage,
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F2] text-[#242A27]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-[#E5E8E1] bg-white md:flex md:flex-col">
          <div className="border-b border-[#E5E8E1] px-6 py-6">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-[#174C38]"
            >
              Karibu Horizon
            </Link>

            <p className="mt-1 text-xs tracking-wide text-[#7B827C]">
              ADMINISTRATION
            </p>
          </div>

          <nav className="flex-1 space-y-1 px-4 py-6">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    item.active
                      ? "bg-[#174C38] text-white"
                      : "text-[#626B64] hover:bg-[#F2F5F0] hover:text-[#174C38]"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-[#E5E8E1] p-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-[#626B64] hover:bg-[#F2F5F0]"
            >
              <FiEye size={18} />
              View Website
              <FiArrowUpRight className="ml-auto" size={16} />
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-[#E5E8E1] bg-white px-5 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Menu"
                className="rounded-lg p-2 text-[#626B64] hover:bg-[#F2F5F0] md:hidden"
              >
                <FiMenu size={20} />
              </button>

              <div>
                <p className="text-sm text-[#7B827C]">
                  Karibu Horizon / Admin
                </p>

                <h1 className="mt-1 text-xl font-bold sm:text-2xl">
                  Dashboard Overview
                </h1>
              </div>
            </div>

            <Link
              href="/"
              target="_blank"
              className="hidden items-center gap-2 rounded-xl border border-[#DDE3DA] px-4 py-2.5 text-sm font-medium text-[#174C38] transition hover:bg-[#F2F5F0] sm:flex"
            >
              <FiEye size={16} />
              View Website
            </Link>
          </header>

          {/* Dashboard Body */}
          <div className="px-5 py-7 sm:px-8 sm:py-9">
            {/* Welcome Section */}
            <section className="mb-8 flex flex-col justify-between gap-5 rounded-2xl bg-[#174C38] p-6 text-white sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-sm font-medium text-[#D8E5D9]">
                  Welcome back
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Manage your travel stories.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#E0E9E0]">
                  Keep destinations, travel guides, and experiences up to date
                  across Karibu Horizon.
                </p>
              </div>

              <Link
                href="/admin/destinations"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D4A45D] px-5 py-3 text-sm font-semibold text-[#24352B] transition hover:bg-[#E2B875]"
              >
                <FiPlus size={17} />
                Add Destination
              </Link>
            </section>

            {/* Content Summary */}
            <section>
              <div className="mb-4">
                <h2 className="text-lg font-bold">Content Summary</h2>

                <p className="mt-1 text-sm text-[#7B827C]">
                  A quick look at the content on your platform.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-[#E5E8E1] bg-white p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#687169]">
                          {stat.label}
                        </span>

                        <span className="rounded-xl bg-[#EEF3ED] p-2.5 text-[#174C38]">
                          <Icon size={19} />
                        </span>
                      </div>

                      <p className="mt-5 text-3xl font-bold">{stat.value}</p>

                      <p className="mt-1 text-xs text-[#8A918B]">
                        {stat.note}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Recent Activity and Quick Links */}
            <section className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-3">
              {/* Recent Activity */}
              <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6 xl:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold">Recent Activity</h2>

                    <p className="mt-1 text-sm text-[#7B827C]">
                      Your latest content updates.
                    </p>
                  </div>

                  <FiClock className="text-[#7B827C]" size={20} />
                </div>

                <div className="mt-6 rounded-xl bg-[#F7F8F5] px-4 py-8 text-center">
                  <p className="text-sm font-medium text-[#626B64]">
                    Activity tracking will appear here.
                  </p>

                  <p className="mt-1 text-xs text-[#8A918B]">
                    We’ll connect this section when the database is ready.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6">
                <h2 className="text-lg font-bold">Quick Links</h2>

                <p className="mt-1 text-sm text-[#7B827C]">
                  Jump into content management.
                </p>

                <div className="mt-5 space-y-3">
                  <Link
                    href="/admin/destinations"
                    className="flex items-center justify-between rounded-xl border border-[#E5E8E1] px-4 py-3 text-sm font-medium transition hover:border-[#174C38] hover:bg-[#F7F8F5]"
                  >
                    Manage Destinations
                    <FiArrowUpRight size={16} />
                  </Link>

                  <Link
                    href="/admin/travel-guides"
                    className="flex items-center justify-between rounded-xl border border-[#E5E8E1] px-4 py-3 text-sm font-medium transition hover:border-[#174C38] hover:bg-[#F7F8F5]"
                  >
                    Manage Travel Guides
                    <FiArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Footer */}
            <p className="mt-8 text-center text-xs text-[#929991]">
              Karibu Horizon Admin · Dashboard preview
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}