import { Link } from 'react-router-dom';
import ProductX from '../assets/productx.png';
import ProductY from '../assets/producty.png';
import ProductZ from '../assets/productz.png';
import ProductM from '../assets/productm.png';

const modularProducts = [
  { id: 'X', name: '六格櫃', img: ProductX },
  { id: 'Y', name: '八格櫃', img: ProductY },
  { id: 'Z', name: '十六格櫃', img: ProductZ },
];

export default function ProductShowcase() {
  return (
    <section 
      aria-labelledby="product-showcase-title" 
      className="py-24 md:py-32 bg-surface-container-low transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <header className="mb-20 space-y-6 md:w-2/3">
          <div className="inline-block bg-primary-container/20 text-primary-container px-6 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase">
            Smart Storage
          </div>
          <h2 id="product-showcase-title" className="text-display-lg md:text-[4.5rem] font-display text-on-surface leading-tight tracking-tight">
            模組化設計 <br className="hidden md:block"/> 出最適合的型態
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed mt-6">
            Our modular cabinets can be configured to match your clinical workflow exactly, scaling from small clinics to enterprise hospital environments.
          </p>
        </header>

        {/* Modular Products Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-32 items-end">
          {modularProducts.map((product, index) => (
            <article 
              key={product.id} 
              className={`group relative ${
                index === 0 ? 'md:col-span-5 md:col-start-1' : 
                index === 1 ? 'md:col-span-4 md:col-start-6' : 
                'md:col-span-3 md:col-start-10 md:-translate-y-12'
              }`}
            >
              <figure className="aspect-[4/5] bg-surface-container-lowest overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:shadow-ambient transform group-hover:-translate-y-2 rounded-sm relative">
                <img 
                  src={product.img} 
                  alt={`ADC ${product.name} module`}
                  className="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              </figure>
              <div className="mt-6">
                <h3 className="font-display text-xl font-medium text-on-surface tracking-tight">
                  {product.name}
                </h3>
                <div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-container transition-all duration-700 group-hover:w-full" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* Bio-Monitoring Strategic Element Addition */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center bg-surface p-8 lg:p-16 rounded-3xl" role="region" aria-label="Bio-Monitoring Feature">
          <div className="space-y-8 order-2 lg:order-1">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">
              New Capability
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-on-surface leading-tight">
              Bio-Monitoring Sensors
            </h3>
            <p className="text-on-surface-variant font-sans leading-relaxed text-lg">
              Integrated sensors actively monitor temperature and humidity within each modular compartment, ensuring high-risk and temperature-sensitive medications remain strictly within clinical parameters. 
            </p>
            <ul className="space-y-4 pt-4" aria-label="Bio-Monitoring features list">
              {['Real-time environmental tracking', 'Automated alert thresholds', 'Audit-ready compliance logs'].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <figure className="aspect-square bg-surface-container-low rounded-2xl flex items-center justify-center p-12 order-1 lg:order-2 group">
              {/* Abstract visualization of monitoring instead of missing asset */}
              <div className="relative w-full h-full rounded-full border border-outline-variant/15 flex items-center justify-center">
                <div className="absolute w-3/4 h-3/4 rounded-full border border-outline-variant/30 animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-1/2 h-1/2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-700">
                  <span className="text-primary font-display text-4xl font-light">22°C</span>
                </div>
              </div>
          </figure>
        </div>

        {/* AI Identification Product Context Section */}
        <section aria-labelledby="ai-showcase-title" className="relative bg-surface rounded-[2rem] lg:rounded-[4rem] rounded-br-[4rem] lg:rounded-br-[8rem] shadow-ambient overflow-hidden mt-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left Part: Stylized Branding & Text */}
            <div className="flex flex-col justify-center p-12 lg:p-24 space-y-10 relative z-10">
              <div className="inline-block bg-primary-container/20 text-primary-container px-6 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase self-start">
                AI Vision
              </div>
              
              <div className="space-y-6">
                <h3 id="ai-showcase-title" className="text-display-md md:text-5xl font-display font-light text-on-surface tracking-wide flex flex-wrap items-center gap-3">
                  <span className="font-semibold tracking-[0.1em]">MEDAO<span className="text-primary">I</span></span>
                  <span className="text-on-surface-variant font-medium text-3xl">藥物辨識</span>
                </h3>
                
                <p className="text-2xl font-display font-medium text-on-surface leading-normal">
                  取藥更精準 <span className="text-primary">「藥」</span>無一失
                </p>
                
                <p className="text-on-surface-variant font-sans leading-relaxed text-lg max-w-md">
                  Leveraging an advanced optical neural network, MEDAOI achieves 99.9% verification accuracy under 1 second. It creates an uninterrupted clinical chain from prescription to issuance.
                </p>
              </div>

              <div className="pt-8 flex">
                <Link 
                  to="/products" 
                  className="group relative flex items-center justify-center px-10 py-4 overflow-hidden rounded-full font-bold tracking-widest uppercase transition-all duration-300 bg-surface-container-highest text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  aria-label="Learn more about MEDAOI AI Identification"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Discover <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Part: Product Image with Editorial Staging */}
            <figure className="relative bg-surface-container-lowest flex items-center justify-center p-16 lg:p-24 overflow-hidden group">
              {/* Decorative radial background for depth without lines */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-surface-container-low)_0%,transparent_70%)] opacity-50" aria-hidden="true" />
              
              <img 
                src={ProductM} 
                alt="MEDAOI AI Identification System Hardware" 
                className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-[0_20px_40px_rgba(26,28,28,0.06)] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

      </div>
    </section>
  );
}
