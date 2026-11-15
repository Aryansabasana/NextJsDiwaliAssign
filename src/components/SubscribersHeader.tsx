
"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Plus,
  MoreVertical,
  X,
} from "lucide-react";

export default function SubscribersHeader() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full space-y-4">

      {/* MAIN HEADER */}
      <div className="flex items-center justify-between gap-5">

        {/* PAGE TITLE */}
        <div>
          <h1 className="text-[28px] font-bold tracking-tight text-[#151b2b]">
            Subscribers
          </h1>
        </div>

        {/* HEADER ACTIONS */}
        <div className="flex items-center gap-2">

          {/* SEARCH */}
          <div className="flex items-center gap-2 border border-[#e3e7ed] rounded-lg px-3 h-10 w-[190px] focus-within:border-blue-400">
            <Search size={18} className="text-gray-500 shrink-0" />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
            />
          </div>

          {/* FILTER BUTTON */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 border border-[#e3e7ed] rounded-lg px-3 h-10 text-sm font-medium text-[#344054] hover:bg-gray-50 transition"
          >
            Filters
            <SlidersHorizontal size={17} />
          </button>

          {/* ASSIGN SUBSCRIPTION */}
          <button
            className="flex items-center gap-2 bg-[#1685f8] hover:bg-[#0875e5] text-white rounded-lg px-4 h-10 text-sm font-medium transition"
          >
            Assign Subscription
            <Plus size={18} />
          </button>

          {/* MORE OPTIONS */}
          <button
            className="h-10 w-10 border border-[#e3e7ed] rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
            aria-label="More options"
          >
            <MoreVertical size={19} />
          </button>

        </div>
      </div>

      {/* FILTER PANEL */}
      {showFilters && (
        <div className="flex items-center gap-3 p-3 border border-[#e3e7ed] rounded-lg bg-gray-50 text-sm">
          <span className="font-medium text-gray-700">
            Filter options
          </span>

          <select className="border rounded-md px-3 py-2 bg-white">
            <option>All Products</option>
            <option>Starter</option>
            <option>Professional</option>
            <option>Enterprise</option>
          </select>

          <select className="border rounded-md px-3 py-2 bg-white">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Error</option>
          </select>
        </div>
      )}

      {/* ACTIVE FILTER CHIPS */}
      <div className="flex items-center gap-2 flex-wrap">

        {/* PRODUCT FILTER */}
        <div className="flex items-center gap-1.5 border border-[#d8dde5] bg-[#f5f6f8] rounded px-3 py-1 text-[13px]">
          <span className="text-gray-500">Product</span>
          <span className="font-medium text-[#344054]">
            Starter, Professional, Enterprise
          </span>
          <X size={13} className="text-gray-400 cursor-pointer" />
        </div>

        {/* CURRENCY FILTER */}
        <div className="flex items-center gap-1.5 border border-[#d8dde5] bg-[#f5f6f8] rounded px-3 py-1 text-[13px]">
          <span className="text-gray-500">Currency</span>
          <span className="font-medium text-[#344054]">
            USD
          </span>
          <X size={13} className="text-gray-400 cursor-pointer" />
        </div>

        {/* PAYMENT METHOD FILTER */}
        <div className="flex items-center gap-1.5 border border-[#d8dde5] bg-[#f5f6f8] rounded px-3 py-1 text-[13px]">
          <span className="text-gray-500">Payment Method</span>
          <span className="font-medium text-[#344054]">
            Card
          </span>
          <X size={13} className="text-gray-400 cursor-pointer" />
        </div>

      </div>

    </div>
  );
}
