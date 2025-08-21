import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  onNavigateToProcess: () => void;
  onNavigateToPortfolio: () => void;
}

const HeroSection = ({ onNavigateToProcess, onNavigateToPortfolio }: HeroSectionProps) => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-video-overlay" />
      
      {/* Content */}
      <div className="hero-content animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            [Your Name]
            <span className="block text-3xl md:text-4xl font-light mt-2 text-white/90">
              Instructional Designer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building inclusive learning experiences grounded in science and empathy.
          </p>
        </div>

        {/* Interactive Branching Choices */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onNavigateToProcess}
            className="btn-hero group"
            aria-label="Explore my design process"
          >
            <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            Explore my Design Process
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onNavigateToPortfolio}
            className="btn-hero group"
            aria-label="Browse my portfolio samples"
          >
            <span className="mr-3">🎯</span>
            Browse my Portfolio
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Video Placeholder Note */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm bg-black/30 rounded-lg px-4 py-2 inline-block">
            🎬 Background video placeholder: Subtle screen recording of authoring tool workflow
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;