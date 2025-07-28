import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const toolLinks = [
  { name: "Logo Generator", href: "/logo-generator" },
  { name: "Blog Writer", href: "/blog-writer" },
  { name: "Grammar Fixer", href: "/grammar-fixer" },
  { name: "Idea Generator", href: "/idea-generator" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "About", href: "/about" },
];

const socialLinks = [
    { name: "GitHub", logo: Github, href: "https://github.com/aitoolbox"},
    { name: "Twitter", logo: Twitter, href: "https://twitter.com/aitoolbox" },
    { name: "LinkedIn", logo: Linkedin, href: "https://linkedin.com/aitoolbox" },
    { name: "Contact", logo: Mail, href: "/contact" },
];


export default function Footer() {
  return (
    <footer className="w-full border-t bg-background text-muted-foreground text-sm mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-4">

        {/* Tool Links */}

        <nav className="flex flex-wrap gap-4 justify-center">
          {toolLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.name}
            </Link>
          ))}
        </nav>

        <img src="/logo.png" alt="AIToolbox Logo" className="h-8 w-auto mx-auto md:mx-0 transition-transform hover:rotate-360" />
        
        {/* Legal Links */}

        <nav className="flex flex-wrap gap-4 justify-center">
          {legalLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-4">
        <div className="text-center text-xs">
        &copy; {new Date().getFullYear()} AI Toolbox. All rights reserved.
      </div>

      {/* Social Links */}

      <nav className="flex flex-wrap gap-4 justify-center">
          {socialLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
                <link.logo className="h-5 w-5" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
      
    </footer>
  );
}