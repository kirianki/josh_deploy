import React from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CategoryWidget = ({ category, onSelect }) => {
  return (
    <Card className="mb-4 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onSelect(category)}>
      <CardHeader className="text-center">
        <img src={`/placeholder.svg`} alt={category.name} className="w-24 h-24 mx-auto mb-2" />
        <CardTitle>{category.name}</CardTitle>
      </CardHeader>
      <div className="p-4">
        <Button className="w-full" onClick={(e) => { e.stopPropagation(); onSelect(category); }}>
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default CategoryWidget;