import { useState } from 'react';
import { MessageCircle, ThumbsUp, ThumbsDown, X, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<'helpful' | 'not-helpful' | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Thank you for your feedback!",
      description: "Your input helps me continuously improve this portfolio experience.",
    });
    
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setRating(null);
      setComment('');
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-hover text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Open feedback form"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      ) : (
        <div className="bg-card border border-border rounded-lg shadow-xl w-80 p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-card-foreground">
              Was this page helpful?
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-ring rounded"
              aria-label="Close feedback form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setRating('helpful')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md border transition-colors ${
                    rating === 'helpful'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">Yes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRating('not-helpful')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md border transition-colors ${
                    rating === 'not-helpful'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span className="text-sm">No</span>
                </button>
              </div>

              <div>
                <label 
                  htmlFor="feedback-comment"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Tell me more (optional)
                </label>
                <textarea
                  id="feedback-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="How could this experience be improved?"
                  className="w-full px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                disabled={!rating}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Feedback</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-primary mb-2">
                <ThumbsUp className="w-8 h-8 mx-auto" />
              </div>
              <p className="text-sm text-card-foreground">
                Thank you for helping me improve!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackWidget;