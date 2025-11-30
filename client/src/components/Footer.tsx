interface FooterProps {
  name: string;
  currentYear?: number;
}

export default function Footer({ name, currentYear = new Date().getFullYear() }: FooterProps) {
  return (
    <footer 
      className="py-8 px-6 border-t border-border"
      data-testid="section-footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p data-testid="text-copyright">
          {currentYear} {name}. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <button
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            className="hover:text-foreground transition-colors"
            data-testid="link-back-to-top"
          >
            Back to Top
          </button>
        </nav>
      </div>
    </footer>
  );
}
