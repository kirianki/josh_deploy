import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = ({ industries, selectedIndustry, onSelectIndustry }) => {
  return (
    <div className="w-64 bg-white shadow-md h-screen flex flex-col">
      <div className="p-4 bg-gray-800 text-white">
        <h2 className="text-xl font-bold">Industry Navigator</h2>
      </div>
      <ScrollArea className="flex-1 p-4">
        {industries.map((industry) => (
          <Button
            key={industry.name}
            variant={selectedIndustry === industry.name ? "default" : "ghost"}
            className="w-full justify-start mb-2 text-left"
            onClick={() => onSelectIndustry(industry.name)}
          >
            {industry.name}
          </Button>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Sidebar;