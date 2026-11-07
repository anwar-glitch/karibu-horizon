"use client";

import Link from "next/link";
import { useState } from "react";
import { destinations, destinations as initialDestinations } from "../../../data/destinations";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiMapPin,
  FiPlus,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";

export default function AdminDestinationsPage() {
  const [destinationList, setDestinationList] = useState(initialDestinations);

  function handleDelete(slug: string, name: string) {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${name}" from this table?`
    );

    if (!confirmed) return;

    setDestinationList((current) =>
      current.filter((destination) => destination.slug !== slug)
    );
  }
  return (
    <div className="min-h-screen bg-[#F5F6F2] text-[#242A27]">
      {/* Header */}
      <header className="border-b border-[#E5E8E1] bg-white px-5 py-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="mb-3 inline-flex items-center gap-2 text-sm text-[#707A73] transition hover:text-[#174C38]"
            >
              <FiArrowLeft size={16} />
              Back to Dashboard
            </Link>

            <h1 className="text-2xl font-bold sm:text-3xl">
              Destinations
            </h1>

            <p className="mt-1 text-sm text-[#707A73]">
              Manage the places featured on Karibu Horizon.
            </p>
          </div>

          <Link
  href="/admin/destinations/new"
  className="inline-flex items-center gap-2 rounded-lg bg-[#174C38] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#103A2A]"
>
  <FiPlus />
  Add Destination
</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 py-7 sm:px-8 sm:py-9">
        {/* Summary */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#707A73]">
                Total Destinations
              </p>

              <span className="rounded-xl bg-[#EEF3ED] p-2.5 text-[#174C38]">
                <FiMapPin size={19} />
              </span>
            </div>

            <p className="mt-4 text-3xl font-bold">
              {destinationList.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-5">
            <p className="text-sm font-medium text-[#707A73]">
              Categories
            </p>

            <p className="mt-4 text-3xl font-bold">
              {new Set(destinations.map((destination) => destination.category)).size}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-5">
            <p className="text-sm font-medium text-[#707A73]">
              Current Data Source
            </p>

            <p className="mt-4 text-lg font-bold text-[#174C38]">
              Local TypeScript
            </p>

            <p className="mt-1 text-xs text-[#8A918B]">
              Supabase connection comes later
            </p>
          </div>
        </section>

        {/* Destination Table */}
        <section className="overflow-hidden rounded-2xl border border-[#E5E8E1] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E8E1] px-5 py-5">
            <div>
              <h2 className="text-lg font-bold">All Destinations</h2>

              <p className="mt-1 text-sm text-[#707A73]">
                Your current destination listings.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-[#E5E8E1] px-3 py-2 text-sm text-[#929991]">
              <FiSearch size={16} />
              <span>Search coming soon</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead className="bg-[#F7F8F5]">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#707A73]">
                    Destination
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#707A73]">
                    Region
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#707A73]">
                    Category
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#707A73]">
                    Status
                  </th>

                  <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#707A73]">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E5E8E1]">
                {destinations.map((destination) => (
                  <tr
                    key={destination.slug}
                    className="transition hover:bg-[#FAFBF8]"
                  >
                    {/* Destination */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={destination.heroImage}
                          alt={destination.name}
                          className="h-14 w-20 shrink-0 rounded-lg object-cover"
                        />

                        <div>
                          <p className="font-semibold text-[#242A27]">
                            {destination.name}
                          </p>

                          <p className="mt-1 text-xs text-[#8A918B]">
                            /destinations/{destination.slug}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Region */}
                    <td className="px-5 py-4 text-sm text-[#626B64]">
                      {destination.region}
                    </td>

                    {/* Category */}
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full bg-[#EEF3ED] px-3 py-1.5 text-xs font-medium text-[#174C38]">
                        {destination.category}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#39734F]">
                        <span className="h-2 w-2 rounded-full bg-[#39734F]" />
                        Published
                      </span>
                    </td>

                    {/* Action */}
                    
{/* Action */}
    <td className="px-5 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
            <Link
                href={`/admin/destinations/${destination.slug}/edit`}
                className="inline-flex items-center rounded-lg border border-[#E5E8E1] px-3 py-2 text-sm font-medium text-[#174C38] transition hover:border-[#174C38] hover:bg-[#F2F5F0]"
                >
                Edit
            </Link>

            <button
                type="button"
                onClick={() => handleDelete(destination.slug, destination.name)}
                className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:border-red-400 hover:bg-red-50"
                >
                <FiTrash2 size={15} />
                Delete
            </button>

            <Link
                href={`/destinations/${destination.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E5E8E1] px-3 py-2 text-sm font-medium text-[#174C38] transition hover:border-[#174C38] hover:bg-[#F2F5F0]"
                >
                View
            <FiArrowUpRight size={15} />
            </Link>
        </div>
    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="border-t border-[#E5E8E1] px-5 py-4">
            <p className="text-xs text-[#8A918B]">
              Showing {destinations.length} destinations from your existing data.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}