import { ArrowRight, Play, Target, Pause } from 'lucide-react';
import { useRef, useState } from 'react';

interface HeroSectionProps {
  onNavigateToProcess: () => void;
  onNavigateToPortfolio: () => void;
}

const HeroSection = ({ onNavigateToProcess, onNavigateToPortfolio }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

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
      
      {/* Avatar Video with Play Button */}
      <div className="absolute top-40 left-16 w-56 h-56 z-20">
        <video
          ref={videoRef}
          className="w-full h-full rounded-full border-2 border-white object-cover bg-gray-200"
          poster="/kate-avatar-poster.png"
          playsInline
          controls={false}
          preload="metadata"
          onEnded={() => {
            setIsPlaying(false);
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.load(); // Force reload to show poster
            }
          }}
          onError={() => console.log("Video error")}
          onLoadStart={() => console.log("Video loading started")}
        >
          <source src="/avatar-video.mp4.mp4" type="video/mp4" />
        </video>
        
        {/* Play/Pause Button Overlay */}
        <button
          onClick={toggleVideo}
          className={`absolute inset-0 flex items-center justify-center rounded-full transition-all duration-300 group ${
            isPlaying 
              ? 'bg-transparent hover:bg-black/10' 
              : 'bg-black/20 hover:bg-black/30'
          }`}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <div className={`bg-white/50 rounded-full p-4 group-hover:bg-white/50 transition-all duration-300 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}>
            {isPlaying ? (
              <Pause className="w-8 h-8 text-black" />
            ) : (
              <Play className="w-8 h-8 text-black ml-1" />
            )}
          </div>
        </button>
      </div>
      
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