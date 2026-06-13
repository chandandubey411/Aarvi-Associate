import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, X, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import { properties, propertyTypes, cities, bedroomOptions } from '../data/properties'

const ITEMS_PER_PAGE = 6

function PageHero() {
  return (
    <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80"
          alt="Properties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/50 to-dark/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pb-12 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-inter text-xs text-gold uppercase tracking-widest">Aarvi Associate</span>
            <span className="text-white/30 text-xs">/</span>
            <span className="font-inter text-xs text-white/50">Properties</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            All <span className="gold-text">Properties</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

export default function Properties() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')
  const [city, setCity] = useState('All')
  const [beds, setBeds] = useState('All')
  const [sort, setSort] = useState('default')
  const [page, setPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Properties – Aarvi Associate | Browse All Listings'
  }, [])

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      const matchType = type === 'All' || p.type === type
      const matchCity = city === 'All' || p.city === city
      const matchBeds = beds === 'All' ||
        (beds === '5+' ? p.bedrooms >= 5 : p.bedrooms === parseInt(beds))
      return matchSearch && matchType && matchCity && matchBeds
    })

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.priceNum - b.priceNum)
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.priceNum - a.priceNum)
    if (sort === 'area-desc') result = [...result].sort((a, b) => b.area - a.area)

    return result
  }, [search, type, city, beds, sort])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const resetFilters = () => {
    setSearch(''); setType('All'); setCity('All'); setBeds('All'); setSort('default'); setPage(1)
  }

  return (
    <main>
      <PageHero />

      <section className="section-padding bg-cream">
        <div className="container-custom">
          {/* Search + Filter Bar */}
          <div className="bg-white rounded-3xl p-6 luxury-shadow mb-10">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" />
                <input
                  type="text"
                  id="property-search"
                  placeholder="Search by name or location..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                  className="w-full pl-11 pr-4 py-3.5 bg-cream rounded-xl font-inter text-sm text-dark placeholder-dark/40 focus:outline-none focus:ring-2 focus:ring-gold border border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <select
                  value={type}
                  onChange={(e) => { setType(e.target.value); setPage(1) }}
                  className="px-4 py-3.5 bg-cream rounded-xl font-inter text-sm text-dark focus:outline-none focus:ring-2 focus:ring-gold border border-cream-dark cursor-pointer"
                  id="filter-type"
                >
                  {propertyTypes.map((t) => <option key={t}>{t === 'All' ? 'All Types' : t}</option>)}
                </select>

                <select
                  value={city}
                  onChange={(e) => { setCity(e.target.value); setPage(1) }}
                  className="px-4 py-3.5 bg-cream rounded-xl font-inter text-sm text-dark focus:outline-none focus:ring-2 focus:ring-gold border border-cream-dark cursor-pointer"
                  id="filter-city"
                >
                  {cities.map((c) => <option key={c}>{c === 'All' ? 'All Cities' : c}</option>)}
                </select>

                <select
                  value={beds}
                  onChange={(e) => { setBeds(e.target.value); setPage(1) }}
                  className="px-4 py-3.5 bg-cream rounded-xl font-inter text-sm text-dark focus:outline-none focus:ring-2 focus:ring-gold border border-cream-dark cursor-pointer"
                  id="filter-beds"
                >
                  {bedroomOptions.map((b) => (
                    <option key={b}>{b === 'All' ? 'All Bedrooms' : `${b} Bed${b !== '1' ? 's' : ''}`}</option>
                  ))}
                </select>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-4 py-3.5 bg-cream rounded-xl font-inter text-sm text-dark focus:outline-none focus:ring-2 focus:ring-gold border border-cream-dark cursor-pointer"
                  id="sort-options"
                >
                  <option value="default">Sort By</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="area-desc">Area: Largest First</option>
                </select>

                {(search || type !== 'All' || city !== 'All' || beds !== 'All' || sort !== 'default') && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1.5 px-4 py-3.5 bg-rose-50 text-rose-600 rounded-xl font-inter text-sm hover:bg-rose-100 transition-colors"
                  >
                    <X size={14} /> Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="font-inter text-sm text-dark/60">
              Showing <span className="font-semibold text-dark">{filtered.length}</span> properties
            </p>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {paginated.length > 0 ? (
              <motion.div
                key={`page-${page}-${type}-${city}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {paginated.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="font-playfair text-2xl font-bold text-dark mb-2">No Properties Found</h3>
                <p className="font-poppins text-dark/50 mb-6">Try adjusting your filters or search terms</p>
                <button onClick={resetFilters} className="btn-gold">Reset Filters</button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-14">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 rounded-xl border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                id="pagination-prev"
              >
                <ChevronLeft size={18} className="text-dark" />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-xl font-inter text-sm font-medium transition-all duration-200 ${
                    page === i + 1
                      ? 'bg-gold text-dark border border-gold shadow-gold'
                      : 'border border-gold/30 text-dark/60 hover:border-gold hover:text-dark'
                  }`}
                  id={`pagination-${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 rounded-xl border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                id="pagination-next"
              >
                <ChevronRight size={18} className="text-dark" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
