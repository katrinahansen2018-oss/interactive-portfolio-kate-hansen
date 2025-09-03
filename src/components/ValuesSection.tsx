import { useState } from 'react';
import { Users, RefreshCw, Eye, Heart, Lightbulb, Target } from 'lucide-react';

interface Value {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  fullExplanation: string;
  audioNote: string;
  projectLink: string;
  videoLink?: string;
}

const values: Value[] = [
  {
    id: 'accessibility',
    title: 'Accessibility First',
    icon: <Eye className="w-8 h-8" />,
    description: 'Designing inclusive experiences that work for everyone, regardless of ability or technology access.',
    fullExplanation: 'Accessibility isn\'t an afterthought - it\'s woven into every design decision. From WCAG 2.1 compliance to cognitive load considerations, I ensure that learning experiences are truly inclusive. This means considering screen readers, keyboard navigation, color contrast, cognitive processing differences, and diverse technological contexts.',
    audioNote: 'Video: Why accessibility makes better learning for everyone, not just those with disabilities',
    projectLink: '#portfolio',
    videoLink: 'https://www.kate-hansen.com/hidden-page#accessibility'
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    icon: <RefreshCw className="w-8 h-8" />,
    description: 'Embracing iterative design cycles and data-driven refinements for optimal learning outcomes.',
    fullExplanation: 'Great instructional design is never "done." I build feedback loops into every project, using learner analytics, performance data, and stakeholder input to refine and improve experiences. This agile approach ensures solutions evolve with changing needs and best practices.',
    audioNote: 'Embracing failure and iteration has led to my best breakthroughs. For instance, in a recent e-learning module, initial user feedback revealed confusing navigation. I iterated quickly, boosting participation rates by 15%. This mindset turns setbacks into stronger, more effective learning solutions. I hold a Lean management certification and love applying PDCA (Plan-Do-Check-Act) cycles to instructional design projects. I also use the SAM (Successive Approximation Model) for iterative development, ensuring effective, learner-centered solutions.',
    projectLink: '#portfolio'
  },
  {
    id: 'udl',
    title: 'Universal Design',
    icon: <Users className="w-8 h-8" />,
    description: 'Applying UDL principles to create flexible learning environments that accommodate diverse learners.',
    fullExplanation: 'Universal Design for Learning (UDL) guides my approach to creating flexible, engaging learning environments. By providing multiple means of representation, engagement, and action/expression, I ensure that learning experiences meet diverse cognitive, physical, and cultural needs from the ground up.',
    audioNote: 'Personal story: How UDL transformed my approach to inclusive education design',
    projectLink: '#portfolio'
  },
  {
    id: 'empathy',
    title: 'Human-Centered Empathy',
    icon: <Heart className="w-8 h-8" />,
    description: 'Centering learner needs, emotions, and real-world contexts in every design decision.',
    fullExplanation: 'Behind every learning objective is a human with goals, fears, constraints, and aspirations. I prioritize deep empathy by conducting learner interviews, creating personas, and factoring in emotional and cognitive needs to design resonant experiences.',
    audioNote: 'Emotional design has been key to making my courses memorable. I\'ve learned that addressing learners\' frustrations (like tech anxiety) with supportive elements, like relatable scenarios, creates deeper connections. This approach turns potential overwhelm into motivation, as seen when a simple empathy map revealed pain points in a time management module, leading to more engaging, stress-reducing content.\n\nProject Example: In "Brightspace Essentials," I incorporated an adult learner character ("an adult learner just like you") for scenario-based navigation tasks, empathizing with common frustrations to build confidence and reduce tech anxiety through relatable, self-paced guidance.',
    projectLink: '#portfolio'
  },
  {
    id: 'evidence-based',
    title: 'Evidence-Based Practice',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Grounding design decisions in learning science research and measurable outcomes.',
    fullExplanation: 'Every design choice I make is backed by research in cognitive science, educational psychology, and learning analytics. I stay current with emerging research and translate complex academic findings into practical, effective learning solutions that deliver measurable results.',
    audioNote: 'Deep dive: How learning science research directly influences my design methodology',
    projectLink: '#portfolio'
  },
  {
    id: 'purposeful',
    title: 'Purposeful Simplicity',
    icon: <Target className="w-8 h-8" />,
    description: 'Eliminating cognitive noise to focus learners on what truly matters for their goals.',
    fullExplanation: 'In a world of information overload, I champion purposeful simplicity. Every element in a learning experience should serve a clear instructional purpose. I ruthlessly eliminate distractions, streamline interfaces, and focus attention on the essential learning objectives.',
    audioNote: 'Philosophy: Why "less but better" creates more powerful learning experiences',
    projectLink: '#portfolio'
  }
];

const ValuesSection = () => {
  const [expandedValue, setExpandedValue] = useState<Value | null>(null);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="values" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Instructional Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The core principles that guide every learning experience I create
          </p>
        </div>

        {/* Interactive Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <button
              key={value.id}
              onClick={() => setExpandedValue(value)}
              className="value-card text-left focus-visible group"
              aria-label={`Learn more about ${value.title}`}
            >
              <div className="mb-6 text-secondary group-hover:text-primary-foreground transition-colors">
                {value.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary-foreground transition-colors">
                {value.title}
              </h3>
              
              <p className="text-sm leading-relaxed group-hover:text-primary-foreground/90 transition-colors">
                {value.description}
              </p>

              <div className="mt-6 text-primary group-hover:text-primary-foreground font-medium text-sm">
                Explore this value →
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Value Modal */}
        {expandedValue && (
          <div className="modal-backdrop" onClick={() => setExpandedValue(null)}>
            <div 
              className="modal-content p-8 animate-scale-in max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-primary mr-4">
                    {expandedValue.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {expandedValue.title}
                  </h3>
                </div>
                
                <button
                  onClick={() => setExpandedValue(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 focus-visible"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Why This Matters
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {expandedValue.fullExplanation}
                  </p>
                </div>

                {expandedValue.id === 'evidence-based' && (
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      My Reflection
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In my design methodology, I draw directly from learning science, like cognitive load theory to avoid overwhelming learners and Mayer's multimedia principles for effective visuals. For instance, I use spaced repetition and feedback loops to boost retention, as seen in my courses where analytics show improved outcomes. This evidence-based approach ensures my work is not just intuitive but proven, allowing continual refinement for real impact.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Project Example:</strong> In my "Cybersecurity Awareness" microlearning course, I applied cognitive load theory and multimedia research to create scenario-driven interactions that optimize retention without overload. WCAG 2.2 compliance ensured accessibility, with analytics-driven iterations improving engagement by addressing real learner data.
                    </p>
                  </div>
                )}

                {expandedValue.id === 'purposeful' && (
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Example:</strong> A streamlined storyboard from "Brightspace D2L Essentials" that focuses solely on key navigation tasks, reducing complexity for better learner focus.
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <a
                    href={expandedValue.id === 'purposeful' 
                      ? "https://static1.squarespace.com/static/6874622833139907a7dd4a1c/t/68914d7535a11c54c372f270/1754353014446/Storyboard.png"
                      : "https://d2i0gz0yrz84zc.cloudfront.net/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    See it in action →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ValuesSection;