import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ui/ServiceCard';

export default function News() {
  return (
    <>
      <Helmet>
        <title>最新消息 | Clinical Architect</title>
        <meta name="description" content="Stay updated with the latest advancements in clinical technology and research." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-primary mb-8">最新消息</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            追蹤白國的最新動態、技術突破以及在醫療領域的創新成果。
          </p>
        </div>
      </div>
    </>
  );
}
