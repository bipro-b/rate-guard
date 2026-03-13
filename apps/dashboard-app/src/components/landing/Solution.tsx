export default function Solution() {

 return (
  <section className="py-24 bg-slate-900 px-6">

   <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-6">
     A Gateway Built For Developers
    </h2>

    <p className="text-slate-400 max-w-2xl mx-auto">

     Our rate limiting gateway protects your APIs
     using distributed counters and intelligent traffic analysis.

    </p>

   </div>

   <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">

    <div className="p-6 bg-slate-800 rounded-xl">
     <h3 className="font-semibold mb-2">
      Distributed Rate Limiting
     </h3>
     <p className="text-slate-400">
      Scales globally using Redis and edge gateways.
     </p>
    </div>

    <div className="p-6 bg-slate-800 rounded-xl">
     <h3 className="font-semibold mb-2">
      Real-time Analytics
     </h3>
     <p className="text-slate-400">
      Monitor traffic and detect abuse instantly.
     </p>
    </div>

    <div className="p-6 bg-slate-800 rounded-xl">
     <h3 className="font-semibold mb-2">
      Simple Integration
     </h3>
     <p className="text-slate-400">
      Protect APIs with a single middleware.
     </p>
    </div>

   </div>

  </section>
 )
}