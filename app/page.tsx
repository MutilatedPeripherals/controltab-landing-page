import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Showcase } from './components/Showcase'
import { Pricing } from './components/Pricing'
import { About } from './components/About'
import { JoinWaitlist } from './components/JoinWaitlist'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Pricing />
      <About />
      <JoinWaitlist />
      <CallToAction />
      <Footer />
    </div>
  )
}

