import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  thumbnail: string;
  challenge: string;
  process: string;
  solution: string;
  features: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 'cybersecurity-awareness',
    title: 'Cybersecurity Awareness',
    category: 'E-Learning',
    tagline: 'Interactive, inclusive training for digital vigilance',
    thumbnail: '/lovable-uploads/1244be3d-f796-4af6-a485-df2795589444.png',
    challenge: 'Employees needed practical cybersecurity knowledge to protect organizational data while maintaining productivity and confidence in digital tools.',
    process: 'Developed scenario-based microlearning modules focusing on real-world threats and practical responses. Applied cognitive load theory and multimedia principles to create engaging, memorable experiences.',
    solution: 'Interactive e-learning course with scenario-driven interactions, immediate feedback, and practical application exercises. WCAG 2.2 compliant with analytics-driven iterations.',
    features: ['Scenario-based learning', 'WCAG 2.2 compliance', 'Analytics tracking', 'Mobile-responsive design', 'Interactive feedback'],
    technologies: ['Articulate Storyline', 'Accessibility testing tools', 'SCORM packaging', 'Learning analytics']
  },
  {
    id: 'time-management',
    title: 'Time Management Strategies',
    category: 'Instructor-Led',
    tagline: 'Building sustainable, stress-free productivity habits',
    thumbnail: '/lovable-uploads/c3ed626d-d2f9-4f6e-8b75-3c0a9a20a522.png',
    challenge: 'Professionals struggled with time management and productivity while experiencing high levels of stress and overwhelm.',
    process: 'Created empathy-driven learning experiences that addressed common frustrations and tech anxiety. Incorporated relatable scenarios and supportive elements to build confidence.',
    solution: 'Comprehensive time management program with practical tools, stress-reduction techniques, and sustainable habit-building strategies.',
    features: ['Stress-reduction focus', 'Practical tools', 'Habit-building strategies', 'Interactive exercises', 'Progress tracking'],
    technologies: ['Interactive workshops', 'Digital planning tools', 'Video tutorials', 'Assessment instruments']
  },
  {
    id: 'brightspace-essentials',
    title: 'D2L Brightspace Essentials',
    category: 'Video',
    tagline: 'Building digital literacy through practical Brightspace use',
    thumbnail: '/lovable-uploads/70f90cd0-5f12-404b-82b3-e966a49a6dc2.png',
    challenge: 'Adult learners needed confidence and practical skills to navigate Brightspace effectively while managing tech anxiety.',
    process: 'Incorporated adult learner characters and scenario-based navigation tasks. Focused on empathizing with common frustrations to build confidence through relatable, self-paced guidance.',
    solution: 'Interactive video series with adult learner personas, practical navigation exercises, and confidence-building activities designed to reduce tech anxiety.',
    features: ['Adult learner personas', 'Scenario-based tasks', 'Self-paced learning', 'Confidence building', 'Practical navigation'],
    technologies: ['Video production', 'Interactive elements', 'Accessibility features', 'Mobile optimization']
  }
];

const PortfolioGallery = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Project Explorer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world learning solutions that demonstrate my approach to inclusive, effective instructional design
          </p>
        </div>

        {/* Project Grid */}
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="relative h-48 bg-secondary/20 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="portfolio-overlay">
                  <a
                    href={project.id === 'cybersecurity-awareness' 
                      ? 'https://d2i0gz0yrz84zc.cloudfront.net/'
                      : project.id === 'time-management'
                      ? 'https://dm37d6ma8nfm4.cloudfront.net/'
                      : 'https://d1v4a0lthjdu12.cloudfront.net/#/'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero text-base focus-visible"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;