"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { menuItems, type MenuItem } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart } from 'lucide-react';

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const image = PlaceHolderImages.find(img => img.id === item.imageId);
  const phoneNumber = "13146956156";
  const message = `Hi! I'd like to order the ${item.name}.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="flex flex-col overflow-hidden bg-card border-none transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
      {image && (
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-foreground">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto pt-4">
        <p className="text-lg font-bold text-primary">{item.price}</p>
        <Button asChild size="sm">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Order
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-semibold text-primary">Our Menu</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mt-2">Explore Our Infused Products</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted selection of cannabis-infused delights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
