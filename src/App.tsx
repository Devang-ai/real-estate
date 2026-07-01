import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { PropertyGrid } from './components/PropertyGrid'
import { Testimonials } from './components/Testimonials'
import { ContactForm } from './components/ContactForm'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-premium-navy selection:bg-premium-gold selection:text-premium-navy">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PropertyGrid />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
