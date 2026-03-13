export default function Problem() {

 return (
  <section className="py-24 px-6 max-w-6xl mx-auto">

   <h2 className="text-3xl font-bold text-center mb-16">
    APIs Are Constantly Under Attack
   </h2>

   <div className="grid md:grid-cols-3 gap-10 text-center">

    <div>
     <h3 className="text-xl font-semibold mb-2">
      Abuse & Bots
     </h3>

     <p className="text-slate-400">
      Automated traffic can overwhelm your API
      and increase infrastructure costs.
     </p>
    </div>

    <div>
     <h3 className="text-xl font-semibold mb-2">
      Infrastructure Overload
     </h3>

     <p className="text-slate-400">
      Sudden spikes can crash your services
      if rate limits aren't enforced.
     </p>
    </div>

    <div>
     <h3 className="text-xl font-semibold mb-2">
      Complex Setup
     </h3>

     <p className="text-slate-400">
      Building distributed rate limiting
      is extremely difficult to implement.
     </p>
    </div>

   </div>

  </section>
 )
}