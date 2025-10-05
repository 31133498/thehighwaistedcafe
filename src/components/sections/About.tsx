import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');
  
  return (
    <section id="about" className="py-20 md:py-32 bg-background/80">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
              Every Cup Tells a Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At High Waisted Café, we believe that great coffee is more than just a drink; it's an experience. Our journey began with a simple passion for sourcing the finest beans from around the world and roasting them to perfection.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We pair our exquisite coffee with hand-crafted pastries, all served in a cozy and welcoming atmosphere. We're a place for community, conversation, and comfort. Welcome to our story.
            </p>
          </div>
          <div className="relative aspect-square max-w-md mx-auto w-full">
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl h-full w-full rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
