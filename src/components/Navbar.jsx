import React from 'react'
import { ShoppingBag, Smile } from 'lucide-react'

export default function Navbar({ cartCount = 0, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 font-black text-xl text-gray-900">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-300 border border-yellow-400">
            <Smile className="text-gray-900" size={18} />
          </div>
          smiley
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#hoodies" className="hover:text-gray-900">Hoodies</a>
          <a href="#tshirts" className="hover:text-gray-900">T‑Shirts</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </nav>
        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
          <ShoppingBag size={18} />
          <span className="text-sm font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-yellow-400 text-gray-900 rounded-full px-1.5 py-0.5 border border-yellow-600">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
