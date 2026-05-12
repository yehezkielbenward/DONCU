import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background Sprinkles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="sprinkle"
          style={{
            left: `${Math.random() * 100}%`,
            background: ['#FFB7C5', '#FFD54F', '#B2DFDB', '#4E342E'][Math.floor(Math.random() * 4)],
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="inline-block px-4 py-1.5 mb-6 bg-donut-pink/20 text-donut-chocolate rounded-full text-sm font-bold tracking-wide uppercase">
          🍩 Pangkalpinang's Sweetest Spot
        </div>
        <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-6 text-donut-chocolate">
          Donat Ter <span className="text-donut-pink italic underline underline-offset-8 decoration-donut-yellow">Gong</span> di Pangkalpinang!
        </h1>
        <p className="max-w-xl mx-auto text-lg text-donut-chocolate/70 mb-10 leading-relaxed font-medium">
          Lembutnya kebangetan, toppingnya melimpah. Cobain sensasi baru donat kekinian dengan rasa yang gak ada duanya!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-donut-chocolate text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-donut-chocolate/90 transition-all"
          >
            Lihat Etalase
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white border-2 border-donut-pink text-donut-pink px-8 py-4 rounded-full text-lg font-bold hover:bg-donut-pink hover:text-white transition-all shadow-md"
          >
            Lokasi Kami
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Donut Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-16 w-full max-w-4xl px-4 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=1200" 
          alt="Hero Donuts" 
          className="w-full h-[400px] object-cover rounded-[40px] shadow-2xl border-8 border-white/50"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
