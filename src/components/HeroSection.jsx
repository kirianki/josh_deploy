import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = ({ onGetStarted }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-neon-purple to-neon-blue text-white py-20 px-4 md:px-8 rounded-lg shadow-xl mb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Discover Future-Ready Services
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Connect with cutting-edge service providers in your industry
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={onGetStarted}
            className="bg-neon-blue text-white hover:bg-neon-purple transition-colors duration-300 animate-float"
          >
            Explore Services
          </Button>
        </motion.div>
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-neon-blue rounded-full animate-glow"></div>
    </motion.div>
  );
};

export default HeroSection;