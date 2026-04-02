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
        <title>關於白國 | Clinical Architect</title>
        <meta name="description" content="Company history and mission for Clinical Architect." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-primary mb-8">關於白國</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            我們致力於醫療科技的創新與發展，為未來的醫療建構更完善的基石。
          </p>
        </div>
      </div>
    </>
  );
}
