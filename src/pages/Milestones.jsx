import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MILESTONES = [
  {
    year: '2020',
    title: 'Precision Unveiling: Taiwan Medical Technology Exhibition',
    description: 'Officially debuted the AI-driven modular storage solution. Established technical leadership in medical centers and high-precision semiconductor environments.',
    status: 'Foundation',
  },
  {
    year: '2021',
    title: 'Clinical Validation: Hualien Armed Forces General Hospital',
    description: 'System deployment in hospital centers solved pharmacist labor shortages while maintaining 100% medication safety through AI-guided workflows.',
    status: 'Validation',
  },
  {
    year: '2022-2024',
    title: 'Ecosystem Scaling: Modular Expansion',
    description: 'Development of 6-drawer and 16-pouch systems, integrating RFID tracking and real-time backend synchronization.',
    status: 'Maturity',
  },
];

const AI_ROADMAP = [
  {
    phase: "01",
    title: "High-Risk Medications",
    description: "Hardware R&D and foundational AI identification parameters established for 30 high-risk clinical medications.",
    status: "Implemented",
  },
  {
    phase: "02",
    title: "Comprehensive Formats",
    description: "Expanded AI computer vision support seamlessly identifying all bare tablets, pills, and capsules.",
    status: "In Progress",
  },
  {
    phase: "03",
    title: "Advanced Packaging",
    description: "Architectural system expansion to evaluate and authenticate injections, boxed, and bottled medications.",
    status: "Planned",
  },
  {
    phase: "04",
    title: "Statistical Calculation",
    description: "Advanced AI computation determining precise medication bead and fragment quantities within sealed multi-dose bags.",
    status: "Future",
  }
];

const FEATURES = [
  {
    title: 'AI Verification',
    benefit: 'MEDAO Red-Light Alert',
    value: 'Eliminates fatigue-induced errors in high-pressure night shifts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 1.5.333 2.923.937 4.204a11.992 11.992 0 007.813 7.814 11.963 11.963 0 004.204.937 11.99 11.99 0 003.744-.597 11.959 11.959 0 01-6.702-6.702" />
      </svg>
    ),
  },
  {
    title: 'Bio-Monitoring',
    benefit: 'Integrated Sensor Suite',
    value: 'Real-time environmental monitoring for high-sensitivity medication stability.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
      </svg>
    ),
  },
  {
    title: 'Light Guidance',
    benefit: 'Pick-to-Light Navigation',
    value: 'Directs pharmacists to precise retrieval points in high-density areas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.503 7.503 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'ESL Sync',
    benefit: 'Real-Time Data Display',
    value: 'Instant inventory synchronization replacing handwritten labels.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Audit Control',
    benefit: 'Identity Verification',
    value: 'Strict tracking of personnel and medication issuance times.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Scalability',
    benefit: 'Modular Architecture',
    value: 'Expandable storage tailored to hospital-wide logistics paths.',
    icon: (
       <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25 2.25V15.75z" />
      </svg>
    ),
  },
];

