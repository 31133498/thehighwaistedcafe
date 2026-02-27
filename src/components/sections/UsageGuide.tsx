import { AlertTriangle, UserCheck, Utensils, CupSoda, Droplets, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-3 border-amber-500/20 bg-amber-500/5 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <UserCheck size={120} />
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-amber-500 text-white p-3 rounded-xl">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">🔞 Age Requirement (Mandatory)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p className="font-medium text-foreground">
                All products sold on this website are strictly for adults only.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You must be <span className="text-amber-500 font-bold text-xl">21 years of age or older</span> to purchase or use any product on this site. 
                By accessing this website and purchasing our products, you confirm that you meet the legal age requirement in your location.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-headline font-bold text-foreground">📌 How to Use High Waisted Products</h3>
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