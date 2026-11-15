
"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";

const subscribers = [
  {
    name: "Moment Ltd.",
    email: "tom@moment.com",
    subscription: "Enterprise",
    products: "+1",
    payment: "Mastercard",
    lastFour: "8482",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Active",
    logo: "M",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Globex Inc.",
    email: "Amy@globex.com",
    subscription: "Starter",
    products: "+2",
    payment: "Visa",
    lastFour: "8876",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Error",
    logo: "G",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Hooli Corp.",
    email: "Helena@hooli.com",
    subscription: "Professional",
    products: "+1",
    payment: "Mastercard",
    lastFour: "2132",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Active",
    logo: "H",
    color: "bg-sky-100 text-sky-600",
  },
  {
    name: "Tyme Ltd.",
    email: "michael@tyme.com",
    subscription: "Starter",
    products: "",
    payment: "American Express",
    lastFour: "9986",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Error",
    logo: "T",
    color: "bg-violet-100 text-violet-600",
  },
  {
    name: "Apex Inc.",
    email: "jerry@apex.com",
    subscription: "Professional",
    products: "",
    payment: "Visa",
    lastFour: "4521",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Active",
    logo: "A",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Acme Inc.",
    email: "luc@acme.com",
    subscription: "Enterprise",
    products: "+1",
    payment: "Mastercard",
    lastFour: "8831",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Active",
    logo: "A",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Lakshmi Ltd.",
    email: "rachel@lakshmi.com",
    subscription: "Enterprise",
    products: "+1",
    payment: "Visa",
    lastFour: "7532",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Error",
    logo: "L",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Sovylent Ltd.",
    email: "nick@sovylent.com",
    subscription: "Professional",
    products: "+2",
    payment: "Mastercard",
    lastFour: "1163",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Error",
    logo: "S",
    color: "bg-rose-100 text-rose-600",
  },
  {
    name: "Velhalem Inc.",
    email: "ben@velhalem.com",
    subscription: "Starter",
    products: "",
    payment: "Apple Pay",
    lastFour: "2490",
    nextInvoice: "Apr 1, 2024",
    started: "Jan 26, 2023",
    renewal: "Jan 26, 2025",
    status: "Active",
    logo: "V",
    color: "bg-pink-100 text-pink-600",
  },
];

export default function SubscribersTable() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <section className="w-full overflow-x-auto">

      <table className="w-full min-w-[1100px] border-collapse text-left">

        {/* TABLE HEADER */}
        <thead>
          <tr className="border-b border-[#e3e7ed]">

            {[
              "CUSTOMER",
              "SUBSCRIPTION",
              "PRODUCT",
              "PAYMENT METHOD",
              "NEXT INVOICE ON",
              "STARTED",
              "RENEWAL ON",
              "STATUS",
              "",
            ].map((heading, index) => (
              <th
                key={index}
                className="py-3 pr-3 text-[10px] font-semibold text-[#475467] whitespace-nowrap"
              >
                {heading}
              </th>
            ))}

          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>

          {subscribers.map((subscriber, index) => (
            <tr
              key={subscriber.email}
              className="border-b border-[#e3e7ed] hover:bg-gray-50/70 transition"
            >

              {/* CUSTOMER */}
              <td className="py-3 pr-3">
                <div className="flex items-center gap-3 min-w-[185px]">

                  <div
                    className={`w-10 h-10 shrink-0 rounded-md border border-[#edf0f4] flex items-center justify-center font-bold text-sm ${subscriber.color}`}
                  >
                    {subscriber.logo}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[14px] font-medium text-[#202b3c] whitespace-nowrap">
                      {subscriber.name}
                    </p>

                    <p className="text-[12px] text-[#7b8495] whitespace-nowrap">
                      {subscriber.email}
                    </p>
                  </div>

                </div>
              </td>

              {/* SUBSCRIPTION */}
              <td className="py-3 pr-3 text-[14px] text-[#283244] whitespace-nowrap">
                {subscriber.subscription}
              </td>

              {/* PRODUCT */}
              <td className="py-3 pr-3">
                <div className="flex items-center gap-2 text-[14px] text-[#283244] whitespace-nowrap">
                  Platform

                  {subscriber.products && (
                    <span className="border border-[#d0d5dd] rounded px-1.5 py-0.5 text-[11px] text-[#475467]">
                      {subscriber.products}
                    </span>
                  )}
                </div>
              </td>

              {/* PAYMENT METHOD */}
              <td className="py-3 pr-3">
                <div className="flex items-center gap-2 whitespace-nowrap">

                  <span className="text-[10px] font-bold text-[#344054] border border-[#e3e7ed] rounded px-1.5 py-1">
                    {subscriber.payment === "Mastercard"
                      ? "●🔴"
                      : subscriber.payment === "Visa"
                      ? "VISA"
                      : subscriber.payment === "American Express"
                      ? "AMEX"
                      : "Pay"}
                  </span>

                  <span className="text-[14px] text-[#283244]">
                    •••• {subscriber.lastFour}
                  </span>

                </div>
              </td>

              {/* NEXT INVOICE */}
              <td className="py-3 pr-3 text-[13px] text-[#283244] whitespace-nowrap">
                {subscriber.nextInvoice}
              </td>

              {/* STARTED */}
              <td className="py-3 pr-3 text-[13px] text-[#283244] whitespace-nowrap">
                {subscriber.started}
              </td>

              {/* RENEWAL */}
              <td className="py-3 pr-3 text-[13px] text-[#283244] whitespace-nowrap">
                {subscriber.renewal}
              </td>

              {/* STATUS */}
              <td className="py-3 pr-3">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-[12px] font-medium ${
                    subscriber.status === "Active"
                      ? "bg-[#ecfdf3] text-[#027a48]"
                      : "bg-[#fee4e2] text-[#b42318]"
                  }`}
                >
                  {subscriber.status}
                </span>
              </td>

              {/* ACTION MENU */}
              <td className="py-3 relative">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === index ? null : index)
                  }
                  aria-label={`Actions for ${subscriber.name}`}
                  className="w-8 h-8 flex items-center justify-center rounded-md text-[#344054] hover:bg-gray-100"
                >
                  <MoreVertical size={18} />
                </button>

                {openMenu === index && (
                  <div className="absolute right-2 top-10 z-20 w-36 rounded-lg border border-[#e3e7ed] bg-white shadow-lg p-2">
                    <p className="text-xs font-medium text-gray-500 px-2 py-1">
                      Subscriber actions
                    </p>
                    <button
                      onClick={() => setOpenMenu(null)}
                      className="w-full text-left text-sm px-2 py-2 rounded hover:bg-gray-50"
                    >
                      Close menu
                    </button>
                  </div>
                )}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </section>
  );
}
