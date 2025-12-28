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
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground text-center">
          <p data-testid="text-made-with">
            Made with every free LLM I could find
          </p>
          <p data-testid="text-copyright">
            {currentYear} {name}. All rights reserved.
          </p>
          <button
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            className="hover:text-foreground transition-colors"
            data-testid="link-back-to-top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}