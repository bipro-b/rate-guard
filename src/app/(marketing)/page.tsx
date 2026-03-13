import Hero from "@/components/landing/Hero"
import Problem from "@/components/landing/Problem"
import Solution from "@/components/landing/Solution"
import Architecture from "@/components/landing/Architecture"
import Pricing from "@/components/landing/Pricing"
import Testimonials from "@/components/landing/Testimonial"
import CTA from "@/components/landing/CTA"

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white">

      <Hero />

      <Problem />

      <Solution />

      <Architecture />

      <Pricing />

      <Testimonials />

      <CTA />

    </div>
  )
}