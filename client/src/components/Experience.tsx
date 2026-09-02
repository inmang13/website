interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

interface ExperienceProps {
  jobs: Job[];
}

export default function Experience({ jobs }: ExperienceProps) {
  return (
    <section id="experience" className="mk-block" data-testid="section-experience">
      <div className="mk-wrap">
        <div className="mk-sec-head">
          <h2 data-testid="text-experience-heading">Experience</h2>
        </div>

        <div className="mk-timeline">
          {jobs.map((job, index) => (
            <div className="mk-timeline-item" key={index}>
              <div className="mk-timeline-marker">
                <span className="mk-line mk-line-top" style={index === 0 ? { visibility: "hidden" } : undefined} />
                <span className="mk-dot" />
                <span
                  className="mk-line mk-line-bottom"
                  style={index === jobs.length - 1 ? { visibility: "hidden" } : undefined}
                />
              </div>
              <div className="mk-exp-card" data-testid={`card-job-${index}`}>
                <div className="mk-exp-head">
                  <div>
                    <h3 data-testid={`text-job-title-${index}`}>{job.title}</h3>
                    <div className="mk-co" data-testid={`text-job-company-${index}`}>
                      {job.company} &middot; <span data-testid={`text-job-location-${index}`}>{job.location}</span>
                    </div>
                  </div>
                  <div className="mk-period">{job.period}</div>
                </div>
                <p data-testid={`text-job-description-${index}`}>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
