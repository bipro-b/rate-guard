"use client"

import {
 LineChart,
 Line,
 XAxis,
 Tooltip,
 ResponsiveContainer,
} from "recharts"

const data = [
 { time: "00:00", requests: 200 },
 { time: "04:00", requests: 450 },
 { time: "08:00", requests: 900 },
 { time: "12:00", requests: 1500 },
 { time: "16:00", requests: 1100 },
 { time: "20:00", requests: 800 },
]

export default function RequestsChart() {

 return (
  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

   <h3 className="mb-4 font-semibold">
    Requests Per Hour
   </h3>

   <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
     <XAxis dataKey="time" />
     <Tooltip />
     <Line type="monotone" dataKey="requests" stroke="#2563EB" />
    </LineChart>
   </ResponsiveContainer>

  </div>
 )
}