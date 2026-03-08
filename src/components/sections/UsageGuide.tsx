import { AlertTriangle, UserCheck, Utensils, CupSoda, Droplets, Clock, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const usageSteps = [
  {
    icon: Utensils,
    title: "Edible Snacks",
    description: "Consume according to your personal tolerance level. Start with 1–2 bites, then wait at least 15 minutes to assess how you feel before consuming more. Enjoy responsibly.",
  },
  {
    icon: CupSoda,
    title: "THC Koolaid Drinks",
    description: "Sip slowly based on your tolerance level. Wait about 15 minutes before taking more to understand how your body reacts.",
  },
  {
    icon: Droplets,
    title: "Tinctures",
    description: "Use the dropper to measure your desired amount. Place the tincture under your tongue or mix it into any beverage of your choice.",
  },
];

const shippingStates = [
  "Alaska", "Arizona", "California", "Colorado", "Connecticut", "DC", "Delaware", 
  "Illinois", "Maine", "Massachusetts", "Maryland", "Michigan", "Minnesota", 
  "Missouri", "Montana", "Nevada", "New Jersey", "New Mexico", "New York", 
  "Ohio", "Oregon", "Rhode Island", "Vermont", "Virginia", "Washington"
];

export default function UsageGuide() {
  return (
    <section id="usage-guide" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-amber-500/10 text-amber-500">
            <AlertTriangle className="h-6 w-6 mr-2" />
            <span className="font-semibold uppercase tracking-wider text-sm">Important Notice</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mt-2 italic">
            Disclaimer & Product Usage Guide
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-amber-500/20 bg-amber-500/5 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <UserCheck size={120} />
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-amber-500 text-white p-3 rounded-xl">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Age Requirement</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-medium text-foreground">
                All products are strictly for adults only.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                You must be <span className="text-amber-500 font-bold">21 years of age or older</span> to purchase or use any product. 
                By accessing this site, you confirm you meet the legal age requirement in your location.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Truck size={120} />
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary text-white p-3 rounded-xl">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Shipping Availability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">We currently ship to the following US states and districts:</p>
              <div className="flex flex-wrap gap-2">
                {shippingStates.map((state) => (
                  <Badge key={state} variant="secondary" className="bg-background/50 text-foreground border-primary/10">
                    {state}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-headline font-bold text-foreground">How to Use High Waisted Products</h3>
            <p className="text-muted-foreground mt-2 italic">Start slow and find your perfect vibe.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {usageSteps.map((step) => (
              <Card key={step.title} className="bg-card/50 border-none shadow-xl hover:shadow-primary/5 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/10 border">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="bg-primary/20 p-4 rounded-full">
                    <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">Patience is Key</h4>
                    <p className="text-muted-foreground leading-relaxed">
                        Depending on your tolerance level, you may repeat as desired. 
                        Effects may take <span className="text-foreground font-semibold">30 minutes or more</span> to be felt and can last up to <span className="text-foreground font-semibold">3 hours or longer</span>.
                    </p>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
