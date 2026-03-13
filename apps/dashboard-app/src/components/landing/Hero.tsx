import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {

 return (
  <section className="py-32 text-center px-6">

   <h1 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">

    Protect Your APIs  
    With Intelligent Rate Limiting

   </h1>

   <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">

    Stop abuse, control traffic, and scale your APIs safely with
    a developer-first rate limiting gateway.

   </p>

   <div className="mt-10 flex justify-center gap-4">

    <Link href="/signup">
     <Button size="lg">
      Start Free
     </Button>
    </Link>

    <Button variant="outline" size="lg">
      View Docs
    </Button>

   </div>

  </section>
 )
}