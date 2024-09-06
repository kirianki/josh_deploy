import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CategoryWidget from '../components/CategoryWidget';
import TaskBar from '../components/TaskBar';
import CategoryDetails from '../components/CategoryDetails';
import { industriesData } from '../data/industriesData';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData.industries[0].name);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectIndustry = (industryName) => {
    setSelectedIndustry(industryName);
    setSelectedCategory(null);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const selectedIndustryData = industriesData.industries.find(
    (industry) => industry.name === selectedIndustry
  );

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TaskBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          industries={industriesData.industries}
          selectedIndustry={selectedIndustry}
          onSelectIndustry={handleSelectIndustry}
        />
        <div className="flex-1 p-8 overflow-y-auto">
          <Card className="mb-6 bg-white shadow-lg">
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold text-gray-800">{selectedIndustry}</h1>
              <p className="text-gray-600 mt-2">Explore companies and professionals in this industry</p>
            </CardContent>
          </Card>
          {selectedCategory ? (
            <CategoryDetails category={selectedCategory} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedIndustryData.categories.map((category) => (
                <CategoryWidget
                  key={category.name}
                  category={category}
                  onSelect={handleSelectCategory}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;