export default function Milestones() {
  return (
    <main className="bg-surface min-h-screen text-on-surface">
      <Helmet>
        <title>Technical Evolution & Roadmap | Clinical Architect</title>
        <meta name="description" content="Witness the evolution of AI medication safety and our strategic roadmap for the future of clinical medicine." />
      </Helmet>

      {/* Hero Section: Intentional Asymmetry */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase bg-primary/10 text-primary rounded-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Innovation Path
              </motion.div>
              <motion.h1 
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(3rem,8vw,5.5rem)] font-display font-bold leading-[0.9] tracking-tight mb-8"
              >
                Technical <br />
                <span className="text-primary italic">Evolution</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4 lg:mb-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-on-surface-variant font-sans leading-relaxed text-balance border-l-2 border-primary/20 pl-6"
              >
                Since 2020, we have redefined medical safety through architectural precision and AI integration, moving from modular hardware to intelligent clinical ecosystems.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Architectural Timeline: Tonal Layering */}
      <section className="bg-surface-container-low py-32" aria-labelledby="history-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-24">
            <h2 id="history-heading" className="text-headline-lg font-display font-bold mb-4">Milestone History</h2>
            <p className="text-on-surface-variant max-w-xl">A trajectory of precision in dispensing technology.</p>
          </header>

          <div className="space-y-12">
            {MILESTONES.map((item, index) => (
              <motion.article 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:grid md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-2 text-display-md font-display font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {item.year}
                </div>
                <div className="md:col-span-10 w-full p-8 sm:p-12 bg-surface-container-lowest rounded-3xl sm:rounded-[48px] shadow-ambient group-hover:bg-surface transition-colors duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                    <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                    <span className="inline-flex px-4 py-1.5 bg-secondary-container text-on-surface-variant text-[10px] uppercase tracking-widest font-bold rounded-sm">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap Section: The "Glass & Gradient" Rule */}
      <section className="bg-surface py-32 lg:py-48 relative isolate overflow-hidden" aria-labelledby="roadmap-heading">
        {/* Soft atmospheric background shape for structural non-border separation */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 bg-surface-container-low/50 rounded-tl-[100px] sm:rounded-tl-[200px] -z-10 hidden md:block" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                 <h2 id="roadmap-heading" className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-on-surface leading-[1.1] tracking-tight text-balance">
                   Building the Future of <span className="block text-primary italic">Verification</span>
                 </h2>
                 <p className="mt-8 text-xl text-on-surface-variant font-sans leading-relaxed text-balance border-l-2 border-primary/20 pl-8">
                   Our four-phase R&D roadmap pushes the boundaries of clinical precision, designed to entirely eliminate dispensing fatigue through advanced computer vision.
                 </p>
              </div>
              
              <div className="lg:col-span-7">
                 <div className="space-y-4 sm:space-y-8">
                    {AI_ROADMAP.map((phase, i) => (
                       <article 
                         key={i} 
                         className="group flex flex-col sm:flex-row gap-8 p-8 sm:p-12 rounded-3xl sm:rounded-[48px] bg-surface-container-lowest hover:bg-surface transition-all duration-500 shadow-ambient"
                       >
                          <div className="flex-shrink-0 flex items-center sm:items-start justify-between sm:flex-col">
                            <span className="font-display text-5xl sm:text-8xl font-light text-primary/10 group-hover:text-primary transition-colors duration-500">
                              {phase.phase}
                            </span>
                            {phase.status === 'Implemented' ? (
                               <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 mt-0 sm:mt-6 text-[10px] font-bold uppercase tracking-wider text-primary">
                                 Active
                               </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 mt-0 sm:mt-6 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/40">
                                {phase.status}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-on-surface mb-4">
                               {phase.title}
                            </h3>
                            <p className="text-lg text-on-surface-variant font-sans leading-relaxed text-balance">
                               {phase.description}
                            </p>
                          </div>
                       </article>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Core Tech Ecosystem Grid: No Borders Rule */}
      <section className="py-32 lg:py-48" aria-labelledby="tech-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 flex flex-col lg:flex-row items-baseline justify-between gap-8">
            <div className="max-w-2xl">
              <h2 id="tech-heading" className="text-headline-lg font-display font-bold mb-6">High-Performance Indicators</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                Beyond mere automation—integrated hardware and AI suites designed for pharmacists by clinical architects.
              </p>
            </div>
            <div className="text-display-md font-display font-black text-primary/5 select-none hidden lg:block">
              INDICATORS
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-12 bg-surface-container-low rounded-[48px] hover:bg-surface-container-lowest hover:shadow-ambient transition-all duration-500 group"
              >
                <div className="mb-10 inline-flex p-4 bg-surface-container-lowest text-primary rounded-2xl group-hover:bg-primary-gradient group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <div className="space-y-4">
                  <div className="text-sm font-bold text-primary uppercase tracking-widest">{feature.benefit}</div>
                  <div className="text-on-surface-variant leading-relaxed">{feature.value}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Validation Section: Interactive Video Area */}
      <section className="py-24 bg-surface-container-low" aria-labelledby="validation-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-container-lowest p-8 sm:p-20 rounded-3xl sm:rounded-[64px] shadow-ambient relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <h2 id="validation-heading" className="text-display-md font-display font-bold mb-8 italic text-balance">
                  "Pharmacists are not robots; fatigue is an inevitable risk."
                </h2>
                <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
                  Discover how the Hualien Armed Forces General Hospital utilized the MEDAO system to create a zero-error clinical environment through AI-human synergy.
                </p>
                <a 
                  href="https://youtu.be/vW-oUKojTFM?si=mQAkTtr6srubTnWd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-primary-gradient text-white rounded-full font-bold shadow-ambient hover:scale-105 transition-transform"
                >
                  Watch Interview
                  <svg className="w-5 h-5 translate-y-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div className="lg:col-span-6">
                <a 
                  href="https://youtu.be/vW-oUKojTFM?si=mQAkTtr6srubTnWd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-video rounded-[32px] overflow-hidden group shadow-2xl"
                >
                  <img 
                    src="https://img.youtube.com/vi/vW-oUKojTFM/maxresdefault.jpg" 
                    alt="Clinical Validation Video"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Editorial Finish */}
      <section className="py-32 lg:py-48 text-center px-4 overflow-hidden relative">
        {/* Abstract design elements instead of simple padding */}
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-display-md font-display font-bold mb-8 text-balance">Ready to Architect Your Clinical Workspace?</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-16">
            Consult with our technology partners to integrate modular safety into your facility's existing paths.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-12 py-5 bg-primary-gradient text-white rounded-full font-bold shadow-ambient hover:shadow-primary/20 hover:-translate-y-1 transition-all text-center"
            >
              Consult a Technical Advisor
            </Link>
            <Link 
              to="/products" 
              className="w-full sm:w-auto px-12 py-5 bg-surface-container-highest text-on-surface rounded-full font-bold hover:bg-surface-container-low transition-all text-center"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
