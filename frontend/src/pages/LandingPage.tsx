import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import GalleryPromotions from '../components/GalleryPromotions';
import OurMoments from '../components/OurMoments';
import VideoHighlights from '../components/VideoHighlights';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <div id="services-section">
          <Services />
        </div>
        <WhyChooseUs />
        <GalleryPromotions />
        <OurMoments />
        <VideoHighlights />
        <Testimonials />
        <div id="contact-section">
          <ContactForm />
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
