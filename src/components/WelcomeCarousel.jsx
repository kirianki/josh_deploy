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
    <Carousel className="w-full max-w-4xl mx-auto mb-8">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <img src={slide.image} alt={slide.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="text-center text-gray-600">{slide.description}</p>
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