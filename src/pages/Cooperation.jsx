import { Helmet } from 'react-helmet-async';

export default function Cooperation() {
  return (
    <>
      <Helmet>
        <title>廠商合作 | Clinical Architect</title>
        <meta name="description" content="Collaborate with us for medical infrastructure and research projects." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-primary mb-8">廠商合作</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            我們期待與全球領先的醫療設備製造商、研究機構以及創新型企業建立深厚的夥伴關係。
          </p>
        </div>
      </div>
    </>
  );
}
