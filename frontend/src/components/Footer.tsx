import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';

const quickLinks = [
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Our Courses', href: '#courses' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
];

const courses = [
  'Search Engine Optimization',
  'Social Media Marketing',
  'Pay-Per-Click Advertising',
  'Content Marketing',
  'Email Marketing',
  'Analytics & Data',
];

const socialLinks = [
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'unknown-app';

  return (
    <footer id="contact" className="bg-brand-navy border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/assets/generated/dmti-logo.dim_400x160.png"
                alt="Digital Marketing Town Institute"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering the next generation of digital marketing professionals with world-class education and industry-recognized certifications.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
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

          {/* Courses */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course}>
                  <button
                    onClick={() => handleNavClick('#courses')}
                    className="text-muted-foreground hover:text-brand-orange text-sm transition-colors text-left"
                  >
                    {course}
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
                  Janakpuri, Delhi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                <a href="tel:+919717044953" className="text-muted-foreground hover:text-brand-orange text-sm transition-colors">
                  +91-9717044953
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-orange shrink-0" />
                <a href="mailto:admissions@dmti.edu" className="text-muted-foreground hover:text-brand-orange text-sm transition-colors">
                  admissions@dmti.edu
                </a>
              </li>
            </ul>

            {/* Enroll CTA */}
            <div className="mt-6">
              <button
                onClick={() => handleNavClick('#courses')}
                className="w-full bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-bold text-sm py-2.5 rounded-full transition-all"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Digital Marketing Town Institute. All rights reserved.
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
