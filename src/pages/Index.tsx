import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection";
import MasterSection from "@/components/MasterSection";
import ProgramsSection from "@/components/ProgramsSection";
import LocationsSection from "@/components/LocationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <HeroSection />
      <MasterSection />
      <ProgramsSection />
      <LocationsSection />
      <AchievementsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
