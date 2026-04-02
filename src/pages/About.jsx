import { Helmet } from 'react-helmet-async';

export default function About() {
  const team = [
    { name: 'Dr. Alistair Vance', role: 'Head of Clinical Strategy', bg: 'bg-surface-container-highest' },
    { name: 'Elias Thorne', role: 'Lead Architect', bg: 'bg-surface-container-low' },
    { name: 'Sarah Chen, MD', role: 'Medical Informatics Director', bg: 'bg-surface-container-highest' },
  ];

  return (
    <>
      <Helmet>
        <title>About | Clinical Architect</title>
        <meta name="description" content="Company history and mission for Clinical Architect." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32">
        This is About Page
      </div>
    </>
  );
}
