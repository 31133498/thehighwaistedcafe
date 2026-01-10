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
              High Quality THC Infused Products
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to High Waisted Cafe’, where we specialize in high quality THC infused products/ treats with a buzz. That will help you to relax, vibe out, and or achieve a restful night’s sleep.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in March 2024 by LaQuita “Que” Syms, a St.Louis native who is a cannabis enthusiast and connoisseur. Que studied cannabis science at Saint Louis University. Also, has a degree in Healthcare Management from Missouri Baptist University.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our cannabis infused product line was created in order to give people an alternative holistic approach to their pain management needs, and to promote healing for conditions such as anxiety, PTSD, promote relaxation, euphoria, and restful sleep.
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
