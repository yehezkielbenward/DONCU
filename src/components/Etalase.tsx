import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ShoppingBag } from 'lucide-react';

export function Etalase() {
  return (
    <section id="etalase" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl mb-4 font-display text-donut-chocolate">Pilihan Doncu Terfavorit</h2>
          <p className="text-donut-chocolate/60 max-w-md font-medium">Banyak varian rasa yang siap memanjakan lidahmu. Mulai dari yang manis sampai yang gurih semuanya ada!</p>
        </div>
        <div className="flex bg-white p-1 rounded-full border border-donut-pink/20 shadow-sm">
          {['All', 'Sweet', 'Savory', 'Special'].map((cat) => (
            <button 
              key={cat} 
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === 'All' ? 'bg-donut-pink text-white shadow-md' : 'hover:bg-donut-pink/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-[32px] overflow-hidden border border-donut-pink/10 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-donut-pink border border-donut-pink/20">
                {product.category}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display mb-2 text-donut-chocolate">{product.name}</h3>
              <p className="text-donut-chocolate/60 text-sm mb-6 line-clamp-2 font-medium leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-donut-chocolate">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-donut-pink text-white p-3 rounded-2xl shadow-lg shadow-donut-pink/20 hover:shadow-donut-pink/40"
                >
                  <ShoppingBag size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
