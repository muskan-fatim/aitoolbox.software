import Link from "next/link";


const toolLinks = [
  { name: "Logo Generator", href: "/logo-generator" },
  { name: "Blog Writer", href: "/blog-writer" },
  { name: "Grammar Fixer", href: "/grammar-fixer" },
  { name: "Idea Generator", href: "/idea-generator" },
  { name: "Resume Builder", href: "/resume-builder" },
  { name: "Image Generator", href: "/image-generator" },
  { name: "Anime AI Generator", href: "/anime-ai-generator" },
  { name: "YouTube Summarizer", href: "/youtube-summarizer" },
  { name: "Code Explainer", href: "/code-explainer" },
  { name: "LinkedIn Post Generator", href: "/linkedin-post-generator" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

const infoLinks = [
  { name: "About", href: "/about" },
  { name: "Settings", href: "/settings" },
  { name: "GitHub", href: "https://github.com/aitoolbox" },
];

export default function Footer() {
  const mid = Math.ceil(toolLinks.length / 2);
  const toolsCol1 = toolLinks.slice(0, mid);
  const toolsCol2 = toolLinks.slice(mid);

  return (
    <footer className="w-full border-t bg-background text-muted-foreground text-sm mt-8">

      <div className="max-w-6xl mx-auto w-full px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-start ">
        {/* Logo */}
        <div className="flex flex-col items-start gap-2 md:col-span-2">
          <img
            src="/logo.png"
            alt="AIToolbox Logo"
            className="h-10 w-auto mb-2"
          />
          <span className="font-mono text-lg text-foreground">AIToolbox</span>
        </div>
        <div>
        {/* Tools Col - 1 */}
         <h3 className=" font-semibold text-foreground mb-2">
          AI Tools
          </h3>

          <ul className="space-y-1">
            {toolsCol1.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group relative w-max block hover:text-foreground transition-colors duration-200">
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full transition-all h-0.5 bg-foreground"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Tools Col - 2 */}
        <div>
        <h3 className=" font-semibold text-foreground mb-2">

        AI Tools</h3>

          <ul className="space-y-1">
            {toolsCol2.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group relative w-max block hover:text-foreground transition-colors duration-200">
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full transition-all h-0.5 bg-foreground"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Info Col */}
        <div>
        <h3 className="font-semibold text-foreground mb-2">
  Quick Links 
</h3>

          <ul className="space-y-1">
            {infoLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group relative w-max block hover:text-foreground transition-colors duration-200">
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full transition-all h-0.5 bg-foreground"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full border-t bg-background text-muted-foreground text-sm mt-8">
  <div className="max-w-6xl mx-auto w-full px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-start">

    {/* Other footer columns here */}

    {/* Bottom section */}
    <div className="col-span-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-left">
      <div className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} AI Toolbox. All rights reserved.
      </div>
      <div className="flex gap-4 text-xs">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative w-max block hover:text-foreground"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all h-0.5 bg-foreground"></span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

    </footer>
  );
}
