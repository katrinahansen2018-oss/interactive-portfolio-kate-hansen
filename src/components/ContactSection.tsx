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
            Connect
          </h2>
          <p className="text-xl text-footer-foreground/80 max-w-3xl mx-auto">
            Interested in how my expertise can support your organization's learning initiatives?
            <br />
            I welcome the opportunity to discuss how I can contribute to your team.
          </p>
        </div>

        {/* Unified Contact Panel */}
        <div className="max-w-4xl mx-auto bg-footer-foreground/5 rounded-xl border border-footer-foreground/20 p-8 md:p-12">
          {/* Quick Actions Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-footer-foreground mb-8">
              Quick Actions & Direct Contact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <a 
                href="https://static1.squarespace.com/static/6874622833139907a7dd4a1c/t/68bb742fb1299602325678ff/1757115439672/Kate+Hansen+e-Learning+Developer+CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-footer-foreground/10 hover:bg-footer-foreground/20 text-footer-foreground font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center border border-footer-foreground/20"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kate-hansen-med-8a48bb25"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-footer-foreground/10 hover:bg-footer-foreground/20 text-footer-foreground font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center border border-footer-foreground/20"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
              
              <a 
                href="mailto:katrina.hansen2018@gmail.com"
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-footer"
              >
                <Mail className="w-4 h-4 mr-2" />
                Connect via Email
              </a>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-4" />
                <div>
                  <p className="text-footer-foreground font-medium">Email</p>
                  <p className="text-footer-foreground/80 text-sm">katrina.hansen2018@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-4" />
                <div>
                  <p className="text-footer-foreground font-medium">Phone</p>
                  <p className="text-footer-foreground/80 text-sm">(403) 926-0657</p>
                </div>
              </div>
            </div>

            <div className="bg-footer-foreground/10 rounded-lg p-6 border border-footer-foreground/20">
              <h4 className="text-lg font-semibold text-footer-foreground mb-3">
                Response Time
              </h4>
              <p className="text-footer-foreground/80 text-sm leading-relaxed">
                I typically respond to employment and collaboration inquiries within 24 hours. For urgent matters, please mention this in your message.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-2xl font-bold text-footer-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="Enter your name"
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
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-footer-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-footer-foreground/10 border border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                  placeholder="How can I support your team?"
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
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-footer-foreground/20">
          <p className="text-footer-foreground/60 text-sm">
            © 2025 Kate Hansen • E-Learning Developer • Passionate About Learning, Inspired by Possibility
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;