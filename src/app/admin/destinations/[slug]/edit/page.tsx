
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import { destinations } from "../../../../../data/destinations";

export default function EditDestinationPage() {
  const params = useParams();
  const slug = params.slug as string;

  const destination = destinations.find((item) => item.slug === slug);

  const [formData, setFormData] = useState({
    name: destination?.name ?? "",
    slug: destination?.slug ?? "",
    region: destination?.region ?? "",
    category: destination?.category ?? "",
    tagline: destination?.tagline ?? "",
    description: destination?.description ?? "",
    location: destination?.location ?? "",
    bestTimeToVisit: destination?.bestTimeToVisit ?? "",
    heroImage: destination?.heroImage ?? "",
  });

  const [message, setMessage] = useState("");

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#F8F7F2] p-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Destination not found
        </h1>
        <Link
          href="/admin/destinations"
          className="mt-4 inline-block text-green-800 underline"
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Frontend only for now. Supabase updates will be connected later.
    setMessage(
      "Your changes are ready. Supabase saving will be enabled in a later step."
    );
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100";

  const labelClass = "mb-2 block text-sm font-medium text-gray-700";

  return (
    <div className="min-h-screen bg-[#F8F7F2] p-5 md:p-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/destinations"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-green-800"
        >
          <FiArrowLeft />
          Back to Destinations
        </Link>

        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#174C38]">
            Destination Management
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Edit Destination
          </h1>

          <p className="mt-2 text-gray-600">
            Update the details for {destination.name}.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
        >
          <section>
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
              Basic Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Destination Name *
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="slug" className={labelClass}>
                  URL Slug *
                </label>
                <input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="region" className={labelClass}>
                  Region *
                </label>
                <input
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className={labelClass}>
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select category</option>
                  <option value="National Park">National Park</option>
                  <option value="Beach">Beach</option>
                  <option value="Mountain">Mountain</option>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="tagline" className={labelClass}>
                  Tagline *
                </label>
                <input
                  id="tagline"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
              Destination Details
            </h2>

            <div className="space-y-5">
              <div>
                <label htmlFor="description" className={labelClass}>
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={inputClass}
                  rows={5}
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className={labelClass}>
                  Location *
                </label>
                <input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="bestTimeToVisit" className={labelClass}>
                  Best Time to Visit *
                </label>
                <input
                  id="bestTimeToVisit"
                  name="bestTimeToVisit"
                  value={formData.bestTimeToVisit}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="heroImage" className={labelClass}>
                  Hero Image URL
                </label>
                <input
                  id="heroImage"
                  name="heroImage"
                  value={formData.heroImage}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Paste image URL"
                />
              </div>
            </div>
          </section>

          {message && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              {message}
            </div>
          )}

          <div className="flex flex-wrap justify-end gap-3 border-t border-gray-100 pt-6">
            <Link
              href="/admin/destinations"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-[#174C38] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#103A2A]"
            >
              <FiSave />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
