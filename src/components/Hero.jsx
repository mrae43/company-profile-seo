import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg';

const ICON_PLAY = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
  </svg>
);

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-surface relative overflow-hidden pt-12 pb-24 lg:pt-32 lg:pb-48">
      {/* Structural background layers - no hard lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/30 rounded-bl-[200px] -z-10 hidden lg:block" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          
          {/* Text Content: Clinical Authority */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Established 2012
            </div>
            
            <h1 
              id="hero-heading" 
              className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold text-on-surface tracking-tight leading-[1.05] mb-8 text-balance"
            >
              Precision <span className="text-primary">Automation</span> for Clinical Excellence.
            </h1>
            
            <p className="text-xl font-sans text-on-surface-variant max-w-xl leading-relaxed mb-12 text-balance">
              Since 2012, we’ve bridged the gap in medical logistics. From <strong>intelligent automated storage</strong> to <strong>AI-driven dispensing</strong>, we provide high-precision ecosystems for hospitals and semiconductor leaders.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/products" 
                className="bg-primary text-surface px-10 py-5 rounded-full font-display font-bold shadow-ambient hover:shadow-primary/20 transition-all hover:-translate-y-1 text-lg"
              >
                Explore Solution Ecosystem
              </Link>
              
              <button 
                onClick={() => window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank')}
                className="flex items-center gap-3 bg-surface-container-highest text-on-surface px-8 py-5 rounded-full font-display font-bold hover:bg-on-surface/5 transition-all text-lg group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors">
                  {ICON_PLAY}
                </div>
                Integration Demo
              </button>
            </div>
          </div>

          {/* Image Area: Overlapping Modular Trio */}
          <div className="mt-24 lg:mt-0 lg:col-span-6 relative h-[400px] sm:h-[600px] flex items-center justify-center">
            {/* The "Trio" Visual Engine */}
            <div className="relative w-full h-full max-w-md lg:max-w-none perspective-1000">
              
              {/* Product A: Background layer */}
              <div className="absolute top-0 right-0 w-[60%] animate-float-slow opacity-40 blur-[2px] lg:blur-0 lg:opacity-100">
                <div className="aspect-[3/4] bg-surface-container-highest rounded-3xl sm:rounded-[40px] shadow-2xl overflow-hidden p-6 sm:p-10 flex items-center justify-center">
                  <img src={hero} alt="5-Drawer Modular Unit" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>
              </div>

              {/* Product B: Mid layer */}
              <div className="absolute top-1/4 left-0 w-[65%] z-20 animate-float">
                <div className="aspect-[3/4] bg-surface rounded-3xl sm:rounded-[40px] shadow-ambient overflow-hidden p-6 sm:p-10 flex items-center justify-center border border-primary/5">
                  <img src={hero} alt="6-Drawer Smart Storage" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>
              </div>

              {/* Product C: Foreground focus layer */}
              <div className="absolute -bottom-8 right-[5%] w-[55%] z-30 animate-float-delayed">
                <div className="aspect-[3/4] bg-white rounded-3xl sm:rounded-[40px] shadow-2xl overflow-hidden p-6 sm:p-10 flex items-center justify-center">
                  <img src={hero} alt="16-Pouch High Capacity" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>
              </div>

            </div>

            {/* Verification Status Overlay (Clinical Credibility) */}
            <div className="absolute -bottom-12 -left-4 sm:bottom-0 sm:-left-12 z-40 bg-surface/80 backdrop-blur-xl rounded-[32px] p-8 shadow-ambient border border-primary/10 flex items-center gap-6 group hover:border-primary/30 transition-colors duration-500">
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping" />
              </div>
              <div>
                <span className="block text-sm font-bold text-primary font-display uppercase tracking-widest">System Validation</span>
                <span className="text-3xl font-display font-bold text-on-surface block mt-1 tracking-tight">99.9% Accuracy</span>
                <p className="text-xs text-on-surface-variant font-sans mt-1">AI-Powered Verification Active</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Atmospheric lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-20 pointer-events-none" aria-hidden="true" />
    </section>
  );
}
