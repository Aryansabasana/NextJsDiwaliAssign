
import {
  Users,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Activity,
  RefreshCw,
} from "lucide-react";

export default function StatsCards() {
  return (
    <section className="grid grid-cols-7 gap-3 w-full">

      {/* TOTAL SUBSCRIBERS */}
      <div className="bg-white border border-[#e3e7ed] rounded-lg p-4 shadow-sm">
        <p className="text-[13px] font-semibold text-[#151b2b]">
          Total Subscribers
        </p>

        <h2 className="text-[22px] text-[#526078] mt-1">
          3,068
        </h2>

        <p className="text-xs text-green-600 flex items-center gap-1">
          <TrendingUp size={13} />
          21% MoM
        </p>
      </div>

      {/* ARR AND MRR */}
      <div className="col-span-2 bg-white border border-[#e3e7ed] rounded-lg p-4 shadow-sm">

        <div className="grid grid-cols-2 divide-x divide-[#e3e7ed]">

          <div className="pr-3">
            <p className="text-[13px] font-semibold text-[#151b2b]">
              ARR
            </p>

            <h2 className="text-[20px] text-[#526078] mt-1">
              $1,200,109
            </h2>

            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp size={13} />
              13% YoY
            </p>
          </div>

          <div className="pl-3">
            <p className="text-[13px] font-semibold text-[#151b2b]">
              MRR
            </p>

            <h2 className="text-[20px] text-[#526078] mt-1">
              $132,346
            </h2>

            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp size={13} />
              4% MoM
            </p>
          </div>

        </div>
      </div>

      {/* AVERAGE ARR */}
      <div className="bg-white border border-[#e3e7ed] rounded-lg p-4 shadow-sm">

        <p className="text-[13px] font-semibold text-[#151b2b]">
          Avg. ARR per Subscriber
        </p>

        <h2 className="text-[22px] text-[#526078] mt-1">
          $4,250
        </h2>

        <p className="text-xs text-green-600 flex items-center gap-1">
          <TrendingUp size={13} />
          9% MoM
        </p>
      </div>

      {/* PAYMENTS */}
      <div className="bg-white border border-[#e3e7ed] rounded-lg p-4 shadow-sm">

        <p className="text-[13px] font-semibold text-[#151b2b]">
          Payments
        </p>

        <div className="flex items-center mt-2">

          <div className="flex-1">
            <h2 className="text-[20px] text-[#526078]">
              $82,932
            </h2>

            <p className="text-[11px] text-gray-400">
              207 Succeeded
            </p>
          </div>

          <div className="border-l border-[#e3e7ed] pl-3">
            <h2 className="text-[20px] text-[#526078]">
              $932
            </h2>

            <p className="text-[11px] text-gray-400">
              2 Failed
            </p>
          </div>

        </div>
      </div>

      {/* CHURN RATE */}
      <div className="bg-white border border-[#e3e7ed] rounded-lg p-4 shadow-sm">

        <div className="flex justify-between">
          <p className="text-[13px] font-semibold text-[#151b2b]">
            Churn Rate
          </p>
          <Activity size={16} className="text-gray-400" />
        </div>

        <h2 className="text-[22px] text-[#526078] mt-1">
          +3.6%
        </h2>

        <div className="flex justify-between items-center">
          <p className="text-xs text-red-500 flex items-center gap-1">
            <TrendingUp size={13} />
            2% YoY
          </p>

          <div className="w-2 h-10 bg-gray-200 rounded-full flex items-end">
            <div className="w-full h-2 bg-red-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* RENEWALS RATE */}
      <div className="bg-white border border-[#e3e7ed] rounded-lg p-4 shadow-sm">

        <div className="flex justify-between">
          <p className="text-[13px] font-semibold text-[#151b2b]">
            Renewals Rate
          </p>
          <RefreshCw size={16} className="text-gray-400" />
        </div>

        <h2 className="text-[22px] text-[#526078] mt-1">
          +96.4%
        </h2>

        <div className="flex justify-between items-center">
          <p className="text-xs text-green-600 flex items-center gap-1">
            <TrendingUp size={13} />
            31% YoY
          </p>

          <div className="w-2 h-10 bg-gray-200 rounded-full flex items-end">
            <div className="w-full h-9 bg-green-500 rounded-full" />
          </div>
        </div>
      </div>

    </section>
  );
}
