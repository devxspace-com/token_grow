
import Navbar from '@/components/Navbar'
import HeroPage from './LandingPage/HeroPage'
import ServicesFeatures from './LandingPage/ServicesFeatures'
import Features from './LandingPage/Features'
import Testimonials from './LandingPage/Testimonials'
import Contact from './LandingPage/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className=" min-h-screen bg-[#000019]">
  <Navbar />
  <HeroPage />
  <ServicesFeatures/>
  <Features/>
  <Testimonials/>
  <Contact/>
  <Footer/>
    </main>
  )
}
