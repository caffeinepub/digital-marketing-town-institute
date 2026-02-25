import { Share2, Search, MousePointerClick, Megaphone, Monitor, Code, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Share2,
    name: 'Social Media Marketing',
    description:
      'Build a powerful social media presence that engages your audience and converts followers into loyal customers.',
    deliverables: [
      'Facebook & Instagram management',
      'Content creation & scheduling',
      'Community engagement',
      'Monthly performance reports',
      'Brand storytelling strategy',
    ],
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Search,
    name: 'SEO Services',
    description:
      'Rank higher on Google and drive organic traffic that converts. Our proven SEO strategies deliver long-term results.',
    deliverables: [
      'On-page & off-page SEO',
      'Keyword research & strategy',
      'Technical SEO audit',
      'Link building campaigns',
      'Monthly ranking reports',
    ],
    color: 'from-green-500/20 to-green-600/10',
    iconColor: 'text-green-400',
  },
  {
    icon: MousePointerClick,
    name: 'Google Ads / PPC',
    description:
      'Get instant visibility on Google with targeted pay-per-click campaigns that maximize ROI and minimize wasted spend.',
    deliverables: [
      'Search & display campaigns',
      'Keyword bidding strategy',
      'Ad copy creation & A/B testing',
      'Conversion tracking setup',
      'Weekly performance analysis',
    ],
    color: 'from-brand-orange/20 to-brand-orange/10',
    iconColor: 'text-brand-orange',
  },
  {
    icon: Megaphone,
    name: 'Meta Ads Campaigns',
    description:
      'Reach your ideal customers on Facebook and Instagram with laser-targeted ad campaigns that drive real business results.',
    deliverables: [
      'Facebook & Instagram ads',
      'Audience targeting & retargeting',
      'Creative design & copywriting',
      'Lead generation campaigns',
      'ROAS optimization',
    ],
    color: 'from-purple-500/20 to-purple-600/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Monitor,
    name: 'Responsive Web Design',
    description:
      'Beautiful, mobile-first websites that look stunning on every device and are optimized for conversions.',
    deliverables: [
      'Custom UI/UX design',
      'Mobile-responsive layouts',
      'Landing page design',
      'Brand-consistent visuals',
      'Fast loading optimization',
    ],
    color: 'from-pink-500/20 to-pink-600/10',
    iconColor: 'text-pink-400',
  },
  {
    icon: Code,
    name: 'Web Development',
    description:
      'Robust, scalable websites and web applications built with modern technologies to power your online business.',
    deliverables: [
      'Custom website development',
      'E-commerce solutions',
      'CMS integration (WordPress)',
      'Speed & performance optimization',
      'Ongoing maintenance & support',
    ],
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Globe,
    name: 'Domain & Hosting',
    description:
      'Reliable domain registration and hosting solutions to keep your website fast, secure, and always online.',
    deliverables: [
      'Domain name registration',
      'Shared & dedicated hosting',
      'SSL certificate setup',
      '99.9% uptime guarantee',
      '24/7 technical support',
    ],
    color: 'from-brand-yellow/20 to-brand-yellow/10',
    iconColor: 'text-brand-yellow',
  },
];

export default function Services() {
  const handleGetQuote = () => {
    const el = document.querySelector('#contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Digital Marketing{' '}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From social media to SEO, we offer end-to-end digital marketing services to help your business grow online
            and dominate your market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, description, deliverables, color, iconColor }) => (
            <Card
              key={name}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden card-hover cursor-default"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{name}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

                {/* Deliverables */}
                <ul className="space-y-1.5 mb-6">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={handleGetQuote}
                  size="sm"
                  className="w-full bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-brand-navy border border-brand-orange/30 hover:border-brand-orange font-semibold rounded-full transition-all group/btn"
                >
                  Get Quote
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
