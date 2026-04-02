import { Calendar, Clock, MapPin } from 'lucide-react';
import Section from './Section';

const CelebrationDetails = () => {
  return (
    <Section className="bg-ivory py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/40 border border-gold/10 p-10 md:p-16 text-center space-y-12 backdrop-blur-sm shadow-paper">
          <h2 className="font-serif text-3xl md:text-5xl text-gold-dark mb-8 uppercase tracking-widest">
            Wedding Celebration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-serif text-taupe/90">
            {/* Date Section */}
            <div className="flex flex-col items-center gap-4">
              <Calendar className="w-8 h-8 text-gold stroke-1 opacity-80" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] font-bold text-gold-dark mb-2">The Date</dt>
                <dd className="text-lg md:text-xl">Sunday, April 26, 2026</dd>
              </div>
            </div>

            {/* Time Section */}
            <div className="flex flex-col items-center gap-4">
              <Clock className="w-8 h-8 text-gold stroke-1 opacity-80" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] font-bold text-gold-dark mb-2">The Time</dt>
                <dd className="text-lg md:text-xl">8:00 PM Onwards</dd>
              </div>
            </div>

            {/* Venue Section */}
            <div className="flex flex-col items-center gap-4">
              <MapPin className="w-8 h-8 text-gold stroke-1 opacity-80" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] font-bold text-gold-dark mb-2">The Venue</dt>
                <dd className="text-lg md:text-xl leading-relaxed">Suvidha Royale, Jalandhar-Dalhousie Bypass Road</dd>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gold/20 max-w-xs mx-auto">
             <p className="font-script text-3xl text-gold-dark italic">Save the Date</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CelebrationDetails;
