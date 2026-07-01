import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer id="contact" className="bg-premium-navy pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-premium-gold to-premium-amber rounded-lg flex items-center justify-center">
                <MapPin className="text-premium-navy w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white block leading-none underline-offset-4 decoration-premium-gold">SHITLA</span>
                <span className="text-xs tracking-[0.2em] text-premium-gold font-medium uppercase">ESTATE MANAGEMENT</span>
              </div>
            </div>
            <p className="text-white/50 mb-8 max-w-sm leading-relaxed">
              Your premier partner for quality property services in Ahmedabad. With a 5.0-star rating, we are committed to excellence in every transaction.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full hover:bg-premium-gold hover:text-premium-navy transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-premium-gold uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-premium-gold w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white/70 text-sm leading-relaxed">
                  313, 3rd Floor, Swarnim Business Hub-1,<br />
                  Godrej Garden City, Chandkheda,<br />
                  Ahmedabad, Gujarat 382470
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-premium-gold w-5 h-5 flex-shrink-0" />
                <span className="text-white/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-premium-gold w-5 h-5 flex-shrink-0" />
                <span className="text-white/70 text-sm">info@shitalestate.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-premium-gold uppercase tracking-widest text-sm">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm text-white/70">
                <span>Mon - Sat:</span>
                <span>10:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between text-sm text-premium-amber font-bold">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-8">
                <a 
                    href="https://maps.google.com/?q=Shitla+Estate+Management+Chandkheda+Ahmedabad" 
                    target="_blank" 
                    className="btn-outline decoration-none w-full flex items-center justify-center gap-2"
                >
                    Get Directions
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center text-white/30 text-xs">
          <p>© 2024 Shitla Estate Management. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
