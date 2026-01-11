import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');
  
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] max-w-md mx-auto w-full lg:order-last">
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl h-full w-full rounded-2xl">
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
          <div className="space-y-6 text-center lg:text-left">
             <div className="text-center lg:text-left">
                <p className="font-semibold text-primary">About Us</p>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mt-2">
                High Quality THC Infused Products
                </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to High Waisted Cafe’, where we specialize in high quality THC infused products/ treats with a buzz. That will help you to relax, vibe out, and or achieve a restful night’s sleep.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded in March 2024 by LaQuita “Que” Syms, a St.Louis native who is a cannabis enthusiast and connoisseur. Que studied cannabis science at Saint Louis University. Also, has a degree in Healthcare Management from Missouri Baptist University.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our cannabis infused product line was created in order to give people an alternative holistic approach to their pain management needs, and to promote healing for conditions such as anxiety, PTSD, promote relaxation, euphoria, and restful sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
