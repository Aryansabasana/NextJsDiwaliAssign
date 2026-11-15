
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white">

      {/* Dashboard Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="flex-1 min-w-0 p-8">

        <h1 className="text-3xl font-bold text-[#151b2b]">
          Subscribers
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your customers and subscriptions.
        </p>

      </section>

    </main>
  );
}
