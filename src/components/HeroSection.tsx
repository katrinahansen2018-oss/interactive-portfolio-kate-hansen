import { ArrowRight, Play, Target } from 'lucide-react';

interface HeroSectionProps {
  onNavigateToProcess: () => void;
  onNavigateToPortfolio: () => void;
}

const HeroSection = ({ onNavigateToProcess, onNavigateToPortfolio }: HeroSectionProps) => {
  return (
    <section id="hero" className="hero-section-new">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="hero-overlay" />
      
      {/* Avatar Video */}
      <video
        className="absolute top-8 left-8 w-20 h-20 rounded-full border-2 border-white object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/avatar-video.mp4" type="video/mp4" />
      </video>
      
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
            aria-label="Explore my design process"
          >
            <Play className="w-5 h-5 mr-3" />
            Explore my Design Process
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
          
          <button 
            onClick={onNavigateToPortfolio}
            className="hero-button"
            aria-label="Browse my portfolio samples"
          >
            <Target className="w-5 h-5 mr-3" />
            Browse my Portfolio         
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;