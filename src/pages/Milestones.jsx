import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const milestones = [
  {
    year: '2020',
    title: '產業首秀：台灣醫療科技展',
    description: '正式揭幕 AI 驅動的模組化儲存解決方案，確立了公司在醫院與半導體廠等高標準工作流中的技術地位。',
    dotColor: 'bg-primary',
  },
  {
    year: '2021',
    title: '臨床驗證：國軍花蓮總醫院',
    description: '在醫學中心等級成功部署。通過 AI 引導工作流解決藥師人力短缺挑戰，在資源受限環境下維持 100% 用藥安全。',
    dotColor: 'bg-primary',
  },
  {
    year: '發展中',
    title: 'AI 研發藍圖：全方位辨識技術演進',
    description: '從單顆藥錠延伸至針劑、盒裝、瓶罐等多樣化包裝。目前致力於實現藥包內藥錠數量的自動化精準排查。',
    dotColor: 'bg-primary-container',
  },
];

const features = [
  {
    title: 'AI 紅燈警示',
    benefit: '透過 MEDAO 掃描器進行二次核對。',
    value: '消除因疲勞或夜班壓力導致的潛在給藥錯誤。',
  },
  {
    title: '智慧 LED 指引',
    benefit: '多藥抽屜採用「亮燈擷取」技術。',
    value: '在高密度儲存區域中，杜絕習慣性取藥失誤。',
  },
  {
    title: '數位電子標籤',
    benefit: 'ESL 標籤與後端資料庫即時同步。',
    value: '告別手寫標籤，確保庫存資訊透明且無時差。',
  },
  {
    title: '身分權限稽核',
    benefit: '強制藥師 ID 卡刷卡登錄。',
    value: '完整追蹤人員、時間與品項，嚴格管理管制藥品。',
  },
  {
    title: '環境品質監測',
    benefit: '內建溫溼度高精度感測器。',
    value: '全天候監控藥品環境，防止化學降解與變質。',
  },
];

const products = [
  { name: '5-Drawer Module', image: '/src/assets/productx.png' },
  { name: '6-Drawer Module', image: '/src/assets/producty.png' },
  { name: '16-Pouch System', image: '/src/assets/productz.png' },
];

export default function Milestones() {
  return (
    <>
      <Helmet>
        <title>發展里程碑 | Clinical Architect</title>
        <meta name="description" content="了解白國科技的發展歷程與未來的 AI 醫療技術藍圖。" />
      </Helmet>
      
      <main className="bg-surface min-h-screen">
        {/* Hero Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full"
            >
              MILESTONES & ROADMAP
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-display font-bold leading-none mb-10 tracking-tight"
            >
              發展里程碑與 <br />
              <span className="text-primary">創新藍圖</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-on-surface-variant leading-relaxed max-w-2xl"
            >
              自 2020 年以來，我們致力於將醫療安全標準化。我們的系統專為醫學中心與高科技廠房等高風險、高精度環境所設計。
            </motion.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block"></div>
              
              <div className="space-y-24">
                {milestones.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Dot on line */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-surface bg-primary transform -translate-x-1.5 md:-translate-x-2 z-10"></div>
                    
                    <div className="md:w-1/2 px-8 pl-12 md:pl-8">
                      <div className="text-display-md font-display font-black text-primary/20 mb-2">{item.year}</div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
                    </div>
                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Tech Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="text-headline-lg font-display font-bold mb-6">核心技術優勢</h2>
              <p className="text-on-surface-variant max-w-xl">
                我們不僅提供硬體，更提供結合 AI 辨識與精準引導的整合方案，協助藥師與管理人員在壓力環境下保持卓越。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 hover:shadow-ambient transition-all group"
                >
                  <div className="mb-6 inline-flex p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-4">{feature.title}</h4>
                  <div className="space-y-3">
                    <div className="text-sm font-bold text-primary">{feature.benefit}</div>
                    <div className="text-sm text-on-surface-variant leading-relaxed">{feature.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Preview Section */}
        <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-headline-lg font-display font-bold mb-8 italic">「藥師不是機器人，也有可能會疲勞。」</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
                觀看 國軍花蓮總醫院 藥師訪談，深入了解白國科技如何透過 AI 雙重核對，成為醫療前線最可靠的數位夥伴。
              </p>
              <a 
                href="https://youtu.be/vW-oUKojTFM?si=mQAkTtr6srubTnWd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-gradient text-white rounded-full font-bold shadow-ambient hover:scale-105 transition-transform"
              >
                觀看完整展示影片
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="md:w-1/2 w-full">
              <a 
                href="https://youtu.be/vW-oUKojTFM?si=mQAkTtr6srubTnWd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-[40px] overflow-hidden group shadow-ambient"
              >
                 <img 
                  src="https://img.youtube.com/vi/vW-oUKojTFM/maxresdefault.jpg" 
                  alt="Video Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Product Scalability Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-20 text-center">
              <h2 className="text-headline-lg font-display font-bold mb-4">模組化擴充彈性</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">
                我們的系統可以根據藥局規模隨時調整，支撐從小型門診到大型藥庫的所有需求。
              </p>
            </div>
            
            <div className="">
              <img src="/src/assets/baiguo7_11.jpg" alt="live-showcase" />
            </div>
            
            <div className="mt-24 p-12 bg-primary-container/10 rounded-[40px] text-center border border-primary/10">
              <h3 className="text-2xl font-bold mb-8">準備好優化您的臨床流程了嗎？</h3>
              <Link 
                to="/contact" 
                className="inline-block px-12 py-5 bg-primary-gradient text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                立即諮詢技術顧問
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
