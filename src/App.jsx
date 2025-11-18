import { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CategoryTabs from './components/CategoryTabs'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const qs = category !== 'all' ? `?category=${encodeURIComponent(category)}` : ''
        const res = await fetch(`${base}/api/products${qs}`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [category])

  const filtered = useMemo(() => {
    if (category === 'all') return products
    return products.filter(p => p.category === category)
  }, [products, category])

  const handleAdd = (p) => {
    const size = p.sizes?.[0] || 'M'
    setCartItems((prev) => [
      ...prev,
      {
        id: p.id,
        title: p.title,
        size,
        price: p.price,
        image: p.images?.[0],
      }
    ])
    setCartOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">
      <Navbar cartCount={cartItems.length} onCartClick={() => setCartOpen(true)} />
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <Hero />

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Shop the collection</h2>
          <CategoryTabs active={category} onChange={setCategory} />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-80 rounded-2xl bg-white border border-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAdd} />
            ))}
          </div>
        )}

        <section id="about" className="mt-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-2">About smiley</h3>
          <p className="text-gray-600 text-sm">We make cheerful staples with premium fabrics and timeless shapes. Designed to last and to lift your mood.</p>
        </section>
      </main>

      <CartDrawer open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default App
