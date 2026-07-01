import { motion } from 'framer-motion'
import { Bed, Bath, Move, MapPin, Heart } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Apartment',
    location: 'Godrej Garden City, Ahmedabad',
    price: '₹ 85.00 L',
    beds: 3,
    baths: 3,
    sqft: '1850 sq.ft',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Premium Office Space',
    location: 'Swarnim Business Hub-1, Chandkheda',
    price: '₹ 1.25 Cr',
    beds: 0,
    baths: 1,
    sqft: '950 sq.ft',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Spacious 2BHK Flat',
    location: 'Near SG Highway, Ahmedabad',
    price: '₹ 55.00 L',
    beds: 2,
    baths: 2,
    sqft: '1250 sq.ft',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Retail Showroom',
    location: 'Motera, Ahmedabad',
    price: '₹ 2.50 Cr',
    beds: 0,
    baths: 0,
    sqft: '1100 sq.ft',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Luxury Villa',
    location: 'Sindhu Bhavan Road, Ahmedabad',
    price: '₹ 4.50 Cr',
    beds: 4,
    baths: 5,
    sqft: '3500 sq.ft',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Boutique Store Front',
    location: 'CG Road, Ahmedabad',
    price: '₹ 3.10 Cr',
    beds: 0,
    baths: 1,
    sqft: '1500 sq.ft',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    title: 'Cozy Studio Apartment',
    location: 'Prahlad Nagar, Ahmedabad',
    price: '₹ 35.00 L',
    beds: 1,
    baths: 1,
    sqft: '600 sq.ft',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 8,
    title: 'Industrial Warehouse',
    location: 'Sanand GIDC, Ahmedabad',
    price: '₹ 5.80 Cr',
    beds: 0,
    baths: 2,
    sqft: '10000 sq.ft',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800',
  }
]

export const PropertyGrid = () => {
  return (
    <section id="properties" className="py-24 bg-premium-navy relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-premium-gold font-bold tracking-widest uppercase text-sm block mb-4"
            >
              FEATURED LISTINGS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Exclusive <span className="text-gradient">Collections</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            {['All', 'Residential', 'Commercial', 'Industrial'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-premium-gold hover:text-premium-navy transition-all duration-300"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-3 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-xl h-60 mb-6">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {prop.category}
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 glass flex items-center justify-center rounded-full hover:bg-red-500 transition-colors group/heart">
                  <Heart className="w-4 h-4 group-hover/heart:fill-white" />
                </button>
              </div>

              <div className="px-3 pb-3">
                <div className="flex items-center gap-1 text-premium-gold mb-2">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">{prop.location}</span>
                </div>
                <h3 className="text-lg font-bold mb-4 group-hover:text-premium-gold transition-colors">{prop.title}</h3>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 mb-6">
                  {prop.beds > 0 && (
                    <div className="flex flex-col items-center gap-1 text-white/50">
                      <Bed className="w-4 h-4" />
                      <span className="text-[10px]">{prop.beds} BHK</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-1 text-white/50">
                    <Move className="w-4 h-4" />
                    <span className="text-[10px]">{prop.sqft}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-white/50">
                    <Bath className="w-4 h-4" />
                    <span className="text-[10px]">{prop.baths > 0 ? prop.baths + ' Bath' : 'Commercial'}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-premium-gold">{prop.price}</span>
                  <button className="text-xs font-bold uppercase tracking-widest group-hover:underline underline-offset-4 flex items-center gap-1">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="btn-outline decoration-none">Explore All Properties</button>
        </div>
      </div>
    </section>
  )
}
