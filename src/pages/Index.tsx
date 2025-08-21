import InstructionalDesignPortfolio from '@/components/InstructionalDesignPortfolio';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Instructional Designer - Building Inclusive Learning Experiences';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experienced instructional designer creating inclusive, evidence-based learning experiences. Specializing in UDL, accessibility, and learner-centered design methodology.');
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Instructional Designer - Building Inclusive Learning Experiences');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Evidence-based instructional design grounded in science and empathy');
    }
  }, []);

  return <InstructionalDesignPortfolio />;
};

export default Index;
