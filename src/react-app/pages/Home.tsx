import HeroSection from '@/react-app/components/HeroSection';
import AboutSection from '@/react-app/components/AboutSection';
import TeaserSection from '@/react-app/components/TeaserSection';
import EpisodesSection from '@/react-app/components/EpisodesSection';
import ContactSection from '@/react-app/components/ContactSection';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TeaserSection />
      <EpisodesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
