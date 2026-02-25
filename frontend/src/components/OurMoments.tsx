import { Camera } from 'lucide-react';

const momentImages = [
  {
    src: '/assets/generated/dmt-event-moments-minister.dim_800x800.jpg',
    alt: 'Moments with Ashish Sood Sir – Minister of Delhi',
    caption: 'Moments with Ashish Sood Sir — Minister of Delhi',
  },
  {
    src: '/assets/generated/dmt-event-ashish-sood.dim_800x800.jpg',
    alt: 'Digital Marketing Town team with Delhi Minister',
    caption: 'Meeting with Delhi Government Officials',
  },
  {
    src: '/assets/generated/dmt-event-1.dim_800x800.jpg',
    alt: 'Digital Marketing Town community event',
    caption: 'Community Engagement Event',
  },
  {
    src: '/assets/generated/dmt-event-2.dim_800x800.jpg',
    alt: 'Digital Marketing Town team event',
    caption: 'Team & Client Celebration',
  },
  {
    src: '/assets/generated/dmt-event-3.dim_800x800.jpg',
    alt: 'Digital Marketing Town networking event',
    caption: 'Networking & Growth Summit',
  },
  {
    src: '/assets/generated/dmt-event-4.dim_800x800.jpg',
    alt: 'Digital Marketing Town business event',
    caption: 'Business Launch Support Event',
  },
];

export default function OurMoments() {
  return (
    <section className="py-20 bg-background" id="moments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-4">
            <Camera className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">
              Our Moments
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Behind the <span className="text-gradient">Scenes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From community events to government meetings — Digital Marketing Town is always making an impact beyond the screen.
          </p>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {momentImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:shadow-orange-glow hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground text-sm font-medium">{img.caption}</p>
              </div>
              {/* Orange accent bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
