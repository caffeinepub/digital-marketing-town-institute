import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import CoursesOverview from '../components/CoursesOverview';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <CoursesOverview />
        <Testimonials />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
