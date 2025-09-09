import { useState } from 'react';
import { MessageCircle, ThumbsUp, ThumbsDown, X, Send } from 'lucide-react';

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<'helpful' | 'not-helpful' | null>(null);

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

          <form 
            action="https://formsubmit.co/katrina.hansen2018@gmail.com" 
            method="POST" 
            className="space-y-4"
          >
            {/* Hidden FormSubmit configuration fields */}
            <input type="hidden" name="_subject" value="Portfolio Feedback Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="page" value={window.location.href} />
            
            {/* Rating Selection */}
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

            {/* Hidden input for rating */}
            <input type="hidden" name="rating" value={rating || ''} />

            {/* Optional Comment */}
            <div>
              <label 
                htmlFor="feedback-comment"
                className="block text-sm font-medium text-card-foreground mb-2"
              >
                Tell me more (optional)
              </label>
              <textarea
                id="feedback-comment"
                name="comment"
                placeholder="How could this experience be improved?"
                className="w-full px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!rating}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackWidget;