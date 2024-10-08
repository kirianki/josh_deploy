import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CategoryWidget from '../components/CategoryWidget';
import TaskBar from '../components/TaskBar';
import CategoryDetails from '../components/CategoryDetails';
import WelcomeCarousel from '../components/WelcomeCarousel';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import IndustrySelectionModal from '../components/IndustrySelectionModal';
import SearchResults from '../components/SearchResults';
import { industriesData } from '../data/industriesData';
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Index = () => {
  const { industryName, categoryName } = useParams();
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(industryName || industriesData.industries[0].name);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showWelcome, setShowWelcome] = useState(!industryName && !categoryName);
  const [showIndustryModal, setShowIndustryModal] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowSidebar(!mobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (industryName && categoryName) {
      const industry = industriesData.industries.find(i => i.name === industryName);
      const category = industry?.categories.find(c => c.name === categoryName);
      if (category) {
        setSelectedIndustry(industryName);
        setSelectedCategory(category);
      }
    }
  }, [industryName, categoryName]);

  const handleSelectIndustry = (industryName) => {
    setSelectedIndustry(industryName);
    setSelectedCategory(null);
    setSearchResults(null);
    navigate('/');
    if (isMobile) setShowSidebar(false);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchResults(null);
    navigate(`/industry/${selectedIndustry}/category/${category.name}`);
    if (isMobile) setShowSidebar(false);
  };

  const handleGetStarted = () => {
    setShowIndustryModal(true);
  };

  const handleSearch = (query) => {
    const results = [];
    industriesData.industries.forEach((industry) => {
      if (industry.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({ name: industry.name, type: 'Industry' });
      }
      industry.categories.forEach((category) => {
        if (category.name.toLowerCase().includes(query.toLowerCase())) {
          results.push({ ...category, type: 'Category', industryName: industry.name });
        }
      });
    });
    setSearchResults(results);
    if (isMobile) setShowSidebar(false);
  };

  const selectedIndustryData = industriesData.industries.find(
    (industry) => industry.name === selectedIndustry
  );

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const renderSidebar = () => (
    <Sidebar
      industries={industriesData.industries}
      selectedIndustry={selectedIndustry}
      onSelectIndustry={handleSelectIndustry}
    />
  );

  return (
    <div className="flex flex-col min-h-screen bg-warm-50 dark:bg-cool-900">
      {showWelcome && <WelcomeCarousel onClose={() => setShowWelcome(false)} />}
      <TaskBar onSearch={handleSearch} onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              {renderSidebar()}
            </SheetContent>
          </Sheet>
        ) : (
          <div className="w-64 flex-shrink-0 overflow-y-auto">
            {renderSidebar()}
          </div>
        )}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            <HeroSection onGetStarted={handleGetStarted} />
            <Card className="mb-6 bg-white dark:bg-cool-800 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">{selectedIndustry}</h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">Explore service providers and professionals in this industry</p>
              </CardContent>
            </Card>
            <AnimatePresence mode="wait">
              {searchResults ? (
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SearchResults
                    results={searchResults}
                    onSelectIndustry={handleSelectIndustry}
                    onSelectCategory={handleSelectCategory}
                  />
                </motion.div>
              ) : selectedCategory ? (
                <motion.div
                  key="category-details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryDetails category={selectedCategory} onBack={() => {
                    setSelectedCategory(null);
                    navigate('/');
                  }} />
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