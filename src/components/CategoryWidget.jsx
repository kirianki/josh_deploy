import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const CategoryWidget = ({ category, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col bg-gray-100 border-gray-200">
        <CardHeader className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl">{category.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 flex-grow flex flex-col justify-between">
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {`${category.companies.length} companies • ${category.professionals.length} professionals`}
          </p>
          <Button 
            className="w-full flex items-center justify-center text-sm md:text-base mt-auto bg-gray-600 text-white hover:bg-gray-500" 
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