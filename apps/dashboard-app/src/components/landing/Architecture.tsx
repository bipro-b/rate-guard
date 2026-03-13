export default function Architecture() {

 return (
  <section className="py-24 px-6 text-center">

   <h2 className="text-3xl font-bold mb-12">
    Built For Scale
   </h2>

   <div className="max-w-5xl mx-auto bg-slate-900 p-10 rounded-xl">

    <pre className="text-left text-slate-300">

Client API Request
      ↓
Rate Limit Gateway
      ↓
Redis Distributed Counters
      ↓
Decision Engine
      ↓
Allow / Block Request
      ↓
Analytics Pipeline

    </pre>

   </div>

  </section>
 )
}