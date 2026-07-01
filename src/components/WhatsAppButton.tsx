import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export const WhatsAppButton = () => {
  const phoneNumber = '9316956652' // Placeholder for Shitla Estate Management
  const message = 'Hello! I am interested in your real estate services in Ahmedabad.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-2 group"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="font-bold text-sm tracking-wide hidden md:block">Chat with us</span>
        
        {/* Signal Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </a>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 px-4 py-2 glass-dark rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-xs text-premium-gold font-bold uppercase tracking-widest border border-premium-gold/30">
        Active Now
      </div>
    </motion.div>
  )
}
