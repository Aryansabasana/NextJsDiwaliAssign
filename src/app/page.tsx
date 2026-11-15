
import Sidebar from "@/components/Sidebar";
import SubscribersHeader from "@/components/SubscribersHeader";
import StatsCards from "@/components/StatsCards";
import SubscribersTable from "@/components/SubscribersTable";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <section className="flex-1 min-w-0 p-6">

        <div className="w-full space-y-5">

          {/* HEADER */}
          <SubscribersHeader />

          {/* ANALYTICS */}
          <StatsCards />

          {/* SUBSCRIBERS TABLE */}
          <SubscribersTable />

        </div>

      </section>

    </main>
  );
}
