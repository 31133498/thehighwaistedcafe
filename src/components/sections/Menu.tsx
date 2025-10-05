"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { menuItems, type MenuItem } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from 'lucide-react';

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const { toast } = useToast();
  const image = PlaceHolderImages.find(img => img.id === item.imageId);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your order.`,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm border-secondary/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {image && (
        <div className="aspect-[4/3] relative">
          <Image
            src={image.imageUrl}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto pt-4">
        <p className="text-lg font-semibold text-foreground">{item.price}</p>
        <Button onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Menu</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-crafted with love, from our kitchen to your cup.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
