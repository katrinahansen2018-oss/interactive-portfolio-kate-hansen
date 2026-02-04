import { useState } from 'react';
import { Search, PenTool, Code, Rocket, BarChart3, X } from 'lucide-react';

// Import images as ES6 modules for correct base path handling
import stakeholderInput from '@/assets/images/stakeholder-input.png';
import arcsFramework from '@/assets/images/arcs-framework.png';
import developAlex from '@/assets/images/develop-alex.png';
import implementSurvey from '@/assets/images/implement-survey.png';
import evaluateDashboard from '@/assets/images/evaluate-dashboard.png';

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
    theory: 'Grounded in needs assessment and performance analysis, I classify the type of learning outcomes required (such as intellectual skills, strategies, knowledge, behaviors, or attitudes). This ensures the training objectives are clear and directly aligned with performance needs, compliance requirements, and the instructional strategies chosen in the next phase.',
    imageNote: stakeholderInput
  },
  {
    id: 'design',
    title: 'Design',
    icon: <PenTool className="w-6 h-6" />,
    description: 'Creating learner-centered instructional strategies and blueprints',
    details: 'Using evidence-based design principles, I create detailed storyboards, interaction maps, and assessment strategies. This phase emphasizes Universal Design for Learning (UDL) principles to ensure accessibility and engagement for diverse learners.',
    theory: 'Merrill\'s First Principles of Instruction guide my design decisions, ensuring activation of prior knowledge, demonstration of skills, application opportunities, and integration into real-world contexts.',
    imageNote: arcsFramework
  },
  {
    id: 'develop',
    title: 'Develop',
    icon: <Code className="w-6 h-6" />,
    description: 'Building interactive learning experiences with modern tools',
    details: 'I develop content using industry-standard authoring tools like Articulate Storyline, Adobe Captivate, and custom HTML5/JavaScript solutions. Focus on responsive design, accessibility compliance (WCAG 2.1), and engaging multimedia integration.',
    theory: 'Cognitive Load Theory informs my multimedia design decisions, balancing visual and auditory channels while minimizing extraneous cognitive load through clean, purposeful interface design.',
    imageNote: developAlex
  },
  {
    id: 'implement',
    title: 'Implement',
    icon: <Rocket className="w-6 h-6" />,
    description: 'Deploying solutions with comprehensive support strategies',
    details: 'Plan the rollout with a small pilot, incorporate feedback, then scale.\n\nPrepare facilitators/admins with quick-start guides and short training.\n\nOnboard learners with clear instructions, FAQs, and support channels.\n\nProvide change support: comms plan, champions, and help desk workflows.\n\nDeliver implementation guides, troubleshooting resources, and a simple feedback loop (surveys, in-app prompts, issue log).',
    theory: 'Focus on stakeholder buy‑in, clear communication, and removing barriers so the new learning experience is easy to adopt.\n\nShow quick wins, share progress, and keep momentum until new practices become standard.',
    imageNote: implementSurvey
  },
  {
    id: 'evaluate',
    title: 'Evaluate',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Measuring impact and iterating for continuous improvement',
    details: 'Evaluate at four levels: learner reaction, learning gains, on‑the‑job behavior, and organizational results.\n\nGather quantitative analytics (completion, scores, time, device, error rates) and qualitative feedback (surveys, interviews, comments).\n\nAnalyze by objective and item to spot gaps, equity/access issues, and points of confusion.\n\nClose the loop: document findings, prioritize fixes, and schedule updates; share a brief readout with stakeholders.',
    theory: 'Measure whether the experience was useful, what was learned, what was applied, and what changed for the organization.\n\nUse both numbers and narratives to make evidence‑based improvements.',
    imageNote: evaluateDashboard
  }
];

const ProcessTimeline = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);
  const [viewedSteps, setViewedSteps] = useState<Set<string>>(new Set());

  const handleStepClick = (step: ProcessStep, index: number) => {
    setSelectedStep(step);
    const newViewedSteps = new Set(viewedSteps);
    newViewedSteps.add(step.id);
    setViewedSteps(newViewedSteps);
  };

  // Reset progress when component unmounts or resets
  const resetProgress = () => {
    setViewedSteps(new Set());
    window.dispatchEvent(new CustomEvent('process-step-reset'));
  };

  return (
    <section id="process" className="py-20 px-6 bg-muted/30" role="main">
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
        <div className="timeline-container" role="region" aria-label="Design process timeline">
          <div className="timeline-line" aria-hidden="true"></div>
          
          {processSteps.map((step, index) => (
            <div key={step.id} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              
              <div className="flex-1">
                <button
                  onClick={() => handleStepClick(step, index)}
                  className={`process-card w-full text-left group focus-visible ${viewedSteps.has(step.id) ? 'ring-2 ring-primary/20' : ''}`}
                  aria-label={`Learn more about ${step.title} phase - ${step.description}`}
                  aria-describedby={`step-${step.id}-description`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Step {index + 1}: {step.title}
                    </h3>
                  </div>
                  
                  <p id={`step-${step.id}-description`} className="text-muted-foreground mb-4 leading-relaxed">
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
                    {selectedStep.id === 'implement' ? 'Rationale' : selectedStep.id === 'evaluate' ? 'Rationale' : 'Theoretical Foundation'}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedStep.theory}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Annotated Documentation
                  </h4>
                  <div className="bg-secondary/20 rounded-lg p-6 border-2 border-solid border-secondary">
                    <div className="text-center text-muted-foreground">
                      {selectedStep.imageNote.startsWith('/') ? (
                        <img 
                          src={selectedStep.imageNote} 
                          alt="Process documentation example"
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-[1.3] cursor-zoom-in"
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
                     </div>
                   </div>
                   
                   {selectedStep.id === 'implement' ? (
                     <div className="flex justify-between mt-4">
                       <a 
                         href="https://dm37d6ma8nfm4.cloudfront.net/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                       >
                         View Course →
                       </a>
                       <a 
                         href="https://www.surveymonkey.com/r/JJ3K7Y6"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                       >
                         View Survey →
                       </a>
                     </div>
                   ) : (
                     <a 
                       href={selectedStep.id === 'design' 
                         ? "https://interactive-portfolio-instructional-designer-lxd.s3.us-east-2.amazonaws.com/ARCS-Framework.pdf"
                         : selectedStep.id === 'evaluate'
                         ? "https://d1sbe1ulbjmadi.cloudfront.net/"
                         : selectedStep.id === 'analyze'
                         ? "https://interactive-portfolio-instructional-designer-lxd.s3.us-east-2.amazonaws.com/Needs-Analysis.pdf"
                         : "https://d1v4a0lthjdu12.cloudfront.net/#/"
                       }
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                     >
                       {selectedStep.id === 'design' ? 'View ARCS Framework →' : selectedStep.id === 'evaluate' ? 'View Analytics →' : selectedStep.id === 'analyze' ? 'View full Analysis' : 'View Full Course →'}
                     </a>
                   )}
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