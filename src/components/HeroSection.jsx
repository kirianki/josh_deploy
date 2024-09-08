import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 md:px-8 rounded-lg shadow-xl mb-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Industry</h1>
        <p className="text-xl md:text-2xl mb-8">Connect with top companies and professionals in your field</p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

export default HeroSection;