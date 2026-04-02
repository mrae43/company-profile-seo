import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-surface relative overflow-hidden pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-left">
            <h1 
              id="hero-heading" 
              className="text-display-lg font-display font-bold text-on-surface tracking-tight leading-[1.1]"
            >
              Precision Engineering for Modern Medicine.
            </h1>
            <p className="mt-8 text-lg font-sans text-on-surface-variant max-w-xl">
              We architect digital clinical experiences that balance the warmth of human-centric care with the cold, sharp accuracy of laboratory science. The future of healthcare starts here.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link 
                to="/services" 
                className="bg-primary-gradient text-surface-container-lowest px-8 py-4 rounded-full font-display font-bold shadow-ambient text-center"
              >
                Explore Solutions
              </Link>
              <Link 
                to="/about" 
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-display font-bold text-center hover:bg-surface-container-low transition-colors"
              >
                Our Philosophy
              </Link>
            </div>
          </div>

          {/* Image / Graphic Area */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
            {/* The asymmetric layout block representing "High-Tech clinical feel" */}
            <div className="aspect-square bg-surface-container-highest relative overflow-hidden rounded-bl-[120px] shadow-ambient">
              <div className="absolute inset-0 bg-primary opacity-10 mix-blend-multiply"></div>
              {/* Simulated Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center text-on-surface-variant/30 font-display">
                [High-Res Medical Hardware Image]
              </div>
            </div>
            
            {/* Medical Data Chip overlay */}
            <div className="absolute -bottom-6 -left-6 bg-secondary-container rounded-sm px-6 py-4 shadow-ambient">
              <span className="block text-sm font-bold text-primary font-display uppercase tracking-wider">System Status</span>
              <span className="block text-2xl font-display font-medium text-on-surface mt-1">100.0% Optimized</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
