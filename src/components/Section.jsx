import { motion } from 'framer-motion';

const Section = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-20 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
