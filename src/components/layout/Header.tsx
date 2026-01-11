"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#mission', label: 'Mission' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-lg backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="#home" className="flex items-center gap-2">
            <Image src="https://ik.imagekit.io/5iomqoxai6/logo%20(2).jpeg?updatedAt=1759763103032" alt="High Waisted Café Logo" width={50} height={50} className="rounded-full" />
            <span className="text-xl font-bold font-headline text-foreground">High Waisted Café</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="#menu">Order Now</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-card p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-6 border-b">
                     <Link href="#home" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <Image src="https://ik.imagekit.io/5iomqoxai6/logo%20(2).jpeg?updatedAt=1759763103032" alt="High Waisted Café Logo" width={40} height={40} className="rounded-full" />
                         <span className="text-lg font-bold font-headline text-foreground">High Waisted Café</span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col gap-2 p-6 text-lg">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors font-medium p-3 rounded-lg hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-6 border-t">
                    <Button asChild className="w-full">
                      <Link href="#menu" onClick={() => setMobileMenuOpen(false)}>Order Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}