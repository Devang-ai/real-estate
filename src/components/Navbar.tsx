import { motion } from 'framer-motion'
import { Home, Menu, Phone, User } from 'lucide-react'
import { useState, useEffect } from 'react'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-dark' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-premium-gold to-premium-amber rounded-lg flex items-center justify-center">
            <Home className="text-premium-navy w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-none">SHITLA</span>
            <span className="text-[10px] tracking-[0.2em] text-premium-gold font-medium">ESTATE MANAGEMENT</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Properties', 'Services', 'Reviews', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-premium-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 btn-premium !py-2 !px-4 text-sm">
            <Phone className="w-4 h-4" />
            Contact Us
          </button>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
