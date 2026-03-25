import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/Experience';

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Experience />
    </motion.div>
  );
};

export default ExperiencePage;