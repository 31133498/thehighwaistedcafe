"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="home" className="relative h-screen w-full">
      <Carousel
        className="w-full h-full"
        opts={{ loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
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
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <CarouselPrevious className="relative static translate-x-0 text-white bg-white/20 hover:bg-white/30 border-white/50" />
            <CarouselNext className="relative static translate-x-0 text-white bg-white/20 hover:bg-white/30 border-white/50" />
        </div>
      </Carousel>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg">
          Cannabis Infused Products & Treats
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl font-light">
          at <span className="font-semibold font-headline tracking-wide">High Waisted Café</span>
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-8">
          <Link href="#menu">Order Now</Link>
        </Button>
      </div>
    </section>
  );
}
