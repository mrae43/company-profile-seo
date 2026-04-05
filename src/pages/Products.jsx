import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import imgBaiguo from '../assets/baiguo4_18.png';
import imgProductm from '../assets/productm.png';
import imgProducty from '../assets/producty.png';
import imgProductA from '../assets/productA.png';
import imgProductB from '../assets/productB.png';
import imgProductC from '../assets/productC.png';

export default function Products() {
  const [activeStorageTab, setActiveStorageTab] = useState('modular-boxes');
  const [openSpecs, setOpenSpecs] = useState({ storage: false, ai: false });

  const toggleSpecs = (section) => {
    setOpenSpecs(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>產品介紹 & 解決方案 | Clinical Architect</title>
        <meta name="description" content="Explore our complete pharmacy automation ecosystem. Intelligence meets storage with MEDAO AI Scanner and Smart Cabinets." />
      </Helmet>
      
      <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-primary-fixed-dim">
        
        {/* 1. Global Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-left space-y-8 z-10">
                <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight text-on-surface leading-[1.1]">
                  Intelligence Meets <span className="text-primary">Storage.</span>
                </h1>
                <p className="font-sans text-lg lg:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                  The Complete Pharmacy Automation Ecosystem. We integrate AI-driven identification with intelligent modular storage to completely error-proof clinical workflow.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                  <a 
                    href="#storage" 
                    onClick={(e) => smoothScroll(e, 'storage')}
                    className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-medium shadow-[0_20px_40px_rgba(77,103,0,0.2)] hover:-translate-y-1 transition-transform duration-300"
                  >
                    ADC智能藥櫃
                  </a>
                  <a 
                    href="#dispensing" 
                    onClick={(e) => smoothScroll(e, 'dispensing')}
                    className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-surface-container-highest text-on-surface font-medium hover:bg-surface-container-lowest transition-colors duration-300"
                  >
                    智能調劑台
                  </a>
                  <a 
                    href="#ai" 
                    onClick={(e) => smoothScroll(e, 'ai')}
                    className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-surface-container-highest text-on-surface font-medium hover:bg-surface-container-lowest transition-colors duration-300"
                  >
                    MEDAOI
                  </a>
                </div>
              </div>
              <div className="relative z-0">
                {/* The Angular Tech Split Visual */}
                <div className="w-full aspect-square lg:aspect-[4/3] rounded-2xl bg-surface backdrop-blur-2xl flex relative overflow-hidden shadow-[0_40px_80px_rgba(26,28,28,0.08)] border border-outline-variant/10">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface-container-low to-transparent opacity-80 z-0 pointer-events-none"></div>
                  
                  {/* Three equal vertical sections with a sharp divider */}
                  <div className="flex w-full h-full divide-x divide-primary/30 relative z-10 mix-blend-multiply dark:mix-blend-normal">
                    
                    {/* Slot 1 `*/}
                    <div className="flex-1 relative group overflow-hidden bg-surface-container hover:bg-surface-container-lowest transition-colors duration-500 flex items-center justify-center p-2 sm:p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img src={imgProducty} alt="Smart Cabinet" className="w-full h-[80%] object-contain drop-shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700" />
                    </div>
                    
                    {/* Slot 2 */}
                    <div className="flex-1 relative group overflow-hidden bg-surface-container hover:bg-surface-container-lowest transition-colors duration-500 flex items-center justify-center p-2 sm:p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img src={imgBaiguo} alt="智能調劑台" className="w-full h-[80%] object-contain drop-shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700" />
                    </div>

                    {/* Slot 3 */}
                    <div className="flex-1 relative group overflow-hidden bg-surface-container hover:bg-surface-container-lowest transition-colors duration-500 flex items-center justify-center p-2 sm:p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img src={imgProductm} alt="MEDAO Scanner" className="w-full h-[80%] object-contain drop-shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Categorization: Power of Two */}
        <section className="py-24 bg-surface relative z-10 -mt-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Card 1 */}
              <div 
                onClick={(e) => smoothScroll(e, 'storage')}
                className="group cursor-pointer p-10 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300 shadow-[0_20px_40px_rgba(26,28,28,0.03)]"
              >
                <div className="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium text-on-surface mb-3 group-hover:text-primary transition-colors">Smart Modular Storage</h3>
                <p className="text-on-surface-variant font-sans">High-capacity, precision-driven automated dispensing systems tailored for any spatial constraint.</p>
              </div>
               {/* Card 2 */}
              <div 
                onClick={(e) => smoothScroll(e, 'ai')}
                className="group cursor-pointer p-10 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300 shadow-[0_20px_40px_rgba(26,28,28,0.03)]"
              >
                 <div className="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium text-on-surface mb-3 group-hover:text-primary transition-colors">AI Identification</h3>
                <p className="text-on-surface-variant font-sans">Vision-based medication verification preventing errors before they reach the patient.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bridging the workflow - The "Workflow" Bridge */}
        <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/15">
           <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
             <h2 className="text-3xl font-display font-medium text-on-surface mb-16">The Intelligent Workflow</h2>
             
             <div className="flex flex-col md:flex-row items-center justify-between relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-outline-variant/30 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center max-w-[240px] mb-12 md:mb-0">
                  <div className="h-24 w-24 rounded-full bg-surface-container-highest shadow-[0_20px_40px_rgba(26,28,28,0.06)] flex items-center justify-center mb-6 ring-8 ring-surface-container-lowest">
                     <span className="text-primary font-display text-2xl font-bold">01</span>
                  </div>
                  <h4 className="font-sans font-semibold text-on-surface mb-2">Scan Prescription</h4>
                  <p className="text-sm text-on-surface-variant">MEDAO algorithm instantly verifies the medication profile.</p>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center max-w-[240px] mb-12 md:mb-0">
                  <div className="h-24 w-24 rounded-full bg-surface-container-highest shadow-[0_20px_40px_rgba(26,28,28,0.06)] flex items-center justify-center mb-6 ring-8 ring-surface-container-lowest">
                     <span className="text-primary font-display text-2xl font-bold">02</span>
                  </div>
                  <h4 className="font-sans font-semibold text-on-surface mb-2">Automatic Retrieval</h4>
                  <p className="text-sm text-on-surface-variant">Smart Storage unlocks only the necessary compartment.</p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center max-w-[240px]">
                  <div className="h-24 w-24 rounded-full bg-surface-container-highest shadow-[0_20px_40px_rgba(26,28,28,0.06)] flex items-center justify-center mb-6 ring-8 ring-surface-container-lowest">
                     <span className="text-primary font-display text-2xl font-bold">03</span>
                  </div>
                  <h4 className="font-sans font-semibold text-on-surface mb-2">Guided dispensing</h4>
                  <p className="text-sm text-on-surface-variant">LED Light guides staff directly to the correct physical location.</p>
                </div>
             </div>
           </div>
        </section>

        {/* 3. Category A: Smart Modular Storage */}
        <section id="storage" className="py-32 bg-surface scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
               <span className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-xs font-semibold rounded-sm mb-6 uppercase tracking-wider">Product Line A</span>
               <h2 className="text-4xl lg:text-5xl font-display font-bold text-on-surface mb-6">ADC智能藥櫃</h2>
               <p className="text-xl text-on-surface-variant max-w-3xl">Intelligently engineered automated dispensing cabinets featuring modular medicine boxes, dynamic light guidance, and precise electronic weighing to eliminate errors and streamline clinical workflows.</p>
            </div>

            {/* Feature Switcher */}
            <div className="flex space-x-2 mb-8 overflow-x-auto pb-4 no-scrollbar">
              {['modular-boxes', 'light-guidance', 'electronic-weighing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveStorageTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeStorageTab === tab 
                      ? 'bg-on-surface text-surface' 
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest'
                  }`}
                >
                  {tab === 'modular-boxes' ? 'Modular Boxes' : tab === 'light-guidance' ? 'Light Guidance' : 'Electronic Weighing'}
                </button>
              ))}
            </div>

            <div className="bg-surface-container-low rounded-3xl p-8 lg:p-16 mb-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-[500px]">
                {/* Image on the left */}
                <div className="w-full lg:w-1/2">
                   <div className="bg-surface-container-lowest/50 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_40px_rgba(26,28,28,0.06)] border border-outline-variant/10">
                     <img 
                       src={activeStorageTab === 'modular-boxes' ? imgProductA : activeStorageTab === 'light-guidance' ? imgProductB : imgProductC}
                       alt={activeStorageTab}
                       className="w-full mix-blend-multiply dark:mix-blend-normal h-auto max-h-[350px] object-contain drop-shadow-xl"
                     />
                   </div>
                </div>

                {/* Text on the right */}
                <div className="w-full lg:w-1/2 text-left text-on-surface-variant">
                   <div className="text-3xl font-display font-medium mb-4 text-on-surface">
                     {activeStorageTab === 'modular-boxes' ? 'Modular Medicine Boxes (模組化藥盒)' : activeStorageTab === 'light-guidance' ? 'Light Guidance (燈光導引)' : 'Electronic Weighing (電子秤重)'}
                   </div>
                   <p className="text-lg opacity-80 leading-relaxed max-w-lg">
                     {activeStorageTab === 'modular-boxes' ? '藥盒尺寸可任選，內抽隔間可調整。' : activeStorageTab === 'light-guidance' ? '調劑人員可通過燈光指引藥品的位置。' : '調劑人員可通過軟體功能同步監測商品的重量計數。'}
                   </p>
                </div>
            </div>

            {/* Contextual Specs Accordion */}
            <div>
               <button 
                  onClick={() => toggleSpecs('storage')}
                  className="flex items-center justify-between w-full p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors rounded-xl font-medium text-on-surface shadow-[0_10px_20px_rgba(26,28,28,0.02)]"
                >
                  <span>Technical Specifications - Modular Arrays</span>
                  <svg className={`w-5 h-5 transform transition-transform ${openSpecs.storage ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
               </button>
               {openSpecs.storage && (
                  <div className="p-6 mt-2 text-sm text-on-surface-variant leading-relaxed bg-surface-container-lowest rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                       <div>
                         <strong className="block text-on-surface mb-1">Dimensions (Standard Base)</strong>
                         900mm (W) x 600mm (D) x 1050mm (H)
                       </div>
                       <div>
                         <strong className="block text-on-surface mb-1">Tracking Protocol</strong>
                         UHF RFID (ISO 18000-6C)
                       </div>
                       <div>
                         <strong className="block text-on-surface mb-1">Power Requirement</strong>
                         110V/220V Auto-switching
                       </div>
                       <div>
                         <strong className="block text-on-surface mb-1">Security</strong>
                         Biometric / Near-field Badge
                       </div>
                    </div>
                  </div>
               )}
            </div>
          </div>
        </section>

        {/* Category B: Light Guidance (燈光導引) */}
        <section id="light-guidance" className="py-32 bg-surface-container-low scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Content Side */}
              <div className="order-2 lg:order-1 space-y-12">
                <div>
                  <span className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-xs font-semibold rounded-sm mb-6 uppercase tracking-wider">Product Line B</span>
                  <h2 className="text-4xl lg:text-6xl font-display font-bold text-on-surface mb-4 leading-tight">燈光導引 & <span className="text-primary">電子標籤</span></h2>
                  <p className="text-xl text-on-surface-variant font-sans tracking-tight">Smart Dispensing & Electronic Labeling System</p>
                </div>

                <div className="space-y-8">
                  {/* Feature 1: Light Guidance */}
                  <div className="group p-8 rounded-2xl bg-surface-container-lowest hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(26,28,28,0.02)] border border-outline-variant/10">
                    <div className="flex items-start gap-6">
                      <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-on-surface mb-2">燈光導引 | Light Guidance</h3>
                        <p className="text-on-surface-variant leading-relaxed">
                          可設計成多種顏色的燈光，讓每個調劑人員可藉著燈光，指引到自己藥品的位置。
                          <span className="block mt-1 text-sm opacity-60 italic">Configurable multi-colored lights guide each staff member directly to their specific medication location.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2: Electronic Medicine Box */}
                  <div className="group p-8 rounded-2xl bg-surface-container-lowest hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(26,28,28,0.02)] border border-outline-variant/10">
                    <div className="flex items-start gap-6">
                      <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 11h.01M7 15h.01M13 7h.01M13 11h.01M13 15h.01M17 7h.01M17 11h.01M17 15h.01M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-on-surface mb-2">電子藥盒 | Electronic Bins</h3>
                        <p className="text-on-surface-variant leading-relaxed">
                          每個藥盒加入電子標籤，將藥品品名、庫存數量、條碼、燈光或色塊一併呈現在面板前。
                          <span className="block mt-1 text-sm opacity-60 italic">Each bin is equipped with electronic labels displaying drug names, inventory levels, and status indicators in real-time.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-surface text-sm rounded-full">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Pick-to-Light Technology
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform -translate-x-12"></div>
                <div className="relative bg-surface-container-lowest p-6 sm:p-12 rounded-[2rem] shadow-[0_40px_80px_rgba(26,28,28,0.08)] border border-outline-variant/10 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-700 group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                  <img src={imgBaiguo} alt="Light Guidance Hardware" className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating Metric Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 bg-surface/80 backdrop-blur-md p-4 rounded-xl border border-outline-variant/20 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-on-surface font-sans">99.9% Dispensing Accuracy</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-widest">Medical Grade</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Category C: AI Identification (MEDAO) */}
        <section id="ai" className="py-32 bg-surface-container-low scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
               <span className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-xs font-semibold rounded-sm mb-6 uppercase tracking-wider">Product Line C</span>
               <h2 className="text-4xl lg:text-5xl font-display font-bold text-on-surface mb-16">MEDAO Verification</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Feature to benefit: image side */}
               <div className="aspect-square bg-surface-container-lowest rounded-3xl flex items-center justify-center p-12 shadow-[0_30px_60px_rgba(26,28,28,0.05)]">
                  <div className="text-center text-on-surface-variant">
                     <div className="text-xl font-display mb-2">
                       <img src={imgProductm} alt="MEDAO Verification" className="w-full h-auto max-h-[350px] object-contain drop-shadow-xl" />
                     </div>
                  </div>
               </div>

               {/* Feature to benefit: text side */}
               <div className="space-y-12">
                  <div className="flex flex-col space-y-4">
                     <div className="h-10 w-10 flex items-center justify-center bg-surface-container-highest rounded-full">
                       <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <h3 className="text-2xl font-display font-medium text-on-surface">Rapid AI Verification</h3>
                     <p className="text-on-surface-variant leading-relaxed">Achieve high-precision results with ~1 second identification per medicine bag, significantly reducing dispensing errors through advanced AI morphology analysis.</p>
                  </div>

                  <div className="flex flex-col space-y-4">
                     <div className="h-10 w-10 flex items-center justify-center bg-surface-container-highest rounded-full">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                     </div>
                     <h3 className="text-2xl font-display font-medium text-on-surface">Operational Efficiency</h3>
                     <p className="text-on-surface-variant leading-relaxed">Supports both standalone and networked operations to minimize human resource requirements and address clinical pharmacist shortages through automated digital logging.</p>
                  </div>
               </div>
            </div>

            {/* Clinical Integration Workflow */}
            <div className="mt-24 mb-16 px-4">
              <div className="text-center mb-16">
                 <h3 className="text-2xl lg:text-3xl font-display font-medium text-on-surface mb-2">Clinical Integration Workflow</h3>
                 <p className="text-on-surface-variant font-sans text-sm tracking-widest uppercase mb-8">導入AI藥物辨識儀器之調劑流程</p>
              </div>

              <div className="relative max-w-5xl mx-auto">
                {/* Desktop Workflow (Horizontal) */}
                <div className="hidden lg:block relative h-[240px]">
                  {/* SVG Connectors */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none">
                    {/* Main Line */}
                    <path d="M 80 160 H 920" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-outline-variant/30" />
                    
                    {/* Automation Branch Curve */}
                    <path d="M 230 140 C 230 80, 580 80, 580 140" stroke="currentColor" strokeWidth="2" className="text-primary-container" />
                    
                    {/* Arrows */}
                    <path d="M 135 160 L 145 160" stroke="currentColor" strokeWidth="2" className="text-primary-fixed-dim" />
                    <path d="M 310 160 L 320 160" stroke="currentColor" strokeWidth="2" className="text-primary-fixed-dim" />
                    <path d="M 485 160 L 495 160" stroke="currentColor" strokeWidth="2" className="text-primary-fixed-dim" />
                    <path d="M 660 160 L 670 160" stroke="currentColor" strokeWidth="2" className="text-primary-fixed-dim" />
                    <path d="M 835 160 L 845 160" stroke="currentColor" strokeWidth="2" className="text-primary-fixed-dim" />
                  </svg>

                  {/* Steps */}
                  <div className="absolute inset-0 flex items-center justify-between px-0">
                    {/* 01. Prescription */}
                    <div className="flex flex-col items-center w-[160px] translate-y-10">
                      <div className="px-6 py-3 bg-surface-container-highest text-on-surface rounded-full text-sm font-medium border border-outline-variant/10 shadow-sm whitespace-nowrap">
                        醫師處方 <span className="opacity-60 ml-1">Prescription</span>
                      </div>
                    </div>

                    {/* 02. Review */}
                    <div className="flex flex-col items-center w-[160px] translate-y-10 relative">
                      <div className="px-6 py-3 bg-surface-container-highest text-on-surface rounded-full text-sm font-medium border border-outline-variant/10 shadow-sm whitespace-nowrap">
                        藥師審核 <span className="opacity-60 ml-1">Review</span>
                      </div>
                      {/* Branch Label */}
                      <div className="absolute -top-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-secondary-container text-primary text-[10px] font-bold rounded-full uppercase tracking-tighter whitespace-nowrap">
                        自動包藥配方 <span className="opacity-70 ml-1">Automated Packaging</span>
                      </div>
                    </div>

                    {/* 03. Dispensing */}
                    <div className="flex flex-col items-center w-[160px] translate-y-10">
                      <div className="px-6 py-3 bg-surface-container-highest text-on-surface rounded-full text-sm font-medium border border-outline-variant/10 shadow-sm whitespace-nowrap">
                        藥師調劑 <span className="opacity-60 ml-1">Dispensing</span>
                      </div>
                    </div>

                    {/* 04. Integration */}
                    <div className="flex flex-col items-center w-[160px] translate-y-10">
                      <div className="px-6 py-3 bg-surface-container-highest text-on-surface rounded-full text-sm font-medium border border-outline-variant/10 shadow-sm whitespace-nowrap">
                        藥物整合 <span className="opacity-60 ml-1">Integration</span>
                      </div>
                    </div>

                    {/* 05. AI Verification - HIGHLIGHTED */}
                    <div className="flex flex-col items-center w-[160px] translate-y-10 transform scale-110 z-10 transition-transform hover:scale-115">
                      <div className="px-6 py-3 bg-primary-gradient text-white rounded-full text-sm font-semibold shadow-[0_10px_30px_rgba(77,103,0,0.3)] ring-4 ring-surface-container-low whitespace-nowrap">
                        儀器覆核 <span className="opacity-80 ml-1 text-xs">AI Scan</span>
                      </div>
                    </div>

                    {/* 06. Issuance */}
                    <div className="flex flex-col items-center w-[160px] translate-y-10">
                      <div className="px-6 py-3 bg-surface-container-highest text-on-surface rounded-full text-sm font-medium border border-outline-variant/10 shadow-sm whitespace-nowrap">
                        發藥 <span className="opacity-60 ml-1">Issuance</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Workflow (Vertical) */}
                <div className="lg:hidden flex flex-col space-y-10 items-center">
                   {[
                     { label: "醫師處方", en: "Prescription" },
                     { label: "藥師審核", en: "Review", branch: true },
                     { label: "藥師調劑", en: "Dispensing" },
                     { label: "藥物整合", en: "Integration" },
                     { label: "儀器覆核", en: "AI Verification", highlight: true },
                     { label: "發藥", en: "Issuance" }
                   ].map((step, idx, arr) => (
                     <div key={idx} className="flex flex-col items-center relative w-full max-w-[280px]">
                        {idx < arr.length - 1 && (
                          <div className="absolute top-12 bottom-[-40px] w-px bg-outline-variant/30 left-1/2 -translate-x-1/2 z-0 border-r border-dashed border-outline-variant/20"></div>
                        )}
                        
                        {step.branch && (
                           <div className="absolute -top-6 right-0 translate-x-1/2 px-3 py-1 bg-secondary-container text-primary text-[8px] font-bold rounded-full uppercase tracking-tighter">
                             Automated Packaging
                           </div>
                        )}

                        <div className={`
                          px-8 py-3 rounded-full text-sm font-medium shadow-sm relative z-10 w-full text-center
                          ${step.highlight ? 'bg-primary-gradient text-white scale-105 shadow-md' : 'bg-surface-container-highest text-on-surface border border-outline-variant/10'}
                        `}>
                          {step.label} <span className={`ml-2 text-xs ${step.highlight ? 'opacity-80' : 'opacity-60'}`}>{step.en}</span>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>


            {/* Contextual Specs Accordion */}
            <div>
               <button 
                  onClick={() => toggleSpecs('ai')}
                  className="flex items-center justify-between w-full p-6 bg-surface hover:bg-surface-container-highest transition-colors rounded-xl font-medium text-on-surface shadow-[0_10px_20px_rgba(26,28,28,0.02)]"
                >
                  <span>Technical Specifications - MEDAO Scanner</span>
                  <svg className={`w-5 h-5 transform transition-transform ${openSpecs.ai ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
               </button>
               {openSpecs.ai && (
                  <div className="p-6 mt-2 text-sm text-on-surface-variant leading-relaxed bg-surface rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                       <div>
                         <strong className="block text-on-surface mb-1">Optics Module</strong>
                         12-Megapixel Industrial CMOS
                       </div>
                       <div>
                         <strong className="block text-on-surface mb-1">Illumination</strong>
                         Shadowless Multi-Angle LED Array
                       </div>
                       <div>
                         <strong className="block text-on-surface mb-1">Processing Time</strong>
                         &lt; 0.6 seconds per scan
                       </div>
                       <div>
                         <strong className="block text-on-surface mb-1">Integration Protocol</strong>
                         HL7 / RESTful API
                       </div>
                    </div>
                  </div>
               )}
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

