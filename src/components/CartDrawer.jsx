import React from 'react'

export default function CartDrawer({ open, items, onClose }) {
  const total = items.reduce((sum, it) => sum + it.price, 0)
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white border-l border-gray-200 shadow-xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-900">Close</button>
        </div>
        <div className="p-4 divide-y divide-gray-100">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="py-3 flex items-center gap-3">
                <img src={it.image} alt={it.title} className="w-14 h-14 object-cover rounded border" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">{it.title}</div>
                  <div className="text-xs text-gray-500">Size {it.size}</div>
                </div>
                <div className="text-sm font-semibold">${Number(it.price).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="mt-auto p-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-gray-900 text-white rounded-lg py-2.5 hover:bg-gray-800">Checkout</button>
        </div>
      </aside>
    </div>
  )
}
