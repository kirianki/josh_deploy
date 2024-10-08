import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { motion } from "framer-motion";

const Sidebar = ({ industries, selectedIndustry, onSelectIndustry }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIndustries = industries.filter(industry =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={false}
      animate={{ width: "100%" }}
      className="bg-white dark:bg-gray-800 shadow-md h-full flex flex-col"
    >
      <div className="p-4 bg-gray-600 dark:bg-gray-700 text-white">
        <h2 className="text-xl font-bold">Industry Navigator</h2>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search industries..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        {filteredIndustries.map((industry) => (
          <Button
            key={industry.name}
            variant={selectedIndustry === industry.name ? "default" : "ghost"}
            className={`w-full justify-start mb-2 text-left ${selectedIndustry === industry.name ? "bg-gray-600" : ""}`}
            onClick={() => onSelectIndustry(industry.name)}
          >
            {industry.name}
          </Button>
        ))}
      </ScrollArea>
    </motion.div>
  );
};

export default Sidebar;