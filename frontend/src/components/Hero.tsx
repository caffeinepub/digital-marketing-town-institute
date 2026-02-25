import { ArrowRight, Phone, MapPin, Mail, TrendingUp, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '1000+', label: 'Projects Done' },
  { icon: Star, value: '5★', label: 'Rated Agency' },
];

export default function Hero() {
  const handleConsult = () => {
    const el = document.querySelector('#contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServices = () => {
    const el = document.querySelector('#services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1440x700.png')" }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-gradient opacity-92" />
      {/* Decorative glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">
              #1 Digital Marketing Agency — Janakpuri, Delhi
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight text-foreground mb-6">
            Get More Leads &{' '}
            <span className="text-gradient">Grow Your</span>
            <br />
            <span className="text-foreground">Business</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            <strong className="text-foreground">Digital Marketing Town</strong> is your full-service digital marketing
            partner in Delhi. We help businesses attract more customers, generate quality leads, and scale revenue
            through data-driven digital strategies.
          </p>

          {/* Contact strip */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <a href="tel:+919717044953" className="flex items-center gap-2 text-brand-yellow hover:text-brand-orange transition-colors font-medium">
              <Phone className="h-4 w-4" />
              +91-9717044953
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand-orange" />
              Janakpuri C1, Delhi-110058
            </span>
            <a href="mailto:digitalmarketingtown14@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-brand-orange transition-colors">
              <Mail className="h-4 w-4 text-brand-orange" />
              digitalmarketingtown14@gmail.com
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button
              onClick={handleConsult}
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-bold text-base px-8 py-4 rounded-full shadow-orange-glow hover:shadow-card-hover transition-all animate-pulse-glow group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary hover:text-foreground font-semibold text-base px-8 py-4 rounded-full transition-all"
              onClick={handleServices}
            >
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/15 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="oklch(0.13 0.008 260)"
          />
        </svg>
      </div>
    </section>
  );
}
