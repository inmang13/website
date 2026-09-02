import { Mail, Linkedin, Github, Download, Sparkles } from "lucide-react";

interface ContactProps {
  email: string;
  linkedin?: string;
  github?: string;   // 👈 add this
  resumeUrl?: string;
}

export default function Contact({ email, linkedin, github, resumeUrl }: ContactProps) {
  const hireSubject = "Job offer";
  const hireBody = [
    "Hi Grace,",
    "",
    "I came across your super cool personal website and want you on my team immediately! I am willing to pay you a large, yet reasonable salary.",
    "",
    "Role:",
    "Team:",
    "Location:",
    "",
    "Best,",
    ""
  ].join("\n");
  const hireHref =
    `mailto:${email}?subject=${encodeURIComponent(hireSubject)}&body=${encodeURIComponent(hireBody)}`;

  return (
    <section id="contact" className="mk-block" data-testid="section-contact">
      <div className="mk-wrap">
        <div className="mk-sec-stack">
          <h2>Let's Connect</h2>
          <p className="mk-sec-sub">Open to full-time employment after graduating May 2027</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          
          <a className="mk-btn-resume mk-btn-hire" href={hireHref} data-testid="link-hire-me">
            <Sparkles />
            Hire Me!
          </a>

          <a className="mk-btn-ghost" href={`mailto:${email}`} data-testid="link-email">
            <Mail />
            Email Me
          </a>

          {linkedin && (
            <a
              className="mk-btn-ghost"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
            >
              <Linkedin />
              LinkedIn
            </a>
          )}

          {github && (
            <a
              className="mk-btn-ghost"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
            >
              <Github />
              GitHub
            </a>
          )}

          {resumeUrl && (
            <a
              className="mk-btn-ghost"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-resume"
            >
              <Download />
              Resume
            </a>
          )}

        </div>
      </div>
    </section>
  );
}
