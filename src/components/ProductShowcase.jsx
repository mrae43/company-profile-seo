import { Link } from 'react-router-dom';
import ProductX from '../assets/productx.png';
import ProductY from '../assets/producty.png';
import ProductZ from '../assets/productz.png';

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
    </section>
  );
}
