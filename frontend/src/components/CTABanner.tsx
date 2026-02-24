import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTABanner() {
  const handleEnroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 orange-gradient opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.82_0.18_85_/_0.3),_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-yellow/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-yellow/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-navy/20 rounded-full px-4 py-1.5 mb-6">
          <Zap className="h-4 w-4 text-brand-navy" />
          <span className="text-brand-navy text-sm font-bold uppercase tracking-wide">Limited Seats Available</span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-navy mb-4 leading-tight">
          Start Your Digital Marketing
          <br />
          Journey Today
        </h2>

        <p className="text-brand-navy/80 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of successful graduates. Enroll now and get access to all courses, live mentorship,
          and our exclusive placement program.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleEnroll}
            size="lg"
            className="bg-brand-navy hover:bg-brand-navy-light text-foreground font-bold px-10 rounded-full text-base transition-all hover:shadow-card"
          >
            Enroll Now — It's Free to Start
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const el = document.querySelector('#faq');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-brand-navy/40 text-brand-navy hover:bg-brand-navy/10 font-semibold px-8 rounded-full text-base"
          >
            Have Questions? See FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
