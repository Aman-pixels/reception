import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import CelebrationDetails from './components/CelebrationDetails';
import WeddingEvents from './components/WeddingEvents';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-ivory min-h-screen selection:bg-gold/30 selection:text-gold-dark">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold-dark z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Main Wrapper with Paper Effect */}
      <div className="max-w-7xl mx-auto bg-ivory shadow-paper relative">
        <Hero />
        
        <main className="divide-y divide-gold/10">
          <CelebrationDetails />
          <WeddingEvents />
        </main>
        
        <Footer />
      </div>

      <AudioPlayer />
      
      {/* Decorative Border around the entire paper */}
      <div className="hidden lg:block fixed inset-4 border border-gold/5 pointer-events-none z-40" />
    </div>
  );
}

export default App;
