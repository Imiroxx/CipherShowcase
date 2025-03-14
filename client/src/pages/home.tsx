import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ScreenshotsSlider from "@/components/screenshots-slider";
import DownloadSection from "@/components/download-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-900 font-roboto antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSlider />
        <DownloadSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
