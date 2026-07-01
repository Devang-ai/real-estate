import { motion } from 'framer-motion'
import { Building, Building2, Landmark, GraduationCap, MapPin, Search } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Residential Real Estate',
    description: 'Find your perfect home with our curated list of apartments, villas, and independent houses in Ahmedabad.',
  },
  {
    icon: Building,
    title: 'Commercial Properties',
    description: 'Elevate your business with our range of premium office spaces, shops, and showrooms in strategic locations.',
  },
  {
    icon: Landmark,
    title: 'Industrial Estate',
    description: 'We specialize in industrial plots, warehouses, and manufacturing units that drive your business growth.',
  },
  {
    icon: Search,
    title: 'Real Estate Consultant',
    description: 'Our expert advisors provide data-driven insights and market analysis to help you make informed decisions.',
  },
]

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-premium-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-premium-amber/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-premium-gold font-bold tracking-widest uppercase text-sm block mb-4"
          >
            OUR EXPERTISE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive <span className="text-gradient">Property Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            With over a decade of experience, Shitla Estate Management provides specialized services across all real estate sectors in Ahmedabad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 hover:border-premium-gold/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-premium-gold to-premium-amber rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-premium-navy w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-premium-gold transition-colors">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
