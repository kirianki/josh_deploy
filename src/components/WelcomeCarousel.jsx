import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeCarousel = ({ onClose }) => {
  const slides = [
    {
      title: "Welcome to Industry Navigator",
      description: "Discover and connect with service providers across various industries.",
      image: "/placeholder.svg",
    },
    {
      title: "Find the Right Services",
      description: "Explore companies and experts offering services in your industry.",
      image: "/placeholder.svg",
    },
    {
      title: "Make Informed Decisions",
      description: "Get detailed information about service providers to choose the best fit for your needs.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <Carousel className="w-full max-w-4xl relative z-10">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 overflow-hidden bg-white dark:bg-gray-800 shadow-2xl">
                  <CardContent className="flex flex-col md:flex-row items-center p-6 bg-gradient-to-r from-warm-100 to-warm-200 dark:from-cool-800 dark:to-cool-700 text-gray-800 dark:text-gray-100 rounded-lg">
                    <img src={slide.image} alt={slide.title} className="w-full md:w-1/2 h-48 md:h-64 object-cover mb-4 md:mb-0 md:mr-6 rounded-md" />
                    <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-xl mb-6">{slide.description}</p>
                      {index === slides.length - 1 && (
                        <Button onClick={onClose} variant="secondary" size="lg" className="bg-cool-700 hover:bg-cool-600 text-white dark:bg-warm-300 dark:hover:bg-warm-400 dark:text-gray-800 transition-colors">
                          Start Exploring
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600" />
        </Carousel>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeCarousel;