import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const WelcomeCarousel = () => {
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
    <Carousel className="w-full h-screen">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="h-full">
            <Card className="h-full border-0">
              <CardContent className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <img src={slide.image} alt={slide.title} className="w-full max-w-md h-64 object-cover mb-8 rounded-md" />
                <h2 className="text-4xl font-bold mb-4 text-center">{slide.title}</h2>
                <p className="text-xl text-center max-w-2xl">{slide.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default WelcomeCarousel;