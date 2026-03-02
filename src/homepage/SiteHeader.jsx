export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            E
          </span>
          <span>EcoShop</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#categories" className="hover:text-slate-900">
            Categories
          </a>
          <a href="#featured" className="hover:text-slate-900">
            Featured
          </a>
          <a href="#newsletter" className="hover:text-slate-900">
            Deals
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#featured"
            className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 sm:inline-flex"
          >
            Shop now
          </a>
          <a
            href="#"
            className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Cart
          </a>
        </div>
      </div>
    </header>
  )
}

