import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Who is this course designed for?',
    answer:
      "Our courses are designed for everyone — from complete beginners with no prior marketing experience to working professionals looking to upskill or switch careers. Whether you're a student, entrepreneur, freelancer, or corporate professional, DMTI has a program tailored for you.",
  },
  {
    question: 'What is the duration of the courses?',
    answer:
      'Course durations vary by program: SEO (8 weeks), Social Media Marketing (6 weeks), PPC (7 weeks), Content Marketing (5 weeks), and Email Marketing (4 weeks). Our comprehensive Digital Marketing Master Program covers all topics in 6 months. All courses offer lifetime access to recorded sessions.',
  },
  {
    question: 'Are the certifications recognized by employers?',
    answer:
      'Yes! DMTI certifications are recognized by 200+ hiring partners across India and internationally. Our certificates are co-branded with industry partners and are valued by top digital marketing agencies, e-commerce companies, and startups. Many of our graduates have used these certifications to secure roles at Google, Meta, and leading agencies.',
  },
  {
    question: 'Is there a placement guarantee?',
    answer:
      'We offer a dedicated placement assistance program with a 98% placement rate. Our placement cell actively connects students with hiring partners, conducts mock interviews, helps with resume building, and provides career counseling. While we cannot guarantee a specific salary, we guarantee dedicated support until you land your first role.',
  },
  {
    question: 'Can I learn at my own pace?',
    answer:
      'Absolutely! All courses are available in both live (instructor-led) and self-paced formats. You get lifetime access to all recorded lectures, study materials, and resources. Live sessions are also recorded so you never miss a class. You can learn from anywhere, anytime.',
  },
  {
    question: 'What is the fee structure and are there EMI options?',
    answer:
      'Our course fees are competitively priced to be accessible to all learners. We offer flexible payment options including 0% EMI plans, early bird discounts, and group enrollment discounts. Contact our admissions team for the latest pricing and scholarship opportunities.',
  },
  {
    question: 'Do I need any prior experience or technical knowledge?',
    answer:
      'No prior experience is required for most of our beginner courses. All you need is a computer, internet connection, and the willingness to learn. Our curriculum starts from the fundamentals and progressively builds to advanced concepts. For advanced courses, basic familiarity with digital tools is helpful but not mandatory.',
  },
  {
    question: 'What kind of support will I receive during the course?',
    answer:
      "You'll receive comprehensive support including: weekly live Q&A sessions, a dedicated student community forum, 1-on-1 mentorship sessions, assignment feedback from instructors, access to our alumni network, and career guidance from our placement team. Our support team is available 6 days a week.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 section-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Got{' '}
            <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know about enrolling at Digital Marketing Town Institute.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-card border rounded-2xl overflow-hidden transition-all ${
                openIndex === index ? 'border-brand-orange/40' : 'border-border'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground text-base leading-snug">{faq.question}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-brand-orange" />
                  ) : (
                    <Plus className="h-4 w-4 text-brand-orange" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-border mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display font-bold text-xl text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Our admissions team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:admissions@dmti.edu"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-semibold px-6 py-2.5 rounded-full text-sm transition-all"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
