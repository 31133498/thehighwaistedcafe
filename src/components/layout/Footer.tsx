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