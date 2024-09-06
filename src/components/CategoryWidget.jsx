import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CategoryWidget = ({ category, onSelect }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <p className="text-sm md:text-base text-gray-600 mb-4">
          {`${category.companies.length} companies • ${category.professionals.length} professionals`}
        </p>
        <Button 
          className="w-full flex items-center justify-center text-sm md:text-base" 
          onClick={() => onSelect(category)}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryWidget;