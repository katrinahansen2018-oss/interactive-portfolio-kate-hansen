import { useEffect } from 'react';
import StickyNav from './StickyNav';
import HeroSection from './HeroSection';
import ProcessTimeline from './ProcessTimeline';
import ValuesSection from './ValuesSection';
import PortfolioGallery from './PortfolioGallery';
import ContactSection from './ContactSection';

const InstructionalDesignPortfolio = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToProcess = () => {
    scrollToSection('#process');
  };

  const handleNavigateToPortfolio = () => {
    scrollToSection('#portfolio');
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <StickyNav />

      {/* Main Content */}
      <main>
        {/* Hero Section with Interactive Choices */}
        <HeroSection 
          onNavigateToProcess={handleNavigateToProcess}
          onNavigateToPortfolio={handleNavigateToPortfolio}
        />

        {/* Design Process Timeline */}
        <ProcessTimeline />

        {/* Instructional Values */}
        <ValuesSection />

        {/* Portfolio Showcase */}
        <PortfolioGallery />

        {/* Contact & Connect */}
        <ContactSection />
      </main>
    </div>
  );
};

export default InstructionalDesignPortfolio;