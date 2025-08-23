import { useState } from 'react';
import { Search, PenTool, Code, Rocket, BarChart3, X } from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  theory: string;
  imageNote: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 'analyze',
    title: 'Analyze',
    icon: <Search className="w-6 h-6" />,
    description: 'Conducting thorough needs analysis and learner profiling',
    details: 'I begin every project with comprehensive stakeholder interviews, learning environment analysis, and performance gap identification. This phase involves gathering data through surveys, interviews, and observation to understand the current state and desired outcomes.',
    theory: 'Grounded in Gagné\'s Conditions of Learning, I focus on identifying the type of learning outcome (intellectual skills, cognitive strategies, verbal information, motor skills, or attitudes) to inform the entire design approach.',
    imageNote: '/lovable-uploads/60813e46-06d5-4519-b680-1d2e547929ad.png'
  },
  {
    id: 'design',
    title: 'Design',
    icon: <PenTool className="w-6 h-6" />,
    description: 'Creating learner-centered instructional strategies and blueprints',
    details: 'Using evidence-based design principles, I create detailed storyboards, interaction maps, and assessment strategies. This phase emphasizes Universal Design for Learning (UDL) principles to ensure accessibility and engagement for diverse learners.',
    theory: 'Merrill\'s First Principles of Instruction guide my design decisions, ensuring activation of prior knowledge, demonstration of skills, application opportunities, and integration into real-world contexts.',
    imageNote: 'Storyboard wireframes showing learner journey maps and interactive element specifications'
  },
  {
    id: 'develop',
    title: 'Develop',
    icon: <Code className="w-6 h-6" />,
    description: 'Building interactive learning experiences with modern tools',
    details: 'I develop content using industry-standard authoring tools like Articulate Storyline, Adobe Captivate, and custom HTML5/JavaScript solutions. Focus on responsive design, accessibility compliance (WCAG 2.1), and engaging multimedia integration.',
    theory: 'Cognitive Load Theory informs my multimedia design decisions, balancing visual and auditory channels while minimizing extraneous cognitive load through clean, purposeful interface design.',
    imageNote: 'Development environment screenshots showing responsive e-learning modules across devices'
  },
  {
    id: 'implement',
    title: 'Implement',
    icon: <Rocket className="w-6 h-6" />,
    description: 'Deploying solutions with comprehensive support strategies',
    details: 'Strategic rollout includes pilot testing, instructor training, learner onboarding, and change management support. I create implementation guides, troubleshooting resources, and feedback collection systems.',
    theory: 'Kotter\'s Change Management framework guides implementation, ensuring stakeholder buy-in, clear communication, and systematic adoption of new learning technologies and processes.',
    imageNote: 'Implementation timeline with training schedules and stakeholder communication plans'
  },
  {
    id: 'evaluate',
    title: 'Evaluate',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Measuring impact and iterating for continuous improvement',
    details: 'Comprehensive evaluation using Kirkpatrick\'s Four-Level model: reaction, learning, behavior, and results. I collect quantitative analytics and qualitative feedback to measure effectiveness and identify improvement opportunities.',
    theory: 'Formative and summative evaluation strategies based on Scriven\'s evaluation methodology ensure continuous improvement and evidence-based decision making throughout the learning experience lifecycle.',
    imageNote: 'Analytics dashboard showing learner engagement metrics and performance improvement data'
  }
];

const ProcessTimeline = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  return (
    <section id="process" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Design Process & Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic, evidence-based methodology grounded in learning science and instructional design theory
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {processSteps.map((step, index) => (
            <div key={step.id} className="timeline-item">
              <div className="timeline-marker"></div>
              
              <div className="flex-1">
                <button
                  onClick={() => setSelectedStep(step)}
                  className="process-card w-full text-left group focus-visible"
                  aria-label={`Learn more about ${step.title} phase`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-4 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="text-primary font-medium group-hover:underline">
                    Explore this phase →
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Step Details */}
        {selectedStep && (
          <div className="modal-backdrop" onClick={() => setSelectedStep(null)}>
            <div 
              className="modal-content p-8 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-primary mr-4">
                    {selectedStep.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {selectedStep.title}
                  </h3>
                </div>
                
                <button
                  onClick={() => setSelectedStep(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 focus-visible"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    My Activities
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedStep.details}
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Theoretical Foundation
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedStep.theory}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Annotated Documentation
                  </h4>
                  <div className="bg-secondary/20 rounded-lg p-6 border-2 border-dashed border-secondary">
                    <div className="text-center text-muted-foreground">
                      {selectedStep.imageNote.startsWith('/') ? (
                        <img 
                          src={selectedStep.imageNote} 
                          alt="Process documentation example"
                          className="w-full h-auto rounded-lg mx-auto mb-4 border border-secondary/40"
                        />
                      ) : (
                        <>
                          <div className="w-16 h-16 bg-secondary/40 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            📸
                          </div>
                          <p className="text-sm leading-relaxed">
                            {selectedStep.imageNote}
                          </p>
                        </>
                      )}
                      <p className="text-xs mt-2 italic">
                        Interactive hotspots reveal process insights
                      </p>
                    </div>
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

export default ProcessTimeline;