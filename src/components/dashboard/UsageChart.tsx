"use client"

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Mon", requests: 400 },
  { name: "Tue", requests: 900 },
  { name: "Wed", requests: 700 },
  { name: "Thu", requests: 1200 },
  { name: "Fri", requests: 1000 },
]

export default function UsageChart() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h3 className="mb-4 text-lg font-semibold">
        Requests Over Time
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="requests" stroke="#2563EB" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}