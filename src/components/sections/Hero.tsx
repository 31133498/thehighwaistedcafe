"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={{ loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-xl">
            Cannabis Infused Products & Treats
          </h1>
          <p className="mt-4 text-md md:text-lg max-w-3xl text-slate-200">
            Welcome to <span className="font-semibold font-headline tracking-wide text-white">High Waisted Café</span>, where quality and relaxation meet.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg py-7 px-8">
              <Link href="#menu">Explore Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-white/70 animate-bounce" />
          </Link>
        </div>
    </section>
  );
}
