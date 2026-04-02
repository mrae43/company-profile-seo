import { Helmet } from 'react-helmet-async';

export default function Products() {
  return (
    <>
      <Helmet>
        <title>產品介紹 | Clinical Architect</title>
        <meta name="description" content="Explore our innovative clinical products and solutions." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-primary mb-8">產品介紹</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            我們致力於開發最先進的醫療儀器與解決方案，為臨床工作者提供精確、效率且可靠的支持。
          </p>
        </div>
      </div>
    </>
  );
}
