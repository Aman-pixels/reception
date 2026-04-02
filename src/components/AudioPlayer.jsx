import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
     if (audioRef.current) {
        if (isPlaying) {
           audioRef.current.pause();
        } else {
           audioRef.current.play().catch(e => console.log("Audio play blocked by browser", e));
        }
        setIsPlaying(!isPlaying);
     }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio 
        ref={audioRef} 
        src="/background.mp3" 
        loop 
      />
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-14 h-14 bg-white/80 backdrop-blur-md border border-gold/20 rounded-full shadow-lg flex items-center justify-center text-gold-dark hover:text-gold transition-colors duration-300"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <AnimatePresence mode="wait">
            {isPlaying ? (
                <motion.div 
                   key="playing" 
                   initial={{ opacity: 0, rotate: -20 }} 
                   animate={{ opacity: 1, rotate: 0 }} 
                   exit={{ opacity: 0, rotate: 20 }}
                >
                   <Volume2 className="w-6 h-6" />
                </motion.div>
            ) : (
                <motion.div 
                   key="paused" 
                   initial={{ opacity: 0, rotate: -20 }} 
                   animate={{ opacity: 1, rotate: 0 }} 
                   exit={{ opacity: 0, rotate: 20 }}
                >
                   <VolumeX className="w-6 h-6" />
                </motion.div>
            )}
        </AnimatePresence>
        
        {/* Simple rhythmic animation when playing */}
        {isPlaying && (
            <div className="absolute -top-1 -right-1 flex gap-1 items-end h-4">
                {[1, 2, 3].map(i => (
                    <motion.div 
                        key={i}
                        animate={{ height: [4, 12, 4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1 bg-gold rounded-full"
                    />
                ))}
            </div>
        )}
      </motion.button>
    </div>
  );
};

export default AudioPlayer;
