import React from 'react'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img src={product.images?.[0]}
             alt={product.title}
             className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{product.title}</h3>
          <span className="font-bold text-gray-900">${Number(product.price).toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-3 flex items-center gap-2">
          {product.sizes?.map((s) => (
            <span key={s} className="text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-700">{s}</span>
          ))}
        </div>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg py-2.5 hover:bg-gray-800"
        >
          <ShoppingCart size={18} />
          Add to cart
        </button>
      </div>
    </div>
  )
}
