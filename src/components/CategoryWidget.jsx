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
      <Card className="futuristic-card h-full flex flex-col">
        <CardHeader className="futuristic-gradient p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl text-gray-800 dark:text-gray-200">{category.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 flex-grow flex flex-col justify-between">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            {`${category.companies.length} companies • ${category.professionals.length} professionals`}
          </p>
          <Button 
            className="futuristic-button w-full flex items-center justify-center text-sm md:text-base mt-auto" 
            onClick={() => onSelect(category)}
          >
            Explore Future
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CategoryWidget;