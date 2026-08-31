interface Photo {
  src: string;
  caption: string;
  link?: string;
  linkLabel?: string;
}

interface PersonalProps {
  photos: Photo[];
}

export default function Personal({ photos }: PersonalProps) {
  return (
    <section
      id="personal"
      className="py-14 md:py-20 px-6 relative overflow-hidden"
      data-testid="section-personal"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
          data-testid="text-personal-heading"
        >
          Beyond Water Engineering
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => {
            const card = (
              <figure
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-cyan-400/20 shadow-lg"
                data-testid={`card-personal-photo-${index}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-personal-photo-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <figcaption
                  className="absolute bottom-0 left-0 right-0 p-3 text-left text-sm font-medium text-white"
                  data-testid={`text-personal-caption-${index}`}
                >
                  {photo.caption}
                  {photo.link && (
                    <span className="block text-xs font-normal text-cyan-300 mt-1 underline">
                      {photo.linkLabel ?? "Listen"} &rarr;
                    </span>
                  )}
                </figcaption>
              </figure>
            );

            return photo.link ? (
              <a
                key={index}
                href={photo.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-personal-photo-${index}`}
              >
                {card}
              </a>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
