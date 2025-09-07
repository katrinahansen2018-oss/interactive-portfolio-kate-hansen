import { useEffect } from 'react';
import StickyNav from './StickyNav';
import HeroSection from './HeroSection';
import ProcessTimeline from './ProcessTimeline';
import ValuesSection from './ValuesSection';
import PortfolioGallery from './PortfolioGallery';
import ContactSection from './ContactSection';
import SkipToContent from './SkipToContent';
import FeedbackWidget from './FeedbackWidget';
import ProgressIndicator from './ProgressIndicator';

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
      {/* Skip to Content Link */}
      <SkipToContent />
      
      {/* Sticky Navigation */}
      <StickyNav />

      {/* Progress Indicator */}
      <ProgressIndicator />

      {/* Main Content */}
      <main id="main-content" role="main">
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

      {/* Feedback Widget */}
      <FeedbackWidget />
    </div>
  );
};

export default InstructionalDesignPortfolio;