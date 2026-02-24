import { Trophy, Clock, Award, TrendingUp, HeadphonesIcon, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Trophy,
    title: 'Expert Instructors',
    description:
      'Learn from seasoned digital marketing professionals with 10+ years of real-world industry experience at top brands.',
    highlight: '10+ Years',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description:
      'Study at your own pace with lifetime access to course materials, live sessions, and recorded lectures available 24/7.',
    highlight: 'Self-Paced',
  },
  {
    icon: Award,
    title: 'Industry Certification',
    description:
      'Earn globally recognized certifications that are valued by top employers and digital marketing agencies worldwide.',
    highlight: 'Globally Recognized',
  },
  {
    icon: TrendingUp,
    title: 'Career Placement',
    description:
      'Our dedicated placement cell connects you with 200+ hiring partners to land your dream digital marketing role.',
    highlight: '98% Placement',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Mentorship',
    description:
      'Get 1-on-1 mentorship sessions, live doubt-clearing classes, and ongoing support throughout your learning journey.',
    highlight: '1-on-1 Support',
  },
  {
    icon: Globe,
    title: 'Live Projects',
    description:
      'Work on real client campaigns and live projects to build a portfolio that stands out to employers from day one.',
    highlight: 'Real Campaigns',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            The DMTI{' '}
            <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just teach digital marketing — we build digital marketing careers. Here's what sets us apart.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className="group relative bg-card border border-border rounded-2xl p-6 card-hover cursor-default"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-orange to-brand-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center group-hover:bg-brand-orange/25 transition-colors">
                  <Icon className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
                  </div>
                  <span className="inline-block text-xs font-semibold text-brand-yellow bg-brand-yellow/10 rounded-full px-2 py-0.5 mb-2">
                    {highlight}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
