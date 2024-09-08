import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CategoryWidget from '../components/CategoryWidget';
import TaskBar from '../components/TaskBar';
import CategoryDetails from '../components/CategoryDetails';
import WelcomeCarousel from '../components/WelcomeCarousel';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import IndustrySelectionModal from '../components/IndustrySelectionModal';
import { industriesData } from '../data/industriesData';
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData.industries[0].name);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showIndustryModal, setShowIndustryModal] = useState(false);

  const handleSelectIndustry = (industryName) => {
    setSelectedIndustry(industryName);
    setSelectedCategory(null);
    setSidebarOpen(false);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleGetStarted = () => {
    setShowIndustryModal(true);
  };

  const selectedIndustryData = industriesData.industries.find(
    (industry) => industry.name === selectedIndustry
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {showWelcome && <WelcomeCarousel onClose={() => setShowWelcome(false)} />}
      <TaskBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="md:hidden">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2 mt-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar
                industries={industriesData.industries}
                selectedIndustry={selectedIndustry}
                onSelectIndustry={handleSelectIndustry}
              />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:block">
          <Sidebar
            industries={industriesData.industries}
            selectedIndustry={selectedIndustry}
            onSelectIndustry={handleSelectIndustry}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            <HeroSection onGetStarted={handleGetStarted} />
            <Card className="mb-6 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">{selectedIndustry}</h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">Explore companies and professionals in this industry</p>
              </CardContent>
            </Card>
            <AnimatePresence mode="wait">
              {selectedCategory ? (
                <motion.div
                  key="category-details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryDetails category={selectedCategory} onBack={() => setSelectedCategory(null)} />
                </motion.div>
              ) : (
                <motion.div
                  key="category-widgets"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                  {selectedIndustryData.categories.map((category) => (
                    <CategoryWidget
                      key={category.name}
                      category={category}
                      onSelect={handleSelectCategory}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
      <IndustrySelectionModal
        isOpen={showIndustryModal}
        onClose={() => setShowIndustryModal(false)}
        industries={industriesData.industries}
        onSelectIndustry={handleSelectIndustry}
      />
    </div>
  );
};

export default Index;