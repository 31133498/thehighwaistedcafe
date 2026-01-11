import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.6 5.82s.51.5 0 0A4.24 4.24 0 0 1 12.3 3v8.1a3.86 3.86 0 1 0 3.85-3.85A4 4 0 0 1 16.6 5.82Z"></path>
    </svg>
  );

const socialLinks = [
  { href: 'https://www.instagram.com/highwaistedcafe', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.tiktok.com/@highwaistedcafe', icon: TikTokIcon, label: 'TikTok' },
];

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
                <Link href="#home" className="flex items-center gap-2 mb-4">
                    <Image src="https://ik.imagekit.io/5iomqoxai6/logo%20(2).jpeg?updatedAt=1759763103032" alt="High Waisted Café Logo" width={50} height={50} className="rounded-full" />
                    <span className="text-xl font-bold font-headline text-foreground">High Waisted Café</span>
                </Link>
                <p className="text-muted-foreground text-sm max-w-xs">Premium, lab-tested cannabis-infused treats and culinary essentials.</p>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                    {footerLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div>
                 <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Follow Us</h3>
                 <div className="flex gap-4 mt-4">
                    {socialLinks.map((link) => (
                    <Link key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <link.icon className="h-6 w-6" />
                    </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} High Waisted Café. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
