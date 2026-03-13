import StatCard from "@/components/dashboard/StatCard"
import UsageChart from "@/components/dashboard/UsageChart"

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-3 gap-6">

        <StatCard title="Total Requests" value="23,492" />
        <StatCard title="Blocked Requests" value="1,230" />
        <StatCard title="Active API Keys" value="12" />

      </div>

      <UsageChart />

    </div>
  )
}