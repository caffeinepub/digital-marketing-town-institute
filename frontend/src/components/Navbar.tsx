import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Courses', href: '#courses' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/assets/generated/dmti-logo.dim_400x160.png"
              alt="Digital Marketing Town Institute"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-brand-orange transition-colors rounded-md"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick('#courses')}
              className="bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-semibold px-5 py-2 rounded-full transition-all hover:shadow-orange-glow"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-navy-light border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-brand-orange transition-colors rounded-md"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3">
            <Button
              onClick={() => handleNavClick('#courses')}
              className="w-full bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-semibold rounded-full"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
