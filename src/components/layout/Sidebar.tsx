"use client"

import Link from "next/link"
import { LayoutDashboard, Key, BarChart3, CreditCard, Settings } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "API Keys", href: "/dashboard/api-keys", icon: Key },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800">

      <div className="p-6 text-xl font-bold">
        RateGuard
      </div>

      <nav className="px-4 space-y-2">

        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}

      </nav>

    </aside>
  )
}