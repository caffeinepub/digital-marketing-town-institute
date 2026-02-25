import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Restaurant Owner',
    company: 'Spice Garden, Delhi',
    avatar: 'RK',
    rating: 5,
    quote:
      'Digital Marketing Town transformed our restaurant business. Their social media campaigns brought in 3x more customers within just 2 months. The team is professional, responsive, and truly understands local business needs.',
  },
  {
    name: 'Sunita Sharma',
    role: 'Boutique Owner',
    company: 'Sunita Fashion, Janakpuri',
    avatar: 'SS',
    rating: 5,
    quote:
      'I was struggling to get online customers for my boutique. DMT set up our Instagram and Facebook pages, ran targeted ads, and now we get 50+ inquiries daily. Best investment for my business!',
  },
  {
    name: 'Amit Verma',
    role: 'Real Estate Agent',
    company: 'Delhi Properties',
    avatar: 'AV',
    rating: 5,
    quote:
      'Their Google Ads and SEO services helped me rank on the first page for real estate keywords in Delhi. My lead volume increased by 200% in 3 months. Highly recommend Digital Marketing Town!',
  },
  {
    name: 'Priya Malhotra',
    role: 'Clinic Director',
    company: 'Wellness Clinic, West Delhi',
    avatar: 'PM',
    rating: 5,
    quote:
      'The Meta Ads campaigns they ran for our clinic were exceptional. We saw a 150% increase in appointment bookings. The team is knowledgeable, creative, and always delivers on time.',
  },
  {
    name: 'Vikram Nair',
    role: 'E-commerce Entrepreneur',
    company: 'ShopEasy India',
    avatar: 'VN',
    rating: 5,
    quote:
      'DMT built our entire e-commerce website and handled all our digital marketing. Sales went from zero to ₹5L/month in just 4 months. Their web development and SEO team is outstanding.',
  },
  {
    name: 'Neha Gupta',
    role: 'Coaching Center Owner',
    company: 'Excel Academy, Delhi',
    avatar: 'NG',
    rating: 5,
    quote:
      'We needed more student enrollments and Digital Marketing Town delivered. Their targeted Facebook campaigns and SEO work filled all our batches within weeks. Excellent ROI and great support!',
  },
];

const avatarColors = [
  'bg-brand-orange text-brand-navy',
  'bg-brand-yellow text-brand-navy',
  'bg-brand-orange/70 text-brand-navy',
  'bg-brand-yellow/80 text-brand-navy',
  'bg-brand-orange text-brand-navy',
  'bg-brand-yellow text-brand-navy',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Client Stories</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Real Results,{' '}
            <span className="text-gradient">Real Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Over 500 businesses across Delhi have grown with Digital Marketing Town. Here's what they say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col relative overflow-hidden"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 ${avatarColors[i % avatarColors.length]}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '1000+', label: 'Projects Done' },
            { value: '5+', label: 'Years Experience' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-extrabold text-3xl text-brand-orange">{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
