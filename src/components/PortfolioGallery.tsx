import { useState } from 'react';
import { Filter, ExternalLink, Download, Play, X } from 'lucide-react';

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
    id: 'healthcare-simulation',
    title: 'Healthcare Communication Training',
    category: 'E-Learning',
    tagline: 'Interactive patient communication scenarios for medical residents',
    thumbnail: '🏥',
    challenge: 'Medical residents needed realistic practice with difficult patient conversations without risking real patient relationships during the learning process.',
    process: 'Collaborated with healthcare professionals to identify critical communication scenarios. Developed branching conversation simulations using Articulate Storyline with realistic patient personas and evidence-based feedback mechanisms.',
    solution: 'Interactive e-learning modules featuring realistic patient avatars, branching dialogue trees, and immediate feedback based on communication best practices. Includes reflection prompts and video examples from experienced physicians.',
    features: ['Branching scenarios', 'Realistic patient personas', 'Evidence-based feedback', 'Mobile-responsive design', 'Progress tracking'],
    technologies: ['Articulate Storyline', 'Adobe After Effects', 'Vyond Animation', 'SCORM packaging']
  },
  {
    id: 'accessibility-workshop',
    title: 'Digital Accessibility Certification',
    category: 'Instructor-Led',
    tagline: 'Hands-on workshop series for web developers and designers',
    thumbnail: '♿',
    challenge: 'Development teams lacked practical knowledge of accessibility standards and implementation techniques, leading to non-compliant digital products.',
    process: 'Designed experiential learning activities including screen reader simulations, accessibility audit exercises, and collaborative problem-solving sessions. Incorporated UDL principles throughout the workshop design.',
    solution: 'Multi-session certification program combining theory, hands-on practice, and real-world application. Participants work with assistive technologies and complete accessibility audits of their own projects.',
    features: ['Hands-on lab exercises', 'Assistive technology demos', 'Real-world project audits', 'Peer collaboration', 'Certification pathway'],
    technologies: ['Miro collaboration boards', 'Screen reader software', 'WAVE accessibility tools', 'GitHub integration']
  },
  {
    id: 'leadership-microlearning',
    title: 'Inclusive Leadership Microlearning',
    category: 'Video',
    tagline: 'Bite-sized leadership development for busy managers',
    thumbnail: '👥',
    challenge: 'Mid-level managers needed leadership development but had limited time for traditional training programs.',
    process: 'Developed microlearning video series with interactive elements, reflection exercises, and peer discussion components. Each module designed for 5-10 minute completion with practical application opportunities.',
    solution: 'Weekly microlearning videos with embedded knowledge checks, reflection prompts, and team discussion guides. Includes manager toolkit with conversation starters and implementation resources.',
    features: ['Microlearning format', 'Interactive video elements', 'Peer discussion guides', 'Manager toolkits', 'Progress analytics'],
    technologies: ['H5P interactive video', 'Vyond animation', 'Adobe Premiere', 'YouTube integration']
  },
  {
    id: 'onboarding-accessibility',
    title: 'Inclusive Employee Onboarding',
    category: 'Accessibility',
    tagline: 'Fully accessible digital onboarding experience',
    thumbnail: '🌟',
    challenge: 'Traditional onboarding process excluded employees with disabilities and created barriers to successful integration.',
    process: 'Conducted accessibility audit of existing onboarding materials. Redesigned entire experience using UDL principles with multiple formats, navigation options, and assistive technology compatibility.',
    solution: 'Multi-modal onboarding platform with video captions, audio descriptions, keyboard navigation, and screen reader optimization. Includes personalized learning paths based on role and accessibility needs.',
    features: ['WCAG 2.1 AA compliance', 'Multiple content formats', 'Personalized pathways', 'Assistive technology support', 'Progress tracking'],
    technologies: ['Accessible HTML/CSS', 'ARIA implementation', 'Video captioning tools', 'Screen reader testing']
  }
];

const categories = ['All', 'E-Learning', 'Instructor-Led', 'Video', 'Accessibility'];

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''} focus-visible`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="relative h-48 bg-secondary/20 flex items-center justify-center text-6xl">
                {project.thumbnail}
                
                <div className="portfolio-overlay">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-hero text-base focus-visible"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Case Study
                  </button>
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

        {/* Project Case Study Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div 
              className="modal-content p-8 animate-scale-in max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.tagline}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 focus-visible"
                  aria-label="Close case study"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      🎯 The Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      🔄 My Process
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.process}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      ✅ The Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {selectedProject.solution}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Key Features</h5>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="text-muted-foreground text-sm flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-secondary/30 text-secondary-foreground px-2 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-secondary/20 rounded-lg p-6 text-center">
                    <h5 className="font-semibold text-foreground mb-4">Interactive Demo</h5>
                    <div className="bg-secondary/30 rounded-lg p-8 mb-4 border-2 border-dashed border-secondary">
                      <div className="text-4xl mb-2">🎮</div>
                      <p className="text-sm text-muted-foreground">
                        Knowledge check module or video walkthrough placeholder
                      </p>
                    </div>
                    <button className="btn-secondary text-sm w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Launch Interactive Demo
                    </button>
                  </div>

                  <div className="space-y-3">
                    <button className="btn-secondary w-full text-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </button>
                    
                    <button className="btn-secondary w-full text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download Case Study PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;