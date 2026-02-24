import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Digital Marketing Manager',
    company: 'TechCorp India',
    avatar: 'PS',
    rating: 5,
    quote:
      'DMTI completely transformed my career. The SEO and PPC modules were incredibly practical — I landed a 40% salary hike within 3 months of completing the course. The instructors are world-class!',
  },
  {
    name: 'Rahul Mehta',
    role: 'Social Media Strategist',
    company: 'BrandBoost Agency',
    avatar: 'RM',
    rating: 5,
    quote:
      'I was a complete beginner when I joined. The structured curriculum, live projects, and 1-on-1 mentorship gave me the confidence to start my own digital marketing agency. Best investment I ever made.',
  },
  {
    name: 'Ananya Patel',
    role: 'Content Marketing Lead',
    company: 'GrowthHive',
    avatar: 'AP',
    rating: 5,
    quote:
      'The content marketing and email marketing courses are phenomenal. I went from zero to running full campaigns for Fortune 500 clients. The certification opened doors I never thought possible.',
  },
  {
    name: 'Vikram Singh',
    role: 'PPC Specialist',
    company: 'AdVantage Media',
    avatar: 'VS',
    rating: 5,
    quote:
      'The Google Ads and Meta Ads training is unmatched. Real campaign walkthroughs, live budget management, and expert feedback made all the difference. I now manage ₹50L+ in ad spend monthly.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'SEO Analyst',
    company: 'RankFirst Digital',
    avatar: 'SK',
    rating: 5,
    quote:
      'Flexible learning was a game-changer for me as a working professional. I completed the course in evenings and weekends. The placement support was exceptional — got placed before I even finished!',
  },
  {
    name: 'Arjun Nair',
    role: 'Freelance Digital Marketer',
    company: 'Self-Employed',
    avatar: 'AN',
    rating: 5,
    quote:
      'DMTI gave me the skills and portfolio to charge premium rates as a freelancer. The live project experience was invaluable. I now earn 3x what I made in my previous corporate job.',
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
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Student Stories</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Real Results,{' '}
            <span className="text-gradient">Real People</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Over 5,000 students have transformed their careers with DMTI. Here's what they have to say.
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
            { value: '5,000+', label: 'Graduates' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '200+', label: 'Hiring Partners' },
            { value: '98%', label: 'Placement Rate' },
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
