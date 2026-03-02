export function NewsletterSection() {
  return (
    <section id="newsletter" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Get deals in your inbox</h2>
            <p className="mt-2 text-sm text-white/80">
              Weekly drops, exclusive discounts, and new arrivals. No spam.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-11 w-full rounded-xl bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="h-11 rounded-xl bg-indigo-600 px-5 text-sm font-semibold hover:bg-indigo-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

