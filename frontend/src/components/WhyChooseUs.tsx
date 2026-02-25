import { Trophy, Target, Award, TrendingUp, HeadphonesIcon, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Trophy,
    title: 'Proven Results',
    description:
      'We have helped 500+ businesses across Delhi grow their online presence and generate consistent leads through data-driven strategies.',
    highlight: '500+ Clients',
  },
  {
    icon: Target,
    title: 'Targeted Campaigns',
    description:
      'Every campaign is tailored to your specific business goals, audience, and budget — no one-size-fits-all approach.',
    highlight: 'Custom Strategy',
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description:
      'Our team holds Google, Meta, and HubSpot certifications, ensuring your campaigns are managed by qualified professionals.',
    highlight: 'Certified Team',
  },
  {
    icon: TrendingUp,
    title: 'ROI Focused',
    description:
      'We focus on metrics that matter — leads, conversions, and revenue. Every rupee you invest is tracked and optimized.',
    highlight: 'Measurable ROI',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description:
      'Get a dedicated account manager, regular strategy calls, and transparent monthly reports on all your campaigns.',
    highlight: 'Personal Manager',
  },
  {
    icon: Globe,
    title: 'Full-Service Agency',
    description:
      'From SEO to web development, social media to paid ads — we handle everything under one roof so you can focus on your business.',
    highlight: 'All-in-One',
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
            The DMT{' '}
            <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just run campaigns — we build digital growth engines for your business. Here's what sets us apart.
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
