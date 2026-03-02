import ProductCard from '../products/Product_card'
import { CategoriesSection } from './CategoriesSection'
import { HeroSection } from './HeroSection'
import { NewsletterSection } from './NewsletterSection'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductCard id="featured" title="Featured products" />
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  )
}

