import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    icon: '/assets/generated/icon-seo.dim_128x128.png',
    title: 'Search Engine Optimization',
    abbr: 'SEO',
    description:
      'Master on-page, off-page, and technical SEO. Learn keyword research, link building, and rank tracking to dominate search results.',
    topics: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
  },
  {
    icon: '/assets/generated/icon-social.dim_128x128.png',
    title: 'Social Media Marketing',
    abbr: 'SMM',
    description:
      'Build and grow brand presence across Instagram, Facebook, LinkedIn, and X. Create viral content strategies and manage paid campaigns.',
    topics: ['Content Strategy', 'Paid Ads', 'Analytics', 'Influencer Marketing'],
    duration: '6 Weeks',
    level: 'Beginner to Intermediate',
  },
  {
    icon: '/assets/generated/icon-ppc.dim_128x128.png',
    title: 'Pay-Per-Click Advertising',
    abbr: 'PPC',
    description:
      'Run high-ROI Google Ads and Meta Ads campaigns. Learn bidding strategies, ad copywriting, A/B testing, and conversion optimization.',
    topics: ['Google Ads', 'Meta Ads', 'Bid Strategy', 'Conversion Tracking'],
    duration: '7 Weeks',
    level: 'Intermediate',
  },
  {
    icon: '/assets/generated/icon-content.dim_128x128.png',
    title: 'Content Marketing',
    abbr: 'CM',
    description:
      'Craft compelling content that attracts, engages, and converts. Learn blogging, video scripts, email sequences, and content calendars.',
    topics: ['Blogging', 'Video Content', 'Copywriting', 'Content Calendar'],
    duration: '5 Weeks',
    level: 'Beginner',
  },
  {
    icon: '/assets/generated/icon-email.dim_128x128.png',
    title: 'Email Marketing',
    abbr: 'EM',
    description:
      'Build high-converting email funnels. Master list segmentation, automation workflows, A/B testing, and deliverability best practices.',
    topics: ['List Building', 'Automation', 'A/B Testing', 'Deliverability'],
    duration: '4 Weeks',
    level: 'Beginner to Intermediate',
  },
  {
    icon: '/assets/generated/icon-seo.dim_128x128.png',
    title: 'Analytics & Data',
    abbr: 'GA',
    description:
      'Turn data into decisions. Learn Google Analytics 4, Tag Manager, and data visualization to measure and optimize every campaign.',
    topics: ['GA4', 'Tag Manager', 'Dashboards', 'Reporting'],
    duration: '4 Weeks',
    level: 'Intermediate',
  },
];

export default function CoursesOverview() {
  const handleEnroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Our Programs</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Courses That{' '}
            <span className="text-gradient">Get You Hired</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive, hands-on programs designed by industry experts to give you the skills employers are looking for.
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.abbr}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              {/* Card header */}
              <div className="relative p-6 pb-4 border-b border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-brand-navy flex items-center justify-center overflow-hidden shrink-0 border border-border">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">{course.abbr}</span>
                    <h3 className="font-display font-bold text-base text-foreground leading-tight">{course.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
              </div>

              {/* Topics */}
              <div className="p-6 pt-4 flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium bg-brand-navy border border-border text-muted-foreground rounded-full px-3 py-1"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    {course.duration}
                  </span>
                  <span>{course.level}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button
                  onClick={handleEnroll}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-orange/40 text-brand-orange text-sm font-semibold hover:bg-brand-orange hover:text-brand-navy transition-all group-hover:border-brand-orange"
                >
                  Enroll in This Course
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={handleEnroll}
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-bold px-10 rounded-full shadow-orange-glow"
          >
            View Full Curriculum
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
