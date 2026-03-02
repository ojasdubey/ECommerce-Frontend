const defaultProducts = [
  {
    id: 'basic-tee-black',
    name: 'Basic Tee',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 'basic-tee-white',
    name: 'Basic Tee',
    color: 'Aspen White',
    price: '$35',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
  },
  {
    id: 'basic-tee-charcoal',
    name: 'Basic Tee',
    color: 'Charcoal',
    price: '$35',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
  },
  {
    id: 'artwork-tee',
    name: 'Artwork Tee',
    color: 'Iso Dots',
    price: '$35',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
  },
]

function Product_card({ title = 'Featured products', products = defaultProducts, id }) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            View all <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 group-hover:ring-slate-300 lg:aspect-auto lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium text-slate-900">
                    <a href={product.href} className="focus:outline-none">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{product.color}</p>
                </div>
                <p className="text-sm font-semibold text-slate-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product_card