import HeroSection from '../components/organisms/HeroSection';
import AboutSection from '../components/organisms/AboutSection';
import CategoriesSection from '../components/organisms/CategoriesSection';
import WorkshopSection from '../components/organisms/WorkshopSection';
import VideoSection from '../components/organisms/VideoSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <WorkshopSection />
      <VideoSection />
    </>
  );
}