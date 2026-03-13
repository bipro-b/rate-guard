import RequestsChart from "@/components/analytics/RequestsChart"

export default function AnalyticsPage() {

 return (
  <div className="space-y-6">

   <h1 className="text-2xl font-bold">
    Analytics
   </h1>

   <RequestsChart />

  </div>
 )
}