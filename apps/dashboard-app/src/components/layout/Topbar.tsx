"use client"

import { Bell } from "lucide-react"

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6">

      <input
        placeholder="Search..."
        className="bg-slate-900 px-3 py-2 rounded-md outline-none"
      />

      <div className="flex items-center gap-4">

        <Bell size={20} />

        <div className="w-8 h-8 rounded-full bg-slate-700" />

      </div>

    </header>
  )
}