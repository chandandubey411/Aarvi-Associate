import { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Team from '../components/Team/Team'
import Testimonials from '../components/Testimonials/Testimonials'
import Stats from '../components/Stats/Stats'
import Contact from '../components/Contact/Contact'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Aarvi Associate – Your Trusted Property Partner | Luxury Real Estate'
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <FeaturedProperties />
      <WhyChooseUs />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  )
}
