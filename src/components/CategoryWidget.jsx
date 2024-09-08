import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const CategoryWidget = ({ category, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 border-neon-blue border-opacity-50 backdrop-blur-lg">
        <CardHeader className="bg-gradient-to-r from-neon-purple to-neon-blue p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl text-white">{category.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 flex-grow flex flex-col justify-between">
          <p className="text-sm md:text-base text-gray-300 mb-4">
            {`${category.companies.length} companies • ${category.professionals.length} professionals`}
          </p>
          <Button 
            className="w-full flex items-center justify-center text-sm md:text-base mt-auto bg-neon-blue hover:bg-neon-purple transition-colors duration-300" 
            onClick={() => onSelect(category)}
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CategoryWidget;