import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BillingPage() {

 return (
  <div className="space-y-6">

   <h1 className="text-2xl font-bold">
    Billing
   </h1>

   <Card className="p-6 bg-slate-900 border-slate-800">

    <h2 className="text-lg font-semibold mb-2">
     Current Plan
    </h2>

    <p className="text-slate-400">
     Pro Plan — 10M requests / month
    </p>

    <Button className="mt-4">
     Upgrade Plan
    </Button>

   </Card>

  </div>
 )
}