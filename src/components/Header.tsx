import { motion } from 'motion/react';
import { ShoppingCart, MapPin, Camera } from 'lucide-react';
import { LOCATION_DETAILS } from '../constants';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-donut-pink/30 px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <motion.div 
          whileHover={{ rotate: 180 }}
          className="w-10 h-10 bg-donut-pink rounded-full flex items-center justify-center text-white"
        >
          🍩
        </motion.div>
        <span className="text-2xl font-display font-bold text-donut-chocolate tracking-tight">doncu.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#etalase" className="hover:text-donut-pink transition-colors">Etalase</a>
        <a href="#payment" className="hover:text-donut-pink transition-colors">Payment</a>
        <a href="#location" className="hover:text-donut-pink transition-colors">Location</a>
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href={`https://instagram.com/${LOCATION_DETAILS.instagram.replace('@', '')}`} 
          target="_blank" 
          rel="noreferrer"
          className="p-2 hover:bg-donut-pink/10 rounded-full transition-colors"
        >
          <Camera size={20} />
        </a>
        <button className="bg-donut-pink text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-donut-pink/90 transition-all shadow-sm flex items-center gap-2 group">
          Order Now
          <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </motion.header>
  );
}
