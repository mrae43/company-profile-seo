import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-surface relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
              Integrated Medical Automation Partner
            </div>
            <h1 
              id="hero-heading" 
              className="text-display-lg font-display font-bold text-on-surface tracking-tight leading-[1.1] mb-8"
            >
              Modernizing Clinical & Industrial Workflows.
            </h1>
            <p className="text-lg font-sans text-on-surface-variant max-w-xl leading-relaxed">
              We provide specialized medical technology and high-precision hardware to modernize hospital and semiconductor workflows. From <strong>intelligent automated storage</strong> to <strong>AI-driven medication identification</strong>, we bridge the gap between physical logistics and digital tracking.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link 
                to="/products" 
                className="bg-primary-gradient text-surface-container-lowest px-10 py-4 rounded-full font-display font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
              >
                Explore Intelligent Systems
              </Link>
              <Link 
                to="/about" 
                className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-display font-bold text-center hover:bg-surface-container-low transition-all"
              >
                About Our Tech
              </Link>
            </div>
          </div>

          {/* Image Area */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
            <div className="aspect-[4/3] lg:aspect-square bg-surface-container-highest relative overflow-hidden rounded-[40px] lg:rounded-bl-[160px] shadow-2xl group">
              <img 
                src={heroImage} 
                alt="High-precision medical automation hardware" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Medical Data Chip overlay */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-outline-variant flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs font-bold text-primary font-display uppercase tracking-wider">MEDAO System Status</span>
                <span className="block text-xl font-display font-bold text-on-surface mt-0.5">100.0% Optimized</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
