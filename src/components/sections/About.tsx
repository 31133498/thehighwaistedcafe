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
              Wellness Meets the Power of Nature
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to High Waisted Cafe, where our passion for wellness meets the power of nature. Founded in 2023 by Laquita Syms, a dedicated cannabis enthusiast and connoisseur, our mission is to provide high-quality, safe, and effective cannabis-infused products designed to enhance your well-being.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Laquita, a 2024 graduate of St. Louis University's Cannabis Science program, meticulously developed our product line to offer a holistic alternative for pain management, anxiety relief, depression support, improved sleep, and profound relaxation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the purity and potency of our ingredients. All High Waisted Cafe products are handcrafted by Laquita herself, using only organically sourced cannabis from the finest farms in California and Oregon. Experience the difference that care, expertise, and premium natural ingredients can make in your journey to better health.
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
