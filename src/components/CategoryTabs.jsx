import React from 'react'

export default function CategoryTabs({ active, onChange }) {
  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'hoodies', label: 'Hoodies' },
    { key: 't-shirts', label: 'T‑Shirts' },
  ]
  return (
    <div className="inline-flex rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            active === t.key ? 'bg-yellow-300 text-gray-900 shadow' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}