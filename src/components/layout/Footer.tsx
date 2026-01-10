import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  { href: 'https://www.instagram.com/highwaistedcafe', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-background/90 backdrop-blur-sm border-t border-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="#home" className="flex items-center gap-3 text-xl font-headline font-bold text-primary">
            <Image src="https://ik.imagekit.io/5iomqoxai6/logo%20(2).jpeg?updatedAt=1759763103032" alt="High Waisted Café Logo" width={100} height={100} className="rounded-full" />
          </Link>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} High Waisted Café. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
