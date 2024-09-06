import React from 'react';
import { Button } from "@/components/ui/button";

const Sidebar = ({ industries, selectedIndustry, onSelectIndustry }) => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Industries</h2>
      {industries.map((industry) => (
        <Button
          key={industry.name}
          variant={selectedIndustry === industry.name ? "default" : "ghost"}
          className="w-full justify-start mb-2"
          onClick={() => onSelectIndustry(industry.name)}
        >
          {industry.name}
        </Button>
      ))}
    </div>
  );
};

export default Sidebar;