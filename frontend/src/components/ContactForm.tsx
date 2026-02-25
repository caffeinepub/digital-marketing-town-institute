import { useState } from 'react';
import { Phone, MapPin, Mail, Globe, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSubmitInquiry } from '@/hooks/useQueries';

const serviceOptions = [
  'Social Media Marketing',
  'SEO Services',
  'Google Ads / PPC',
  'Meta Ads Campaigns',
  'Web Design',
  'Web Development',
  'Domain & Hosting',
  'Other',
];

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9717044953',
    href: 'tel:+919717044953',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Janakpuri C1, Delhi-110058',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'digitalmarketingtown14@gmail.com',
    href: 'mailto:digitalmarketingtown14@gmail.com',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'digitalmarketingtown.com',
    href: 'https://digitalmarketingtown.com',
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const { mutate: submitInquiry, isPending, isError, error } = useSubmitInquiry();

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, service, message } = form;

    if (!name.trim() || !phone.trim() || !email.trim() || !service || !message.trim()) {
      setValidationError('Please fill in all required fields.');
      return;
    }

    submitInquiry(
      { name: name.trim(), phone: phone.trim(), email: email.trim(), service, message: message.trim() },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: '', phone: '', email: '', service: '', message: '' });
        },
      }
    );
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-brand-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Get Your{' '}
            <span className="text-gradient">Free Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to grow your business? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="/assets/generated/dmti-logo.dim_400x160.png"
                alt="Digital Marketing Town"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Digital Marketing Town is a full-service digital marketing agency based in Janakpuri, Delhi. We help
              businesses of all sizes grow their online presence and generate quality leads.
            </p>

            <div className="space-y-4 pt-2">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/15 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-foreground text-sm font-medium hover:text-brand-orange transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-foreground text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Promo image */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-border">
              <img
                src="/assets/generated/dmt-promo-get-leads.dim_1080x1080.jpg"
                alt="Get More Leads with Digital Marketing Town"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-semibold rounded-full"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-foreground text-sm font-medium">
                        Full Name <span className="text-brand-orange">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-background border-border focus:border-brand-orange"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-foreground text-sm font-medium">
                        Phone Number <span className="text-brand-orange">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="bg-background border-border focus:border-brand-orange"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-foreground text-sm font-medium">
                      Email Address <span className="text-brand-orange">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-background border-border focus:border-brand-orange"
                      required
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-1.5">
                    <Label className="text-foreground text-sm font-medium">
                      Service Interested In <span className="text-brand-orange">*</span>
                    </Label>
                    <Select value={form.service} onValueChange={(val) => handleChange('service', val)}>
                      <SelectTrigger className="bg-background border-border focus:border-brand-orange">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-foreground text-sm font-medium">
                      Message <span className="text-brand-orange">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="bg-background border-border focus:border-brand-orange min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  {/* Validation error */}
                  {validationError && (
                    <div className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {validationError}
                    </div>
                  )}

                  {/* Backend error */}
                  {isError && (
                    <div className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error instanceof Error ? error.message : 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-brand-orange hover:bg-brand-orange-light text-brand-navy font-bold text-base py-3 rounded-full transition-all hover:shadow-orange-glow"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll get back to you within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
