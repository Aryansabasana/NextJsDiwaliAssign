
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Building2,
  UserRound,
  Handshake,
  Package,
  CreditCard,
  Receipt,
  Wallet,
  ChartNoAxesCombined,
  Settings,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  PanelLeftClose,
} from "lucide-react";

export default function Sidebar() {
  const [customersOpen, setCustomersOpen] = useState(true);

  return (
    <aside className="w-[250px] min-h-screen bg-[#171717] text-white flex flex-col shrink-0">

      {/* BRAND */}
      <div className="h-[76px] flex items-center px-7 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center font-bold text-xl">
            R
          </div>

          <span className="text-xl font-semibold tracking-wide">
            Received
          </span>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 px-4 py-6">

        <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 font-semibold px-3 mb-4">
          Workspace
        </p>

        <nav className="space-y-1">

          {/* DASHBOARD */}
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>

          {/* CUSTOMERS */}
          <button
            onClick={() => setCustomersOpen(!customersOpen)}
            className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-300 hover:bg-white/5 transition"
          >
            <div className="flex items-center gap-3">
              <Users size={18} />
              <span>Customers</span>
            </div>

            {customersOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>

          {/* CUSTOMER SUBMENU */}
          {customersOpen && (
            <div className="ml-5 pl-4 border-l border-white/10 space-y-1">

              <Link
                href="/enterprises"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition text-[13px]"
              >
                <Building2 size={16} />
                Enterprises
              </Link>

              <Link
                href="/subscribers"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-500 text-white text-[13px] font-medium shadow-lg shadow-blue-500/10"
              >
                <UserRound size={16} />
                Subscribers
              </Link>

              <Link
                href="/partners"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition text-[13px]"
              >
                <Handshake size={16} />
                Partners
              </Link>

            </div>
          )}

          {/* PRODUCTS */}
          <Link
            href="/products"
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <Package size={18} />
            <span>Products & Pricing</span>
          </Link>

          {/* SUBSCRIPTIONS */}
          <Link
            href="/subscriptions"
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <CreditCard size={18} />
            <span>Subscriptions</span>
          </Link>

          {/* INVOICES */}
          <Link
            href="/invoices"
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <Receipt size={18} />
            <span>Invoices</span>
          </Link>

          {/* PAYMENTS */}
          <Link
            href="/payments"
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <Wallet size={18} />
            <span>Payments</span>
          </Link>

          {/* ANALYTICS */}
          <Link
            href="/analytics"
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <ChartNoAxesCombined size={18} />
            <span>Analytics</span>
          </Link>

        </nav>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="px-4 py-5 border-t border-white/10 space-y-1">

        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>

        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition">
          <HelpCircle size={18} />
          <span>Help & Support</span>
        </button>

      </div>

      {/* USER PROFILE */}
      <div className="px-5 py-4 border-t border-white/10 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold">
          A
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">Admin User</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>

        <PanelLeftClose size={18} className="text-gray-500" />
      </div>

    </aside>
  );
}
