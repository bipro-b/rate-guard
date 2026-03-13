export default function Testimonials() {

 return (
  <section className="py-24 bg-slate-900 px-6">

   <h2 className="text-3xl font-bold text-center mb-16">
    Trusted By Developers
   </h2>

   <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    <div className="p-6 bg-slate-800 rounded-xl">

     <p>
      “This gateway saved our infrastructure from API abuse.”
     </p>

     <div className="mt-4 text-sm text-slate-400">
      Backend Engineer
     </div>

    </div>

    <div className="p-6 bg-slate-800 rounded-xl">

     <p>
      “We replaced our custom rate limiter in one afternoon.”
     </p>

     <div className="mt-4 text-sm text-slate-400">
      SaaS Founder
     </div>

    </div>

    <div className="p-6 bg-slate-800 rounded-xl">

     <p>
      “Analytics visibility is incredible.”
     </p>

     <div className="mt-4 text-sm text-slate-400">
      Platform Engineer
     </div>

    </div>

   </div>

  </section>
 )
}