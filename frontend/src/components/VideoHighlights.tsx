import { Play, Youtube } from 'lucide-react';

// Replace these YouTube video IDs with actual DMTI video IDs when available
const videos = [
  {
    id: 'dQw4w9WgXcQ', // placeholder – replace with actual DMTI YouTube video ID
    title: 'Introduction to Digital Marketing',
    description: 'Get an overview of our comprehensive digital marketing curriculum.',
  },
  {
    id: 'ScMzIvxBSi4', // placeholder – replace with actual DMTI YouTube video ID
    title: 'Student Success Stories',
    description: 'Hear from our alumni about how DMTI transformed their careers.',
  },
  {
    id: 'ZZ5LpwO-An4', // placeholder – replace with actual DMTI YouTube video ID
    title: 'Campus & Training Facilities',
    description: 'Take a virtual tour of our state-of-the-art training centre in Janakpuri.',
  },
];

export default function VideoHighlights() {
  return (
    <section className="py-20 bg-background" id="videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-4">
            <Youtube className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold tracking-wide uppercase">
              Watch &amp; Learn
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Video <span className="text-orange-400">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch our course previews, student testimonials, and campus tours to get a feel for life at DMTI.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-navy-900 shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Responsive 16:9 iframe wrapper */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Card Footer */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-orange-500/15 flex items-center justify-center">
                    <Play className="w-4 h-4 text-orange-400 fill-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm leading-snug mb-1">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Orange accent bottom bar */}
              <div className="h-1 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@DigitalMarketingTownInstitute"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-orange-500/30"
          >
            <Youtube className="w-5 h-5" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
