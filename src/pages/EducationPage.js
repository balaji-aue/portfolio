import React from 'react';
import { motion } from 'framer-motion';
import Education from '../components/Education';

const EducationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Education />
    </motion.div>
  );
};

export default EducationPage;