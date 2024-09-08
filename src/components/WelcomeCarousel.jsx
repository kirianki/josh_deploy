import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeCarousel = ({ onClose }) => {
  const slides = [
    {
      title: "Welcome to Industry Navigator",
      description: "Explore diverse industries and connect with professionals.",
      image: "/placeholder.svg",
    },
    {
      title: "Discover Opportunities",
      description: "Find companies and experts in your field of interest.",
      image: "/placeholder.svg",
    },
    {
      title: "Stay Informed",
      description: "Get the latest insights on industry trends and innovations.",
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
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
        <Carousel className="w-full max-w-4xl relative z-10">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 overflow-hidden bg-transparent shadow-2xl">
                  <CardContent className="flex flex-col md:flex-row items-center p-6 bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white rounded-lg">
                    <img src={slide.image} alt={slide.title} className="w-full md:w-1/2 h-48 md:h-64 object-cover mb-4 md:mb-0 md:mr-6 rounded-md" />
                    <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-xl mb-6">{slide.description}</p>
                      {index === slides.length - 1 && (
                        <Button onClick={onClose} variant="secondary" size="lg" className="hover:bg-white hover:text-blue-600 transition-colors">
                          Get Started
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeCarousel;