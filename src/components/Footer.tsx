import { MapPin, Phone, Camera, Clock, Heart } from 'lucide-react';
import { LOCATION_DETAILS } from '../constants';

export function Footer() {
  return (
    <footer id="location" className="bg-donut-chocolate text-white py-24 px-6 overflow-hidden relative">
      {/* Decorative donut in bg */}
      <div className="absolute top-0 right-0 opacity-10 translate-x-1/2 -translate-y-1/2 text-[400px] pointer-events-none">🍩</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-donut-pink rounded-full flex items-center justify-center text-white text-xl">🍩</div>
            <span className="text-3xl font-display font-bold">doncu.</span>
          </div>
          <p className="text-white/60 max-w-sm mb-12 text-lg leading-relaxed">
            Membawa kebahagiaan lewat donat lezat yang dibuat dengan penuh cinta di setiap gigitannya.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-2xl text-donut-pink"><MapPin size={24} /></div>
              <div>
                <p className="font-bold text-lg mb-1">Outlet Pangkalpinang</p>
                <p className="text-white/60 leading-relaxed">{LOCATION_DETAILS.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl text-donut-pink"><Phone size={24} /></div>
              <div>
                <p className="font-bold text-lg mb-1">Hubungi Kami</p>
                <p className="text-white/60">{LOCATION_DETAILS.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl text-donut-pink"><Clock size={24} /></div>
              <div>
                <p className="font-bold text-lg mb-1">Jam Operasional</p>
                <p className="text-white/60">{LOCATION_DETAILS.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-[40px] border border-white/10">
            <h3 className="text-2xl font-display mb-6">Stay Connected</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="flex-1 bg-white text-donut-chocolate py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-donut-pink hover:text-white transition-all"
              >
                <Camera size={20} />
                Follow Instagram
              </a>
              <button className="flex-1 border-2 border-white/20 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                Send DM
              </button>
            </div>
          </div>

          <div className="h-[300px] w-full rounded-[40px] overflow-hidden grayscale contrast-125 opacity-80 border-4 border-white/10 shadow-2xl">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.719702224098!2d106.1130635!3d-2.129744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22c10b784e9c7d%3A0xc3466a2e99d863f!2sPangkal%20Pinang%2C%20Bangka%20Liat%2C%20Kota%20Pangkal%20Pinang%2C%20Kepulauan%20Bangka%20Belitung!5e0!3m2!1sid!2sid!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-4">
        <p>© 2026 Doncu Donat. Made with <Heart size={14} className="inline text-donut-pink" /> in Pangkalpinang.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
