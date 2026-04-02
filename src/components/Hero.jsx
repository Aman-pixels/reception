import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-20">
      {/* Background Image with Fallback */}
      <div 
        className="absolute inset-0 z-0 bg-ivory"
        style={{
          backgroundImage: "url('/wedd main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-ivory" />
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center px-4 max-w-4xl"
      >
        <span className="font-serif text-gold tracking-widest text-sm uppercase mb-4 block">
          The Wedding of
        </span>
        
        <h1 className="font-script text-gold-dark text-6xl md:text-8xl mb-6 text-glow-gold">
          Rohin Saini & Damini Saini
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 font-serif text-taupe/80 text-sm md:text-base">
          <div className="space-y-1">
            <p className="font-bold text-taupe uppercase tracking-wider">Son of</p>
            <p>Mr. Pawan Saini & Mrs. Reena Saini</p>
            <p className="text-xs italic">(Jalandhar)</p>
          </div>
          
          <div className="h-10 w-[1px] bg-gold/30 hidden md:block" />

          <div className="space-y-1">
            <p className="font-bold text-taupe uppercase tracking-wider">Daughter of</p>
            <p>Mr. Rajesh Saini & Mrs. Meenu Saini</p>
            <p className="text-xs italic">(Pathankot)</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
