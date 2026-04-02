import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ui/ServiceCard';

export default function Home() {
  const services = [
    {
      title: 'Precision Diagnostics',
      description: 'Leveraging AI-driven algorithms to provide molecular-level accuracy in early detection.',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
      link: '/services#diagnostics',
    },
    {
      title: 'Architectural Biometrics',
      description: 'Mapping human physiology to structural data models for personalized treatment protocols.',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
        </svg>
      ),
      link: '/services#biometrics',
    },
    {
      title: 'Laboratory Logistics',
      description: 'Streamlining clinical workflows through robust backend systems and automated validations.',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M11 9V6h2v3h3v2h-3v3h-2v-3H8V9h3zM5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2-2-2zm0 2v14h14V5H5z" />
        </svg>
      ),
      link: '/services#logistics',
    },
  ];

  return (
    <>
      <Helmet>
        <title>首頁 | 白國科技股份有限公司</title>
        <meta name="description" content="Precision Medical Editorial - Architecting the future of healthcare software." />
      </Helmet>
      
      <Hero />
      
      <section className="bg-surface-container-low py-16 lg:py-32" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-left">
            <h2 id="services-heading" className="text-4xl font-display font-bold text-on-surface">
              Core Capabilities
            </h2>
            <p className="mt-4 text-on-surface-variant font-sans max-w-2xl text-lg">
              Our specialized services bridge the gap between complex biological data and intuitive operational software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-32" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-container-highest p-8 sm:p-16 rounded-br-[40px] sm:rounded-br-[80px] shadow-ambient relative">
            <div className="absolute top-0 right-0 p-8 text-primary/20">
              <svg className="w-16 h-16 sm:w-24 sm:h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 id="testimonials-heading" className="sr-only">Testimonials</h2>
            <blockquote className="relative z-10 max-w-3xl">
              <p className="text-xl sm:text-2xl font-display font-medium text-on-surface leading-normal">
                "Clinical Architect fundamentally changed how our laboratories process genetic sequencing data. The precision of their UI reduced data-entry errors by 99%."
              </p>
              <footer className="mt-8 flex items-center">
                <div className="font-display">
                  <div className="text-lg font-bold text-primary">Dr. Elena Rostova</div>
                  <div className="text-sm text-on-surface-variant mt-1">Chief Director, Genomics BioLab</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
