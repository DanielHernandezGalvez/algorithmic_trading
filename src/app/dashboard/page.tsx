import { AdminHeader } from "@/components/dashboard/AdminHeader"
import { MetricsCards } from "@/components/dashboard/MetricsCards"
import { RecentUsers } from "@/components/dashboard/RecentUsers"
import { RecentEvents } from "@/components/dashboard/RecentEvents"
import { ActivityFeed } from "@/components/dashboard/ActivityFeed"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />

      <main className="container mx-auto py-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Resumen general de tu plataforma de agenda SaaS</p>
          </div>
        </div>

        {/* Metrics Cards */}
        <MetricsCards />

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Recent Users */}
          <div className="lg:col-span-1">
            <RecentUsers />
          </div>

          {/* Recent Events */}
          <div className="lg:col-span-1">
            <RecentEvents />
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </main>
    </div>
  )
}
