import Image from 'next/image'
import Navbar from '../components/Navbar'
import HeroPage from './LandingPage/HeroPage'

export default function Home() {
  return (
    <main className=" min-h-screen bg-[#000019]">
  <Navbar />
  <HeroPage />
    </main>
  )
}
