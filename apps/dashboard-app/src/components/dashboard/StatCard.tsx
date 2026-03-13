import { Card } from "@/components/ui/card"

interface Props {
  title: string
  value: string
}

export default function StatCard({ title, value }: Props) {
  return (
    <Card className="p-6 bg-slate-900 border-slate-800">

      <div className="text-sm text-slate-400">
        {title}
      </div>

      <div className="text-2xl font-bold mt-2">
        {value}
      </div>

    </Card>
  )
}