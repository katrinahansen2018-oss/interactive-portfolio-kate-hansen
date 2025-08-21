import { useState } from 'react';
import { Send, Calendar, Download, Linkedin, Mail, Phone, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="connect" className="footer-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-footer-foreground mb-6">
            Connect & Next Steps
          </h2>
          <p className="text-xl text-footer-foreground/80 max-w-3xl mx-auto">
            Ready to create exceptional learning experiences together? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-footer-foreground mb-6">
              Start a Project Discussion
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-footer-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-footer-foreground/10 border border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-footer-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-footer-foreground/10 border border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-footer-foreground mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-footer-foreground/10 border border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell me about your learning challenge, target audience, timeline, and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-footer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Actions & Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-footer-foreground mb-6">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                <button className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Schedule a 30-min Discovery Call
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="bg-footer-foreground/10 hover:bg-footer-foreground/20 text-footer-foreground font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center border border-footer-foreground/20">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </button>
                  
                  <button className="bg-footer-foreground/10 hover:bg-footer-foreground/20 text-footer-foreground font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center border border-footer-foreground/20">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-footer-foreground mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <p className="text-footer-foreground font-medium">Email</p>
                    <p className="text-footer-foreground/80 text-sm">your.name@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <p className="text-footer-foreground font-medium">Phone</p>
                    <p className="text-footer-foreground/80 text-sm">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-footer-foreground/10 rounded-lg p-6 border border-footer-foreground/20">
              <h4 className="text-lg font-semibold text-footer-foreground mb-3">
                Response Time
              </h4>
              <p className="text-footer-foreground/80 text-sm leading-relaxed">
                I typically respond to project inquiries within 24 hours. For urgent accessibility consultations or time-sensitive projects, please mention this in your message.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-footer-foreground/20">
          <p className="text-footer-foreground/60 text-sm">
            © 2024 [Your Name] • Instructional Designer • Building inclusive learning experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;