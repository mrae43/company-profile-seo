import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Media Assets
import imgBaiguo from '../assets/baiguo4_18.webp';
import imgProductm from '../assets/productm.webp';
import imgProducty from '../assets/producty.webp';
import imgProductA from '../assets/productA.webp';
import imgProductB from '../assets/productB.webp';
import imgProductC from '../assets/productC.webp';

// --- Icons (Abstracted to prevent "AI Slop") ---

const ICON_CHEVRON = (
  <svg className="w-5 h-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ICON_SCAN = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ICON_STORAGE = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const ICON_BIO = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

// --- Data Maps ---

const WORKFLOW_BRIDGE = [
  { step: "01", title: "Scan Prescription", description: "MEDAO algorithm instantly verifies the medication profile." },
  { step: "02", title: "Automatic Retrieval", description: "Smart Storage unlocks only the necessary compartment." },
  { step: "03", title: "Guided Dispensing", description: "LED Light guides staff directly to the correct physical location." }
];

const STORAGE_TABS = [
  { id: 'modular-boxes', label: 'Modular Boxes', title: 'Modular Medicine Boxes (模組化藥盒)', description: '藥盒尺寸可任選，內抽隔間可調整。Flexible sizing and internal dividers for precise organization.', image: imgProductA },
  { id: 'light-guidance', label: 'Light Guidance', title: 'Light Guidance (燈光導引)', description: '調劑人員可通過燈光指引藥品的位置。Interactive pick-to-light system minimizes search time.', image: imgProductB },
  { id: 'electronic-weighing', label: 'Electronic Weighing', title: 'Electronic Weighing (電子秤重)', description: '調劑人員可通過軟體功能同步監測商品的重量計數。Real-time inventory monitoring via precision gravimetric sensors.', image: imgProductC },
  { id: 'bio-monitoring', label: 'Bio-Monitoring', title: 'Bio-Monitoring (環境監測)', description: '整合溫濕度感測器，確保藥品儲存環境符合標準。Integrated sensors for temperature and humidity compliance.', image: imgProducty }
];

const CLINICAL_WORKFLOW = [
  { label: "醫師處方", en: "Prescription" },
  { label: "藥師審核", en: "Review", branch: true },
  { label: "藥師調劑", en: "Dispensing" },
  { label: "藥物整合", en: "Integration" },
  { label: "儀器覆核", en: "AI Scan", highlight: true },
  { label: "發藥", en: "Issuance" }
];

const ROADMAP_PHASES = [
  { phase: "01", title: "High-Risk Medications", description: "Hardware R&D and foundational AI identification parameters established for 30 high-risk clinical medications.", status: "Active" },
  { phase: "02", title: "Comprehensive Formats", description: "Expanded AI computer vision support seamlessly identifying all bare tablets, pills, and capsules.", status: "In Progress" },
  { phase: "03", title: "Advanced Packaging", description: "Architectural system expansion to evaluate and authenticate injections, boxed, and bottled medications.", status: "Planned" },
  { phase: "04", title: "Statistical Calculation", description: "Advanced AI computation determining precise medication bead and fragment quantities within multi-dose bags.", status: "Future" }
];

export default function Products() {
  const [activeStorageTab, setActiveStorageTab] = useState('modular-boxes');
  const [openSpecs, setOpenSpecs] = useState({ storage: false, ai: false });

  const toggleSpecs = (section) => {
    setOpenSpecs(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const currentTab = STORAGE_TABS.find(t => t.id === activeStorageTab);

  return (
    <>
      <Helmet>
        <title>產品介紹 & 解決方案 | Clinical Architect</title>
        <meta name="description" content="Explore our complete pharmacy automation ecosystem. Intelligence meets storage with MEDAO AI Scanner and Smart Cabinets." />
      </Helmet>
      
      <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-primary-fixed-dim scroll-smooth">
        
        {/* 1. Global Hero Section */}
        <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="text-left space-y-8 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-secondary-container text-on-surface text-[10px] font-bold uppercase tracking-widest">
                  Integrated Solutions
                </div>
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display font-bold text-on-surface leading-[1.05] tracking-tight">
                  Intelligence Meets <span className="text-primary italic">Storage.</span>
                </h1>
                <p className="font-sans text-lg lg:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                  The Complete Pharmacy Automation Ecosystem. We integrate AI-driven identification with intelligent modular storage to completely error-proof clinical workflow.
                </p>
                <nav className="flex flex-wrap gap-4 pt-4" aria-label="Product categories">
                  <a href="#storage" className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-primary-gradient text-white font-semibold shadow-ambient hover:-translate-y-1 transition-all duration-300">
                    ADC智能藥櫃
                  </a>
                  <a href="#ai" className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface font-semibold shadow-ambient border border-outline-variant/10 hover:bg-surface-container-low transition-all duration-300">
                    MEDAO Verification
                  </a>
                </nav>
              </div>
              
              <div className="relative">
                {/* Refined Tech Split Visual */}
                <div className="aspect-[4/3] rounded-[2.5rem] bg-surface-container-lowest overflow-hidden shadow-ambient border border-outline-variant/15 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-0"></div>
                  <div className="flex h-full divide-x divide-outline-variant/10 relative z-10">
                    {[imgProducty, imgBaiguo, imgProductm].map((img, i) => (
                      <div key={i} className="flex-1 flex items-center justify-center p-6 hover:bg-surface-container-low transition-colors duration-500">
                        <img src={img} alt="" className="w-full h-auto object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-700" loading='lazy' />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-primary/5 blur-[80px] rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Strategy Categorization */}
        <section className="py-24 lg:py-32 bg-surface relative z-10 -mt-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              {/* Card - Smart Storage */}
              <a href="#storage" className="group flex flex-col p-12 rounded-[2.5rem] bg-surface-container-low hover:bg-surface-container-highest transition-all duration-500 shadow-ambient border border-outline-variant/5">
                <div className="h-14 w-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-8 shadow-sm text-primary">
                  {ICON_STORAGE}
                </div>
                <h3 className="text-3xl font-display font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">Smart Modular Storage</h3>
                <p className="text-on-surface-variant font-sans text-lg leading-relaxed">High-capacity, precision-driven automated dispensing systems tailored for any spatial constraint.</p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-tighter">
                  Explore Ecosystem <span>→</span>
                </div>
              </a>
              {/* Card - AI Vision */}
              <a href="#ai" className="group flex flex-col p-12 rounded-[2.5rem] bg-surface-container-low hover:bg-surface-container-highest transition-all duration-500 shadow-ambient border border-outline-variant/5">
                <div className="h-14 w-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-8 shadow-sm text-primary">
                  {ICON_SCAN}
                </div>
                <h3 className="text-3xl font-display font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">AI Identification</h3>
                <p className="text-on-surface-variant font-sans text-lg leading-relaxed">Vision-based medication verification preventing errors before they reach the patient.</p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-tighter">
                  View Intelligence <span>→</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 3. The Intelligent Workflow Bridge */}
        <section className="py-24 lg:py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-headline-lg font-display font-bold text-on-surface mb-4">Integrated Logic</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg italic">Bridging the gap between software verification and physical retrieval.</p>
            </div>
             
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Data-driven map for workflow steps */}
              {WORKFLOW_BRIDGE.map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="h-28 w-28 rounded-full bg-surface-container-lowest shadow-ambient border border-outline-variant/10 flex items-center justify-center mb-8 ring-0 group-hover:ring-[12px] group-hover:ring-primary/5 transition-all duration-500">
                    <span className="text-primary font-display text-3xl font-bold">{item.step}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-on-surface mb-3">{item.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed text-balance">{item.description}</p>
                </div>
              ))}
              
              {/* Horizontal line (Desktop) - No-Line Rule Fallback (using subtle opacity) */}
              <div className="hidden md:block absolute top-[56px] left-[20%] right-[20%] h-px bg-outline-variant/20 -z-0"></div>
            </div>
          </div>
        </section>

        {/* 4. Smart Modular Storage (ADC) */}
        <section id="storage" className="py-32 lg:py-48 bg-surface scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
              <div className="lg:col-span-12">
                <span className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-[10px] font-bold rounded-sm mb-6 uppercase tracking-[0.2em]">Product Line A</span>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display font-bold text-on-surface mb-8 leading-tight">ADC智能藥櫃 <span className="text-primary">Ecosystem</span></h2>
              </div>
              
              {/* Interactive Module Left: Image Showcase */}
              <div className="lg:col-span-7">
                <div className="rounded-[3rem] bg-surface-container-low p-12 lg:p-20 aspect-square flex items-center justify-center relative overflow-hidden group border border-outline-variant/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img 
                    src={currentTab.image} 
                    alt={currentTab.label} 
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transform transition-all duration-700 group-hover:scale-105"
                    loading='lazy'
                  />
                  {/* Aspect Indicator */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/15 shadow-sm text-[10px] font-bold uppercase tracking-widest text-on-surface">
                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                     Live Feature: {currentTab.label}
                  </div>
                </div>
              </div>

              {/* Interactive Module Right: Controls */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-2">
                  {STORAGE_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveStorageTab(tab.id)}
                      className={`w-full flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 text-left border ${
                        activeStorageTab === tab.id 
                          ? 'bg-surface-container-lowest border-outline-variant/20 shadow-ambient shadow-primary/5' 
                          : 'bg-transparent border-transparent hover:bg-surface-container-low text-on-surface-variant'
                      }`}
                    >
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        activeStorageTab === tab.id ? 'bg-primary text-white' : 'bg-surface-container-highest'
                      }`}>
                         {tab.id === 'modular-boxes' ? ICON_STORAGE : tab.id === 'bio-monitoring' ? ICON_BIO : ICON_SCAN}
                      </div>
                      <div>
                        <div className={`font-display font-bold ${activeStorageTab === tab.id ? 'text-primary' : 'text-on-surface'}`}>{tab.label}</div>
                        <div className="text-xs opacity-60 mt-0.5">{tab.id === 'bio-monitoring' ? 'Compliance Sensors' : 'Precision Hardware'}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/5">
                   <h3 className="text-2xl font-display font-bold text-on-surface mb-4">{currentTab.title}</h3>
                   <p className="text-lg text-on-surface-variant leading-relaxed font-sans">{currentTab.description}</p>
                </div>
              </div>
            </div>

            {/* Technical Accordion (Storage) */}
            <div className="max-w-4xl mx-auto">
               <button 
                  onClick={() => toggleSpecs('storage')}
                  className="w-full flex items-center justify-between p-8 bg-surface-container-low hover:bg-surface-container-highest transition-all duration-300 rounded-[2rem] font-bold text-on-surface border border-outline-variant/10 shadow-ambient"
                  aria-expanded={openSpecs.storage}
                >
                  <span className="font-display text-lg tracking-tight">Technical Specifications - Modular Hardware</span>
                  <span className={openSpecs.storage ? 'rotate-180' : ''}>{ICON_CHEVRON}</span>
               </button>
               <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSpecs.storage ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="p-10 bg-surface-container-lowest rounded-[2rem] border border-outline-variant/15 shadow-ambient">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                       {[{ l: "Dimensions", v: "900x600x1050mm" }, { l: "Protocol", v: "UHF RFID" }, { l: "Power", v: "110/220V Auto" }, { l: "Security", v: "Biometric" }].map((s, i) => (
                         <div key={i}>
                           <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{s.l}</div>
                           <div className="text-on-surface font-medium">{s.v}</div>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 5. AI Identification (MEDAO) */}
        <section id="ai" className="py-32 lg:py-48 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              
              {/* Product Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-30 -z-10 scale-125"></div>
                <div className="relative bg-surface-container-lowest p-8 lg:p-16 rounded-[4rem] shadow-ambient border border-outline-variant/10 overflow-hidden transform lg:-rotate-2 hover:rotate-0 transition-transform duration-1000">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[100px]"></div>
                  <img src={imgProductm} alt="MEDAO AI Scanner" className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-1000" loading='lazy' />
                  
                  {/* Live Metric Overlay */}
                  <div className="absolute bottom-12 inset-x-8 px-8 py-6 bg-surface/80 backdrop-blur-xl rounded-3xl border border-outline-variant/20 shadow-ambient flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Identification Rate</div>
                      <div className="text-2xl font-display font-bold text-on-surface">~1.0s <span className="text-sm font-normal opacity-60">/ bag</span></div>
                    </div>
                    <div className="text-right">
                       <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Accuracy</div>
                       <div className="text-2xl font-display font-bold text-on-surface">99.9%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-sm uppercase tracking-widest">Product Line C</span>
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-on-surface leading-[1.1]">MEDAO <span className="text-primary italic">Intelligence.</span></h2>
                  <p className="text-xl text-on-surface-variant font-sans leading-relaxed text-balance">The pinnacle of pharmaceutical computer vision. Engineered to eliminate human error while drastically increasing operational throughput.</p>
                </div>

                <div className="grid gap-8">
                  {[
                    { title: "Rapid Verification", desc: "Advanced AI morphology analysis identifies medications in milliseconds.", icon: ICON_SCAN },
                    { title: "Digital Governance", desc: "Automated HL7 logging provides a full forensic audit trail for every dispensed dose.", icon: ICON_BIO }
                  ].map((feat, i) => (
                    <article key={i} className="flex gap-8 p-8 rounded-[2.5rem] bg-surface-container-lowest border border-outline-variant/5 shadow-ambient hover:bg-surface-container-low transition-colors duration-500">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        {feat.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-on-surface mb-2">{feat.title}</h4>
                        <p className="text-on-surface-variant font-sans leading-relaxed">{feat.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

            </div>

            {/* 6. Clinical Integration Workflow (Refactored Pattern) */}
            <div className="mt-40 mb-20">
               <div className="text-center mb-24">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4 block">Deployment Architecture</span>
                  <h3 className="text-3xl lg:text-5xl font-display font-bold text-on-surface mb-6">Optimized Clinical Pathway</h3>
                  <p className="text-lg text-on-surface-variant max-w-2xl mx-auto italic">導入AI藥物辨識儀器之調劑流程 (Integrated Recognition Flow)</p>
               </div>

               {/* Responsive Workflow Visual */}
               <div className="relative">
                  {/* Horizontal Connector (Desktop) */}
                  <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4">
                    {CLINICAL_WORKFLOW.map((step, i) => (
                      <div key={i} className={`flex flex-col items-center text-center relative group ${step.highlight ? 'z-10' : ''}`}>
                        {/* Circle Element */}
                        <div className={`h-24 w-24 rounded-full flex items-center justify-center mb-8 border transition-all duration-500 shadow-ambient ${
                          step.highlight 
                            ? 'bg-primary-gradient text-white border-transparent scale-125 shadow-primary/30 ring-8 ring-primary/5' 
                            : 'bg-surface-container-lowest border-outline-variant/15 text-on-surface group-hover:bg-surface-container-low'
                        }`}>
                           <span className="font-display font-black text-xl">{i + 1}</span>
                        </div>
                        {/* Labels */}
                        <div className="space-y-2 px-2">
                           {step.branch && (
                             <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary-container text-primary text-[8px] font-bold rounded-full uppercase tracking-widest whitespace-nowrap hidden lg:block">
                               Automatic Pkg
                             </div>
                           )}
                           <div className={`font-display font-bold ${step.highlight ? 'text-primary' : 'text-on-surface'}`}>{step.label}</div>
                           <div className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">{step.en}</div>
                        </div>
                        
                        {/* Branch Indicator (Mobile) */}
                        {step.branch && (
                           <div className="lg:hidden mt-4 inline-block px-3 py-1 bg-secondary-container text-primary text-[8px] font-bold rounded-full uppercase tracking-widest">
                             + Automated Packaging Support
                           </div>
                        )}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 7. Future-Proofing Strategy (Missing Strategic Element) */}
        <section className="py-32 lg:py-48 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="inline-block px-3 py-1 bg-secondary-container text-on-surface text-[10px] font-bold rounded-sm mb-6 uppercase tracking-[0.2em]">Strategic Roadmap</span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-on-surface leading-tight tracking-tight">The Evolution of <span className="block text-primary">Precision.</span></h2>
                <p className="mt-8 text-xl text-on-surface-variant font-sans leading-relaxed text-balance italic border-l-2 border-primary/20 pl-8">
                  Our development cycles focus on moving from identifying basic solids to calculating granular fragment quantities within sealed multi-dose environment.
                </p>
              </div>
              
              <div className="lg:col-span-7">
                <div className="grid gap-6">
                  {ROADMAP_PHASES.map((phase, i) => (
                    <article 
                      key={i} 
                      className="group flex flex-col sm:flex-row gap-8 p-10 rounded-[3rem] bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-500 shadow-ambient border border-transparent hover:border-outline-variant/15"
                    >
                      <div className="shrink-0 flex items-center sm:items-start justify-between sm:flex-col">
                        <span className="font-display text-[6rem] leading-none font-bold text-on-surface/5 group-hover:text-primary/10 transition-colors duration-500">
                          {phase.phase}
                        </span>
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                          phase.status === 'Active' ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-surface-container-highest border-outline-variant/30 text-on-surface-variant opacity-60'
                        }`}>
                          {phase.status}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-display font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">{phase.title}</h3>
                        <p className="text-lg text-on-surface-variant/80 font-sans leading-relaxed">{phase.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
