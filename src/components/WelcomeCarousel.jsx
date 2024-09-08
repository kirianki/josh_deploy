import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 overflow-hidden">
                <CardContent className="flex flex-col md:flex-row items-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <img src={slide.image} alt={slide.title} className="w-full md:w-1/2 h-48 md:h-64 object-cover mb-4 md:mb-0 md:mr-6 rounded-md" />
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl mb-6">{slide.description}</p>
                    {index === slides.length - 1 && (
                      <Button onClick={onClose} variant="secondary" size="lg">
                        Get Started
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default WelcomeCarousel;