import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const [activeStorageTab, setActiveStorageTab] = useState('high-capacity');
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
                {/* Ecosystem Placeholder Visual */}
                <div className="w-full aspect-square lg:aspect-[4/3] rounded-2xl bg-surface-container-highest/80 backdrop-blur-2xl flex items-center justify-center p-8 relative overflow-hidden shadow-[0_40px_80px_rgba(26,28,28,0.08)]">
                  <div className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-t from-surface-container-low to-transparent opacity-50 z-0"></div>
                  <div className="text-center text-on-surface-variant font-medium z-10">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    [ Ecosystem Composite Image Placeholder ]<br/>
                    <span className="text-sm">MEDAO Scanner + Smart Cabinets</span>
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
               <h2 className="text-4xl lg:text-5xl font-display font-bold text-on-surface mb-6">Smart Modular Storage</h2>
               <p className="text-xl text-on-surface-variant max-w-3xl">Highly configurable, RFID-tracked pharmacy cabinets designed to scale with your facility's pharmaceutical volume.</p>
            </div>

            {/* Scalability Switcher */}
            <div className="flex space-x-2 mb-8 overflow-x-auto pb-4 no-scrollbar">
              {['high-capacity', 'precision', 'compact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveStorageTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeStorageTab === tab 
                      ? 'bg-on-surface text-surface' 
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest'
                  }`}
                >
                  {tab === 'high-capacity' ? 'High Capacity (16-Pouch)' : tab === 'precision' ? 'Precision (6-Drawer)' : 'Compact (5-Drawer)'}
                </button>
              ))}
            </div>

            <div className="bg-surface-container-low rounded-3xl p-8 lg:p-16 mb-8 flex flex-col block items-center justify-center min-h-[500px]">
                {/* Visual Placeholder mapping to activeTab */}
                <div className="text-center text-on-surface-variant">
                   <svg className="w-20 h-20 mx-auto mb-6 opacity-40 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                   </svg>
                   <div className="text-xl font-display mb-2">
                     [ {activeStorageTab === 'high-capacity' ? '16-Pouch System' : activeStorageTab === 'precision' ? '6-Drawer System' : '5-Drawer System'} Image Placeholder ]
                   </div>
                   <p className="max-w-md mx-auto opacity-70">
                     {activeStorageTab === 'high-capacity' ? 'Ideal for high-volume bulk supply environments.' : activeStorageTab === 'precision' ? 'Optimized for mixed-unit fast dispensing.' : 'Space-conscious design for localized wards.'}
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

        {/* 4. Category B: AI Identification (MEDAO) */}
        <section id="ai" className="py-32 bg-surface-container-low scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
               <span className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-xs font-semibold rounded-sm mb-6 uppercase tracking-wider">Product Line B</span>
               <h2 className="text-4xl lg:text-5xl font-display font-bold text-on-surface mb-16">MEDAO Verification</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Feature to benefit: image side */}
               <div className="aspect-square bg-surface-container-lowest rounded-3xl flex items-center justify-center p-12 shadow-[0_30px_60px_rgba(26,28,28,0.05)]">
                  <div className="text-center text-on-surface-variant">
                     <svg className="w-24 h-24 mx-auto mb-6 opacity-40 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                     </svg>
                     <div className="text-xl font-display mb-2">
                       [ MEDAO AI Hardware Placeholder ]
                     </div>
                     <p className="max-w-xs mx-auto text-sm opacity-70">
                       Top-down high-resolution imaging structure.
                     </p>
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
                     <h3 className="text-2xl font-display font-medium text-on-surface">AI-Driven Safety</h3>
                     <p className="text-on-surface-variant leading-relaxed">Pill morphology analysis prevents wrong-drug/wrong-dose errors with 99.99% operational accuracy prior to dispensation.</p>
                  </div>

                  <div className="flex flex-col space-y-4">
                     <div className="h-10 w-10 flex items-center justify-center bg-surface-container-highest rounded-full">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                     </div>
                     <h3 className="text-2xl font-display font-medium text-on-surface">Automatic Log Entry</h3>
                     <p className="text-on-surface-variant leading-relaxed">Replaces manual inventory tracking. Every dispensed unit is digitally photographed, timestamped, and stored in the localized cloud architecture.</p>
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

