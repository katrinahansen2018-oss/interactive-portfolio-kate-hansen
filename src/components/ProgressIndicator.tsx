import { useEffect, useState } from 'react';

interface Step {
  id: string;
  label: string;
  completed: boolean;
}

const ProgressIndicator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>([
    { id: 'analyze', label: 'Analyze', completed: false },
    { id: 'design', label: 'Design', completed: false },
    { id: 'develop', label: 'Develop', completed: false },
    { id: 'implement', label: 'Implement', completed: false },
    { id: 'evaluate', label: 'Evaluate', completed: false },
  ]);

  useEffect(() => {
    // Listen for custom events from ProcessTimeline for sequential progression
    const handleStepProgress = (event: CustomEvent) => {
      const { stepIndex } = event.detail;
      setCurrentStep(stepIndex);
      setSteps(prev => prev.map((step, index) => ({
        ...step,
        completed: index <= stepIndex
      })));
    };

    const handleStepReset = () => {
      setCurrentStep(0);
      setSteps(prev => prev.map(step => ({ ...step, completed: false })));
    };

    window.addEventListener('process-step-progress', handleStepProgress as EventListener);
    window.addEventListener('process-step-reset', handleStepReset as EventListener);
    
    return () => {
      window.removeEventListener('process-step-progress', handleStepProgress as EventListener);
      window.removeEventListener('process-step-reset', handleStepReset as EventListener);
    };
  }, []);

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
        <h4 className="text-sm font-semibold text-card-foreground mb-3">
          Design Process
        </h4>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step.completed 
                  ? 'bg-primary scale-110' 
                  : index === currentStep
                  ? 'bg-primary/50 scale-105'
                  : 'bg-muted-foreground/30'
              }`} />
              <span className={`text-xs transition-colors duration-300 ${
                step.completed 
                  ? 'text-primary font-medium' 
                  : index === currentStep
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-border">
          <div className="text-xs text-muted-foreground">
            Step {Math.min(currentStep + 1, steps.length)} of {steps.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;