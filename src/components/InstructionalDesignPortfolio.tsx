import { useEffect } from 'react';
import StickyNav from './StickyNav';
import HeroSection from './HeroSection';
import ValuesSection from './ValuesSection';
import PortfolioGallery from './PortfolioGallery';
import ContactSection from './ContactSection';
import SkipToContent from './SkipToContent';
import FeedbackWidget from './FeedbackWidget';

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

  const handleNavigateToValues = () => {
    scrollToSection('#values');
  };

  const handleNavigateToPortfolio = () => {
    scrollToSection('#portfolio');
  };

  return (
    <div className="min-h-screen">
      {/* Skip to Content Link */}
      <SkipToContent />
      
      {/* Sticky Navigation */}
      <StickyNav />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section with Interactive Choices */}
        <HeroSection 
          onNavigateToProcess={handleNavigateToValues}
          onNavigateToPortfolio={handleNavigateToPortfolio}
        />

        {/* Instructional Values */}
        <ValuesSection />

        {/* Portfolio Showcase */}
        <PortfolioGallery />

        {/* Contact & Connect */}
        <ContactSection />
      </main>

      {/* Feedback Widget */}
      <FeedbackWidget />
    </div>
  );
};

export default InstructionalDesignPortfolio;