import { Link } from 'react-router-dom';
import ProductX from '../assets/productx.png';
import ProductY from '../assets/producty.png';
import ProductZ from '../assets/productz.png';
import ProductM from '../assets/productm.png';

export default function ProductShowcase() {
  const products = [
    { id: 'X', name: '六格櫃', img: ProductX },
    { id: 'Y', name: '八格櫃', img: ProductY },
    { id: 'Z', name: '十六格櫃', img: ProductZ },
  ];

  return (
    <section className="py-24 bg-surface-container-low transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block bg-primary-container/20 text-primary-container px-8 py-3 rounded-full text-2xl font-bold tracking-[0.2em] uppercase border border-primary-container/30">
            模組化設計
          </div>
          <h2 className="text-display-lg font-display text-on-surface leading-tight">
            可根據習慣來調整出最適合的型態
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square overflow-hidden bg-surface-container-lowest transition-all duration-700 ease-in-out group-hover:shadow-ambient transform group-hover:-translate-y-2">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay for subtle interaction */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="mt-8 text-center">
                <p className="font-display text-lg font-medium text-on-surface tracking-tight">
                  {product.name}
                </p>
                <div className="mt-2 h-0.5 w-0 mx-auto bg-primary-container transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>

        {/* More Link - Hollow Style */}
        <div className="mt-20 flex justify-end">
          <Link 
            to="/products" 
            className="group flex items-center gap-3 px-8 py-3 rounded-full border border-outline-variant text-on-surface-variant text-sm font-bold tracking-widest uppercase hover:bg-surface-container-highest hover:border-primary-container transition-all duration-300"
          >
            <span>More</span>
            <div className="w-8 h-[1px] bg-outline-variant group-hover:bg-primary-container group-hover:w-12 transition-all duration-300" />
            <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block bg-primary-container/20 text-primary-container px-8 py-3 rounded-full text-2xl font-bold tracking-[0.2em] uppercase border border-primary-container/30">
            AI 藥物辨識
          </div>
          <h2 className="text-display-lg font-display text-on-surface leading-tight">
            取藥更精準方便
          </h2>
        </div>
        {/* AI Identification Product Row */}
        <div className="mt-20 relative bg-white overflow-hidden rounded-br-[80px] shadow-sm border border-outline-variant/10">
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Left Part: Product Image */}
            <div className="lg:w-1/2 flex items-center justify-center p-12 lg:p-20 relative z-10 transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src={ProductM} 
                alt="MEDAOI AI Identification System" 
                className="max-h-[350px] w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Part: Stylized Branding & Text */}
            <div className="lg:w-1/2 bg-surface-container-low p-12 lg:p-20 lg:pl-32 flex flex-col justify-center relative">
              <div className="space-y-8">
                <div className="text-3xl md:text-5xl font-display font-light text-on-surface flex items-center gap-2 flex-wrap whitespace-nowrap">
                  <span className="flex items-center tracking-[0.25em]">
                    M<span className="text-[#3b82f6]">E</span>D<span className="text-[#3b82f6]">A</span>O<span className="text-[#3b82f6]">I</span>
                  </span>
                  <span className="text-2xl md:text-3xl font-medium tracking-normal text-on-surface-variant">藥物辨識</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-medium text-on-surface mt-4 tracking-wider leading-relaxed">
                  AI 辨識 <span className="text-[#3b82f6]">「藥」</span>無一失
                </h3>
                
                {/* Lorem Ipsum padding as requested by user instruction */}
                <div className="max-w-md">
                  <p className="text-on-surface-variant/80 font-sans leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Precision in identification, excellence in care.
                  </p>
                </div>
              </div>
              <div className="mt-20 flex justify-end">
                <Link 
                  to="/products" 
                  className="group flex items-center gap-3 px-8 py-3 rounded-full border border-outline-variant text-on-surface-variant text-sm font-bold tracking-widest uppercase hover:bg-surface-container-highest hover:border-primary-container transition-all duration-300"
                >
                  <span>More</span>
                  <div className="w-8 h-[1px] bg-outline-variant group-hover:bg-primary-container group-hover:w-12 transition-all duration-300" />
                  <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
