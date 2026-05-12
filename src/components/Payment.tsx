import { motion } from 'motion/react';
import { PAYMENT_METHODS } from '../constants';
import * as Icons from 'lucide-react';

export function Payment() {
  return (
    <section id="payment" className="py-24 bg-donut-pink/5 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-4 font-display text-donut-chocolate">Metode Pembayaran</h2>
        <p className="text-donut-chocolate/60 max-w-lg mx-auto mb-16 font-medium">Beli donat jadi lebih gampang dengan berbagai pilihan pembayaran yang tersedia.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAYMENT_METHODS.map((method, idx) => {
            const IconComponent = (Icons as any)[method.icon];
            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[40px] border border-donut-pink/10 shadow-xl flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-donut-cream rounded-2xl flex items-center justify-center text-donut-pink mb-8 group-hover:bg-donut-pink group-hover:text-white transition-colors duration-300 shadow-inner">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="text-xl font-display mb-4 text-donut-chocolate">{method.name}</h3>
                <p className="text-sm text-donut-chocolate/50 font-medium leading-relaxed">
                  {method.details}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
