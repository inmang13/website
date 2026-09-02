interface AboutProps {
  bio: string[];
  credentials: string[];
}

export default function About({ bio, credentials }: AboutProps) {
  return (
    <section id="about" className="mk-block" data-testid="section-about">
      <div className="mk-wrap">
        <h2 data-testid="text-about-heading">About Me</h2>
        <div className="mk-about-grid">
          <p data-testid="text-bio-0">{bio.join(" ")}</p>
          <ul className="mk-cred-list">
            {credentials.map((credential, index) => (
              <li key={index} data-testid={`text-credential-${index}`}>
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
