export default function ShippingStates() {
  const states = [
    'Alaska', 'Arizona', 'California', 'Colorado', 'Connecticut', 'DC', 'Delaware',
    'Illinois', 'Maine', 'Massachusetts', 'Maryland', 'Michigan', 'Minnesota',
    'Missouri', 'Montana', 'Nevada', 'New Jersey', 'New Mexico', 'New York',
    'Ohio', 'Oregon', 'Rhode Island', 'Vermont', 'Virginia', 'Washington'
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            We Ship To These States
          </h2>
          <p className="text-muted-foreground">Currently available for delivery in the following US states</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {states.map((state) => (
              <div
                key={state}
                className="bg-background border border-border rounded-lg p-3 text-center hover:border-primary transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
