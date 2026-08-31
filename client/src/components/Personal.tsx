interface PersonalProps {
  photoUrl: string;
  caption: string;
}

export default function Personal({ photoUrl, caption }: PersonalProps) {
  return (
    <section
      id="personal"
      className="py-14 md:py-20 px-6 relative overflow-hidden"
      data-testid="section-personal"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
          data-testid="text-personal-heading"
        >
          Beyond Water Engineering
        </h2>

        <figure className="mt-10">
          <img
            src={photoUrl}
            alt={caption}
            className="w-full max-w-xl mx-auto rounded-2xl shadow-lg border border-cyan-400/20"
            data-testid="img-personal-photo"
          />
          <figcaption
            className="mt-4 text-muted-foreground italic"
            data-testid="text-personal-caption"
          >
            {caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
