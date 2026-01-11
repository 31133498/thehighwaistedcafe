import { CheckCircle } from "lucide-react";

const features = [
    { name: "Quality Ingredients", description: "Only the best, lab-tested ingredients for safe and effective products." },
    { name: "Holistic Wellness", description: "An alternative approach to wellness and pain management." },
    { name: "Customer Focused", description: "Your health and satisfaction are our top priorities." },
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <p className="font-semibold text-primary">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mt-2">
            Promoting Wellness Through Quality
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At High Waisted Café, our mission is to provide high-quality, safe, and effective cannabis-infused products that promote wellness and offer a natural path to relaxation and relief.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-6 w-6"/>
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-foreground">{feature.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
