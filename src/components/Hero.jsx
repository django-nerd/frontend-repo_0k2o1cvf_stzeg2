import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 border border-yellow-200/60">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-40" />
      <div className="relative px-6 py-12 md:px-10 md:py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-yellow-300 text-yellow-800 text-xs font-medium">
            <span>New drop</span>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span>Hoodies & Tees</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            smiley
          </h1>
          <p className="mt-3 text-gray-700 md:text-lg">
            Feel-good streetwear with an iconic grin. Cozy hoodies and super-soft tees designed to make your day brighter.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1200&auto=format&fit=crop"
              alt="Smiley hoodie"
              className="w-72 h-72 object-cover rounded-2xl shadow-xl border border-yellow-200"
            />
            <div className="absolute -bottom-3 -left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-sm border border-yellow-200 shadow">
              Cozy fleece • Unisex
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
