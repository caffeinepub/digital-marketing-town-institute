import { Mail, Phone, MapPin, Globe, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiLinkedin, SiYoutube, SiPinterest } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services-section' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact-section' },
];

const services = [
  'Social Media Marketing',
  'SEO Services',
  'Google Ads / PPC',
  'Meta Ads Campaigns',
  'Web Design',
  'Web Development',
  'Domain & Hosting',
];

const socialLinks = [
  { icon: SiFacebook, href: 'https://facebook.com/digitalmarketingtown', label: 'Facebook' },
  { icon: SiInstagram, href: 'https://instagram.com/digitalmarketingtown', label: 'Instagram' },
  { icon: SiYoutube, href: 'https://youtube.com/@digitalmarketingtown', label: 'YouTube' },
  { icon: SiLinkedin, href: 'https://linkedin.com/company/digitalmarketingtown', label: 'LinkedIn' },
  { icon: SiX, href: 'https://x.com/dmtowndelhi', label: 'X (Twitter)' },
  { icon: SiPinterest, href: 'https://pinterest.com/digitalmarketingtown', label: 'Pinterest' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'unknown-app';

  return (
    <footer className="bg-brand-navy border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/assets/generated/dmti-logo.png"
                alt="Digital Marketing Town"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-brand-yellow text-sm leading-relaxed mb-2 font-semibold">
              Your Partner in Digital Growth
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full-service digital marketing agency in Janakpuri, Delhi. We help businesses grow online through
              SEO, social media, paid ads, and web development.
            </p>
            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-brand-navy-mid border border-border flex items-center justify-center text-muted-foreground hover:text-brand-orange hover:border-brand-orange/40 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-brand-orange text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services-section')}
                    className="text-muted-foreground hover:text-brand-orange text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-orange mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  Janakpuri C1, Delhi-110058
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                <a href="tel:+919717044953" className="text-muted-foreground hover:text-brand-orange text-sm transition-colors">
                  +91-9717044953
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                <a href="mailto:digitalmarketingtown14@gmail.com" className="text-muted-foreground hover:text-brand-orange text-sm transition-colors break-all">
                  digitalmarketingtown14@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-brand-orange shrink-0" />
                <a href="https://digitalmarketingtown.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-orange text-sm transition-colors">
                  digitalmarketingtown.com
                </a>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <button
                onClick={() => handleNavClick('#contact-section')}
                className="w-full bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-bold text-sm py-2.5 rounded-full transition-all"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Digital Marketing Town. All rights reserved. | Janakpuri, Delhi
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Built with{' '}
            <Heart className="h-3 w-3 fill-brand-orange text-brand-orange mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:text-brand-orange-light transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
