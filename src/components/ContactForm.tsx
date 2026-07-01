import { motion } from 'framer-motion'
import { Send, User, Phone, MessageSquare, Home } from 'lucide-react'

export const ContactForm = () => {
  return (
    <section id="contact-form" className="py-24 bg-premium-navy relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-premium-gold font-bold tracking-widest uppercase text-sm block mb-4"
            >
              INQUIRY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
               Ready to find your <span className="text-gradient">Next Space?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white/60 mb-12 text-lg leading-relaxed"
            >
              Fill out the form below and our professional team will get back to you within 2 hours. We specialize in tailoring options to your specific needs.
            </motion.p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass flex items-center justify-center rounded-xl text-premium-gold">
                      <Phone className="w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="font-bold">Fast Response</h4>
                      <p className="text-sm text-white/40">Callback within 2 working hours.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass flex items-center justify-center rounded-xl text-premium-gold">
                      <Home className="w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="font-bold">Expert Guidance</h4>
                      <p className="text-sm text-white/40">10+ years of Ahmedabad market experience.</p>
                  </div>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 w-full glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-gold" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-premium-navy/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-gold" />
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-premium-navy/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">Property Interest</label>
                <div className="relative">
                  <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-gold" />
                  <select className="w-full bg-premium-navy/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold transition-all appearance-none">
                    <option className="bg-premium-navy">3BHK Luxury Apartment</option>
                    <option className="bg-premium-navy">Commercial Office Hub</option>
                    <option className="bg-premium-navy">Industrial Plot</option>
                    <option className="bg-premium-navy">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-premium-gold" />
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-premium-navy/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <button className="btn-premium w-full flex items-center justify-center gap-2 group py-5">
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
