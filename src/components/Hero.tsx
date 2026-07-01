import { motion } from 'framer-motion'
import { Search, MapPin, Building2, Key } from 'lucide-react'

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-property.png"
          alt="Premium Real Estate"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-premium-navy/80 via-premium-navy/60 to-premium-navy"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full mb-8">
              <span className="w-2 h-2 bg-premium-amber rounded-full animate-ping"></span>
              <span className="text-xs font-semibold tracking-wider text-premium-gold uppercase">Ahmedabad's #1 Real Estate Agency</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Find Your <span className="text-gradient">Dream Space</span> In Ahmedabad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to Shitla Estate Management. For over a decade, we've been the trusted choice for premium residential and commercial spaces in Godrej Garden City and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto glass p-2 rounded-2xl flex flex-col md:flex-row gap-2"
          >
            <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">
              <MapPin className="text-premium-gold w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Where are you looking?"
                className="bg-transparent border-none text-white placeholder:text-white/40 focus:ring-0 w-full"
              />
            </div>
            <div className="flex-1 flex items-center gap-4 px-6 py-4">
              <Building2 className="text-premium-gold w-5 h-5 flex-shrink-0" />
              <select className="bg-transparent border-none text-white focus:ring-0 w-full cursor-pointer appearance-none">
                <option className="bg-premium-navy">Property Type</option>
                <option className="bg-premium-navy">Residential Apartment</option>
                <option className="bg-premium-navy">Commercial Office</option>
                <option className="bg-premium-navy">Shop/Showroom</option>
                <option className="bg-premium-navy">Plot/Land</option>
              </select>
            </div>
            <button className="btn-premium flex items-center justify-center gap-2 group">
              <Search className="w-5 h-5 transition-transform group-hover:scale-125" />
              Find Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-12 text-white/50"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">5.0 ★</span>
              <span className="text-xs uppercase tracking-widest">Google Rating</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">59+</span>
              <span className="text-xs uppercase tracking-widest">Reviews</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-xs uppercase tracking-widest">Years Exp.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
