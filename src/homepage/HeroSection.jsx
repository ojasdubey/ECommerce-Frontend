export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.20),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.18),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            Free shipping over $50
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Everyday essentials, thoughtfully picked.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Discover best-sellers, new arrivals, and clean design staples—all in one place.
            Fast checkout, easy returns, and deals that feel good.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Browse featured
            </a>
            <a
              href="#categories"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Explore categories
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
              <dt className="font-semibold text-slate-900">2-day dispatch</dt>
              <dd className="mt-1 text-slate-600">On most orders</dd>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
              <dt className="font-semibold text-slate-900">30-day returns</dt>
              <dd className="mt-1 text-slate-600">No hassle</dd>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
              <dt className="font-semibold text-slate-900">Secure checkout</dt>
              <dd className="mt-1 text-slate-600">Encrypted payments</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=60"
                alt="Minimal watch and accessories"
                loading="lazy"
              />
            </div>
            <div className="grid gap-3">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=60"
                  alt="Camera on a table"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60"
                  alt="Sneakers in bright color"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-2xl bg-slate-900 px-5 py-4 text-white">
            <p className="text-sm font-semibold">Today’s deal</p>
            <p className="mt-1 text-sm text-white/80">Save up to 25% on essentials this week.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

