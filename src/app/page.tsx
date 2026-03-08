import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import Mission from '@/components/sections/Mission';
import UsageGuide from '@/components/sections/UsageGuide';
import ShippingStates from '@/components/sections/ShippingStates';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Mission />
        <UsageGuide />
        <ShippingStates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}