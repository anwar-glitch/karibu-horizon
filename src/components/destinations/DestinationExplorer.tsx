
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiSearch, FiMapPin, FiArrowUpRight, FiX } from "react-icons/fi";


const destinations = [
  {
    name: "Serengeti National Park",
    slug: "serengeti",
    region: "Mara",
    category: "Wildlife",
    description: "Discover endless plains and the spectacular Great Migration.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Zanzibar",
    slug: "zanzibar",
    region: "Zanzibar",
    category: "Beaches",
    description: "Explore turquoise waters, historic streets and island culture.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Mount Kilimanjaro",
    slug: "mount-kilimanjaro",
    region: "Kilimanjaro",
    category: "Mountains",
    description: "Stand before Africa's highest mountain and its magnificent peaks.",
    image:
      "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Ngorongoro Crater",
    slug: "ngorongoro",
    region: "Arusha",
    category: "Wildlife",
    description: "Explore a remarkable volcanic landscape rich in wildlife.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Lake Manyara",
    slug: "lake-manyara",
    region: "Manyara Region",
    category: "Wildlife & Nature",
    description:
      "Lake Manyara is a beautiful destination known for its diverse landscapes, groundwater forests, birdlife and wildlife. Its scenery makes it a memorable stop on a northern Tanzania journey.",
    image:
      "https://plus.unsplash.com/premium_photo-1661823210066-614c08980654?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Tarangire National Park",
    slug: "tarangire",
    region: "Manyara Region",
    category: "Wildlife & Safari",
    description:
      "Tarangire is known for its ancient baobab trees, large elephant herds and beautiful savannah landscapes. It is an important destination in Tanzania's northern safari circuit.",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85",
  },

];

const categories = ["All", "Wildlife", "Beaches", "Mountains"];
const regions = ["All regions", ...new Set(destinations.map((destination) => destination.region))];


export default function DestinationExplorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("All regions");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        `${destination.name} ${destination.region}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || destination.category === category;

      const matchesRegion =
        region === "All regions" || destination.region === region;

      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [search, category, region]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setRegion("All regions");
  };

  return (
    <section
      id="destination-directory"
      className="bg-[#F8F7F2] py-24"
    >
      <div className="container-custom">

        {/* Editorial heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
            THE DESTINATION COLLECTION
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl lg:text-5xl">
            Find your next
            <span className="text-[#174C38]"> somewhere.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#707A73] sm:text-base">
            Explore extraordinary places across Tanzania.
            From iconic national parks to peaceful coastal
            escapes, find a destination that speaks to you.
          </p>
        </div>

        {/* Search and region filter */}
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_240px]">

          <div className="flex items-center gap-3 rounded-xl border border-[#E7E4DA] bg-white px-5 py-4">
            <FiSearch size={20} className="text-[#707A73]" />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search destinations or regions..."
              className="w-full bg-transparent text-sm text-[#242A27] outline-none placeholder:text-[#9A9F9B]"
            />
          </div>

          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            className="rounded-xl border border-[#E7E4DA] bg-white px-5 py-4 text-sm text-[#242A27] outline-none focus:border-[#174C38]"
          >
            {regions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                category === item
                  ? "bg-[#174C38] text-white"
                  : "border border-[#E7E4DA] bg-white text-[#707A73] hover:border-[#174C38] hover:text-[#174C38]"
              }`}
            >
              {item}
            </button>
          ))}

          {(search || category !== "All" || region !== "All regions") && (
            <button
              onClick={clearFilters}
              className="ml-auto inline-flex items-center gap-2 text-xs font-semibold text-[#707A73] hover:text-[#174C38]"
            >
              <FiX size={15} />
              Clear filters
            </button>
          )}
        </div>

        {/* Results heading */}
        <div className="mb-6 flex items-center justify-between border-b border-[#E7E4DA] pb-4">
          <p className="text-sm font-semibold text-[#242A27]">
            Discover places
          </p>

          <p className="text-xs text-[#707A73]">
            {filteredDestinations.length} destinations
          </p>
        </div>

        {/* Destination editorial cards */}
        {filteredDestinations.length > 0 ? (
          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination, index) => (
             <Link
                href={`/destinations/${destination.slug}`}
                key={destination.name}
                className="group"
            >
                <div className="relative h-[300px] overflow-hidden rounded-xl bg-[#E7E4DA]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${destination.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold tracking-widest text-[#174C38]">
                    {destination.category}
                  </span>

                  <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium text-white">
                    <FiMapPin size={14} />
                    {destination.region}, Tanzania
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold text-[#B78745]">
                      DESTINATION 0{index + 1}
                    </p>

                    <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[#242A27] transition group-hover:text-[#174C38]">
                      {destination.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#707A73]">
                      {destination.description}
                    </p>
                  </div>

                  <span className="mt-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7E4DA] text-[#174C38] transition group-hover:bg-[#174C38] group-hover:text-white">
                    <FiArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D5D1C6] py-20 text-center">
            <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[#242A27]">
              No destinations found
            </h3>

            <p className="mt-3 text-sm text-[#707A73]">
              Try another search or change your filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-full bg-[#174C38] px-6 py-3 text-sm font-semibold text-white"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
