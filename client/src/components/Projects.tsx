import { Link } from "wouter";
import type { Project } from "@/data/projects";
import { FlowerGarland } from "@/components/Flower";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="mk-block" data-testid="section-projects">
      <div className="mk-wrap">
        <FlowerGarland className="mk-garland-full" />

        <div className="mk-sec-stack">
          <h2 data-testid="text-projects-heading">Featured Projects</h2>
        </div>

        <div className="mk-proj-grid">
          {projects.map((project) => (
            <div className="mk-exp-card" key={project.slug} data-testid={`card-project-${project.slug}`}>
              {project.screenshot && (
                <div className="mk-proj-thumb">
                  <img src={project.screenshot} alt={`${project.title} screenshot`} />
                </div>
              )}

              <div className="mk-proj-head">
                <h3 data-testid={`text-project-title-${project.slug}`}>{project.title}</h3>
                <div className="mk-proj-meta">
                  <span className="mk-proj-loc" data-testid={`text-project-location-${project.slug}`}>
                    {project.location}
                  </span>
                  {project.link ? (
                    <a
                      className="mk-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-project-code-${project.slug}`}
                    >
                      View code &rarr;
                    </a>
                  ) : (
                    <span className="mk-proj-note" data-testid={`text-project-codenote-${project.slug}`}>
                      {project.codeNote ?? "Code not public"}
                    </span>
                  )}
                </div>
              </div>

              <p data-testid={`text-project-hook-${project.slug}`}>{project.hook}</p>

              <div className="mk-proj-more">
                <Link
                  href={`/projects/${project.slug}`}
                  className="mk-link"
                  data-testid={`link-project-detail-${project.slug}`}
                >
                  View project &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
