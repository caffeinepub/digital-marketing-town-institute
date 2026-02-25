import { ImageIcon } from 'lucide-react';

const promoImages = [
  {
    src: '/assets/generated/dmt-promo-social-media.dim_1080x1080.jpg',
    alt: 'When You Choose Social Media Marketing – Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-ingredients.dim_1080x1080.jpg',
    alt: 'Right Ingredients at the Right Time – Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-attract-customers.dim_1080x1080.jpg',
    alt: 'Attract More Customers Through Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-balance-business.dim_1080x1080.jpg',
    alt: 'Social Media Will Balance Your Business – Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-increase-sales.dim_1080x1080.jpg',
    alt: 'Increase Your Sales with Digital Advertising – Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-get-leads.dim_1080x1080.jpg',
    alt: 'Get More Leads & Grow Your Business – Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-cheap-price.dim_1080x1080.jpg',
    alt: 'Get Social Media Marketing with Cheap Price – Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-grow-business.dim_1080x1080.jpg',
    alt: 'We Are Here to Grow Your Business – Digital Marketing Town',
  },
  {
    src: '/assets/generated/dmt-promo-car-petrol.dim_1080x1080.jpg',
    alt: 'Business Without Digital Marketing is Like Car Without Petrol',
  },
];

export default function GalleryPromotions() {
  return (
    <section className="py-20 bg-brand-navy-light" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-4">
            <ImageIcon className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">
              Creative Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient">Marketing Campaigns</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creative digital marketing content that drives engagement, builds brand awareness, and converts audiences into customers.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {promoImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-navy shadow-lg hover:shadow-orange-glow hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Orange accent bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
