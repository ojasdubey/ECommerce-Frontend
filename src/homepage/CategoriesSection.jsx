const CATEGORIES = [
  { name: 'Clothing', desc: 'T-shirts, hoodies, basics', color: 'bg-indigo-600' },
  { name: 'Accessories', desc: 'Bags, wallets, more', color: 'bg-sky-600' },
  { name: 'Electronics', desc: 'Gadgets you’ll love', color: 'bg-emerald-600' },
  { name: 'Footwear', desc: 'Everyday comfort', color: 'bg-fuchsia-600' },
]

export function CategoriesSection({ categories = CATEGORIES }) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Shop by category</h2>
          <p className="mt-1 text-sm text-slate-600">A quick way to find what you’re looking for.</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <a
            key={c.name}
            href="#featured"
            className="group rounded-3xl bg-white p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className={`h-10 w-10 rounded-2xl ${c.color}`} />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">{c.name}</h3>
                <span className="text-slate-400 transition group-hover:translate-x-0.5">→</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

