import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ui/ServiceCard';

export default function Services() {
  const services = [
    {
      id: "diagnostics",
      title: 'Precision Diagnostics',
      description: 'Leveraging AI-driven algorithms to provide molecular-level accuracy in early detection. Implementing advanced image recognition and pattern analysis directly into diagnostic workflows.',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      )
    },
    {
      id: "biometrics",
      title: 'Architectural Biometrics',
      description: 'Mapping human physiology to structural data models for personalized treatment protocols. Generates highly secure, scalable repositories for patient metadata.',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
        </svg>
      )
    },
    {
      id: "logistics",
      title: 'Laboratory Logistics',
      description: 'Streamlining clinical workflows through robust backend systems and automated validations. Intelligent routing of biological sample tracking to eliminate false positives.',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
          <path d="M11 9V6h2v3h3v2h-3v3h-2v-3H8V9h3zM5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2-2-2zm0 2v14h14V5H5z" />
        </svg>
      )
    },
    {
      id: "compliance",
      title: 'Regulatory Compliance Engine',
      description: 'Embedded HIPAA and GDPR frameworks ensuring zero-friction audits. Dynamic reporting suites crafted specifically for modern healthcare standards.',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>News | Clinical Architect</title>
        <meta name="description" content="In-depth breakdown of our Clinical Engineering Core Services." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32">
        This is News Page
      </div>
    </>
  );
}
