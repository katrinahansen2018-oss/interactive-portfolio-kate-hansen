import { ArrowRight, Play, Target } from 'lucide-react';

interface HeroSectionProps {
  onNavigateToProcess: () => void;
  onNavigateToPortfolio: () => void;
}

const HeroSection = ({ onNavigateToProcess, onNavigateToPortfolio }: HeroSectionProps) => {

  return (
    <section id="hero" className="hero-section-new" role="banner">
      {/* Semi-transparent overlay */}
      <div className="hero-overlay" />
      
      
      {/* Content */}
      <div className="hero-content-new">
        <h1 className="hero-name">
          Kate Hansen
        </h1>
        
        <p className="hero-job-title">
          E-Learning Developer
        </p>
        
        <p className="hero-tagline">
          Empowering adult learners through meaningful, engaging design.
        </p>

        {/* Button Group */}
        <div className="hero-button-group">
          <button 
            onClick={onNavigateToProcess}
            className="hero-button"
            aria-label="Explore my instructional design values and approach"
          >
            <Play className="w-5 h-5 mr-3" aria-hidden="true" />
            Experience My Design Work
            <ArrowRight className="w-5 h-5 ml-3" aria-hidden="true" />
          </button>
          
          <button 
            onClick={onNavigateToPortfolio}
            className="hero-button"
            aria-label="Browse my portfolio samples - View examples of my learning solutions"
          >
            <Target className="w-5 h-5 mr-3" aria-hidden="true" />
            Explore Portfolio Samples         
            <ArrowRight className="w-5 h-5 ml-3" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;