import { useParams, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "@/pages/not-found";
import { projects } from "@/data/projects";

const navItems = [
  { label: "About", sectionId: "about" },
  { label: "Experience", sectionId: "experience" },
  { label: "Projects", sectionId: "projects" },
  { label: "Personal", sectionId: "personal" },
  { label: "Contact", sectionId: "contact" },
];

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen mk-page-shell text-foreground">
      <Navigation name="Grace Inman" navItems={navItems} />
      <main>
        <section className="mk-block" data-testid="section-project-detail">
          <div className="mk-wrap mk-project-detail">
            <Link href="/#projects" className="mk-link mk-back-link" data-testid="link-back-to-projects">
              &larr; Back to Projects
            </Link>

            <div className="mk-proj-head mk-detail-head">
              <h1 data-testid="text-detail-title">{project.title}</h1>
              <div className="mk-proj-meta">
                <span className="mk-proj-loc" data-testid="text-detail-location">
                  {project.location}
                </span>
                {project.link ? (
                  <a
                    className="mk-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-detail-code"
                  >
                    View code &rarr;
                  </a>
                ) : (
                  <span className="mk-proj-note" data-testid="text-detail-codenote">
                    {project.codeNote ?? "Code not public"}
                  </span>
                )}
              </div>
            </div>

            {project.screenshot && (
              <div className="mk-detail-hero">
                <img src={project.screenshot} alt={`${project.title} screenshot`} />
              </div>
            )}

            <div className="mk-detail-section">
              <h2 className="mk-detail-h2">Problem</h2>
              <p>{project.problem}</p>
            </div>

            <div className="mk-detail-section">
              <h2 className="mk-detail-h2">What I Built</h2>
              <p>{project.whatBuilt}</p>
            </div>

            <div className="mk-detail-section">
              <h2 className="mk-detail-h2">Stack</h2>
              <div className="mk-tag-row">
                {project.stack.map((tech) => (
                  <span className="mk-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mk-detail-section">
              <h2 className="mk-detail-h2">Outcome</h2>
              <p>{project.outcome}</p>
            </div>

            {project.figures && project.figures.length > 0 && (
              <div className="mk-detail-section mk-figures" data-testid="section-figures">
                <h2 className="mk-detail-h2">Figures</h2>
                <div className="mk-figures-grid">
                  {project.figures.map((figure) => (
                    <figure className="mk-figure" key={figure.src}>
                      <img src={figure.src} alt={figure.caption} />
                      <figcaption>{figure.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer name="Grace Inman" />
    </div>
  );
}

