import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ui/ServiceCard';

export default function Home() {
  const services = [
    {
      title: 'Automated Medical Storage',
      description: 'Modular, intelligent cabinet systems in 6, 8, and 16-grid configurations for precise pharmaceutical management.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      link: '/products#storage',
    },
    {
      title: 'AI Identification (MEDAO)',
      description: 'AI-driven medication identification and precision dispensing systems to reduce human errors in clinical settings.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      link: '/products#medao',
    },
    {
      title: 'Specialized Printing',
      description: 'High-speed laser and inkjet printer leasing specialized for medical bags and hospital reports since 2012.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231a1.125 1.125 0 01-1.12-1.227L6.34 18m11.318-8.204a1.5 1.5 0 010 3.108m-11.318-3.108a1.5 1.5 0 000 3.108m11.318-3.108V9.25c0-1.242-1.008-2.25-2.25-2.25H8.182c-1.242 0-2.25 1.008-2.25 2.25V9.75m11.318 0a1.125 1.125 0 00-1.125-1.125H7.812a1.125 1.125 0 00-1.125 1.125v.5a1.125 1.125 0 001.125 1.125h8.376a1.125 1.125 0 001.125-1.125v-.5z" />
        </svg>
      ),
      link: '/products#printing',
    },
    {
      title: 'Systems Integration',
      description: 'Bridging the gap between physical storage and digital tracking using RFID and smart touch-screen interfaces.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      link: '/products#integration',
    },
  ];

  return (
    <>
      <Helmet>
        <title>首頁 | 白國科技股份有限公司</title>
        <meta name="description" content="Integrated medical automation partner for hospital and semiconductor logistics. Empowering facilities with intelligent storage and AI-driven precision." />
      </Helmet>
      
      <Hero />
      
      <section className="bg-surface-container-low py-16 lg:py-32" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-left">
            <h2 id="services-heading" className="text-4xl font-display font-bold text-on-surface">
              Core Solutions
            </h2>
            <p className="mt-4 text-on-surface-variant font-sans max-w-2xl text-lg">
              We are an integrated medical automation partner helping hospitals and semiconductor plants optimize logistics and high-precision storage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                "Baiguo Technology's automated storage fundamentally changed our hospital's pharmacy logistics. The precision of their systems reduced medication dispensing errors by over 95%."
              </p>
              <footer className="mt-8 flex items-center">
                <div className="font-display">
                  <div className="text-lg font-bold text-primary">Director Wang</div>
                  <div className="text-sm text-on-surface-variant mt-1">Chief Logistics Officer, Metropolitan Medical Center</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
