import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2 } from 'lucide-react'

const reviews = [
  {
    name: 'Sunil Desai',
    role: 'Home Buyer',
    text: "From the first meeting to the closing process, offering guidance and reassurance. They didn't just see us as another transaction, but as potential clients they wanted to help. This level of dedication is rare in the real estate industry!",
    rating: 5,
  },
  {
    name: 'Umesh Sutar',
    role: 'Property Owner',
    text: 'Excellent service i have ever seen from shital estate . Thanks your support sir. They are seasoned professionals at your service.',
    rating: 5,
  },
  {
    name: 'Sushant Khar',
    role: 'Tenant',
    text: 'We had a very good experience with Shitla Estate, special thanks to Mr. Pravin and appreciated your efforts.',
    rating: 5,
  },
]

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-premium-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-premium-gold/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-premium-gold font-bold tracking-widest uppercase text-sm block mb-4"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold">5.0</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-premium-gold text-premium-gold" />
              ))}
            </div>
            <span className="text-white/50 text-sm">(59 Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl relative group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-premium-gold/20 group-hover:text-premium-gold/40 transition-colors">
                <Quote size={48} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-premium-gold text-premium-gold" />
                ))}
              </div>

              <p className="text-white/70 italic mb-8 leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 bg-premium-gold/20 rounded-full flex items-center justify-center text-premium-gold font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    {review.name}
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  </h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
