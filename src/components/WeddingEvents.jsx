import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import Section from './Section';

const WeddingEvents = () => {
  return (
    <Section className="bg-ivory py-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="font-serif text-4xl md:text-6xl text-gold-dark mb-10 uppercase tracking-widest">
          Wedding Events
        </h2>
        
        {/* Simple single card layout for Reception */}
        <div className="flex justify-center">
            <motion.div 
               whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(212, 175, 55, 0.15)" }}
               className="group relative bg-white overflow-hidden max-w-lg w-full border border-gold/10 transition-all duration-300"
            >
                <div className="h-72 w-full overflow-hidden">
                    <img 
                        src="/wedd event.jpg" 
                        alt="Reception Venue" 
                        onError={(e) => e.target.style.display = 'none'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Fallback pattern/color if image missing */}
                    <div className="w-full h-full bg-gold/5 flex items-center justify-center">
                        <span className="font-script text-3xl text-gold opacity-30">Reception</span>
                    </div>
                </div>

                <div className="p-8 md:p-12 text-center text-taupe block">
                    <div className="mb-6 flex flex-col items-center gap-3">
                        <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-dark font-bold">Main Event</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-gold-dark mb-4 group-hover:text-gold transition-colors">
                            RECEPTION
                        </h3>
                    </div>

                    <div className="space-y-4 text-taupe/80 font-serif">
                        <div className="flex items-center justify-center gap-3">
                           <Calendar className="w-4 h-4 text-gold/60" />
                           <p>Sunday, April 26, 2026</p>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                           <Clock className="w-4 h-4 text-gold/60" />
                           <p>8:00 PM Onwards</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 max-w-xs mx-auto">
                           <MapPin className="w-4 h-4 text-gold/60 shrink-0" />
                           <p className="text-sm">Suvidha Royale, Jalandhar-Dalhousie By Pass Road</p>
                        </div>
                    </div>
                </div>
                
                {/* Decorative borders/corners on hover */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/10 group-hover:border-gold/40 transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/10 group-hover:border-gold/40 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/10 group-hover:border-gold/40 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/10 group-hover:border-gold/40 transition-colors duration-300" />
            </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default WeddingEvents;
