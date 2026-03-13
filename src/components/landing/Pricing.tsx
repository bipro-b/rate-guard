import { Button } from "@/components/ui/button"

export default function Pricing() {

 return (
  <section className="py-24 px-6">

   <h2 className="text-3xl font-bold text-center mb-16">
    Simple Pricing
   </h2>

   <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    <div className="bg-slate-900 p-8 rounded-xl">

     <h3 className="text-xl font-semibold">
      Starter
     </h3>

     <p className="text-4xl font-bold mt-4">
      $19
     </p>

     <p className="text-slate-400">
      1M requests / month
     </p>

     <Button className="mt-6 w-full">
      Start Free
     </Button>

    </div>

    <div className="bg-slate-900 p-8 rounded-xl border border-blue-500">

     <h3 className="text-xl font-semibold">
      Pro
     </h3>

     <p className="text-4xl font-bold mt-4">
      $79
     </p>

     <p className="text-slate-400">
      10M requests / month
     </p>

     <Button className="mt-6 w-full">
      Get Started
     </Button>

    </div>

    <div className="bg-slate-900 p-8 rounded-xl">

     <h3 className="text-xl font-semibold">
      Enterprise
     </h3>

     <p className="text-4xl font-bold mt-4">
      Custom
     </p>

     <p className="text-slate-400">
      Unlimited traffic
     </p>

     <Button className="mt-6 w-full">
      Contact Sales
     </Button>

    </div>

   </div>

  </section>
 )
}