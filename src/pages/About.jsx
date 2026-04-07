import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import aiStationImg from '../assets/productm.png';

// Icons extracted as constants to reduce JSX clutter (Avoiding AI Slop)
const ICON_PRINT = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
  </svg>
);

const ICON_AUTOMATION = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const ICON_STORAGE = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);


export default function About() {
  const pillars = [
    {
      title: '專業醫療印表租賃',
      subtitle: 'Precision Printing',
      description: '始於 2012 年，我們深耕醫院及半導體產業，提供 HP LaserJet 專業租賃與 SANHAU 高速噴墨技術，確保醫療文書輸出的極致穩定與精確。',
      icon: ICON_PRINT
    },
    {
      title: '臨床流程自動化',
      subtitle: 'Workflow Optimization',
      description: '透過專利 AI 辨識與智慧導引技術，重新定義藥局作業流程。從處方簽核到藥品分發，我們致力於消除人為疲勞造成的醫療風險。',
      icon: ICON_AUTOMATION
    },
    {
      title: '智慧物聯網倉儲',
      subtitle: 'IoT Intelligence',
      description: '整合 RFID 與智慧感測技術，打造模組化智能櫃體。不論是高價值耗材或管制藥品，皆能實現 24/7 的精準追蹤與環境監測。',
      icon: ICON_STORAGE
    }
  ];

  const techFeatures = [
    {
      title: 'Bio-Monitoring 環境監測',
      description: '整合高精度溫度與濕度感測器，即時監控藥品儲存環境，確保所有藥品在最佳活性狀態下存放。',
      label: 'Security'
    },
    {
      title: 'Electronic Weighing 電子秤重',
      description: '軟體同步的重量計數功能，實現全自動庫存盤點，徹底取代傳統手動清點作業，提升 200% 盤點效率。',
      label: 'Efficiency'
    },
    {
      title: 'Smart LED Guidance 智慧導引',
      description: '多色 LED 視覺導引系統，直覺提示藥位，多人同步作業不干擾，有效杜絕「習慣性取藥錯誤」。',
      label: 'Precision'
    }
  ];

  const milestones = [
    {
      year: '2012',
      title: '技術啟航：專業列印革新',
      description: '推出 SANHAU 660C 高速噴墨系統，為全台醫學中心提供穩定且高效的藥袋列印解決方案。',
      status: 'Inception'
    },
    {
      year: '2019',
      title: '智慧轉型：智能櫃系統問世',
      description: '研發模組化智能櫃系統，成功導入半導體封裝龍頭與大型教學醫院，開啟自動化管理新篇章。',
      status: 'Expansion'
    },
    {
      year: '2021',
      title: '臨床驗證：花蓮總醫院導入',
      description: '與國軍花蓮總醫院合作，完成 AI 藥品辨識系統實戰導入。證實能顯著降低藥師夜班疲勞及調劑錯誤。',
      status: 'Validation'
    }
  ];

  const roadmap = [
    {
      phase: "01",
      title: "高風險藥品辨識",
      description: "確立硬體研發基石。針對 30 種最易產生醫療糾紛之高風險錠劑進行 AI 建模與辨識優化。",
      status: "Implemented",
      active: true
    },
    {
      phase: "02",
      title: "全品項錠劑支援",
      description: "擴展 AI 電腦視覺資料庫，全面支援所有裸錠、膠囊及半圓錠之自動化精確識別。",
      status: "In Progress",
      active: false
    },
    {
      phase: "03",
      title: "複雜包裝識別",
      description: "跨越非錠劑界限。系統將可辨識針劑、盒裝、瓶罐等多元醫療包裝形式。",
      status: "Planned",
      active: false
    },
    {
      phase: "04",
      title: "進階量化計算",
      description: "AI 演算深度升級。可在密封多劑藥袋中直接統計藥珠數量，完成終極出藥檢核。",
      status: "Future",
      active: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>關於白國 | 專業醫療自動化與列印解決方案</title>
        <meta name="description" content="白國科技致力於醫療科技的創新，專注於醫院及半導體業的 HP 印表機租賃、SANHAU 高速噴墨列印與智慧櫃系統。10年產業深耕，引領臨床精密自動化。" />
      </Helmet>

      <main className="bg-surface min-h-screen text-on-surface selection:bg-primary/20">
        {/* Editorial Hero Section */}
        <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden isolate" aria-label="Hero">
          {/* Decorative asymmetry element following Clinical Architect guidelines */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -skew-x-[15deg] translate-x-1/4 -z-10" aria-hidden="true"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.25em] uppercase bg-primary/10 text-primary rounded-full"
              >
                Heritage & Innovation | 品牌傳承與創新
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,8vw,5.5rem)] font-display font-bold leading-[0.9] mb-12 tracking-tighter"
              >
                白國科技 <br />
                <span className="text-on-surface-variant/40 font-light italic">精確，源自於細節的累積</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-xl text-on-surface-variant leading-relaxed max-w-xl font-sans"
              >
                我們不只是設備提供者，更是醫療生態的數位架構師。從 2012 年的第一張藥袋列印，到今日的 AI 智慧辨識，白國不斷挑戰「零錯誤」的醫學極限。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Strategic Pillars: Tonal Layering without Borders */}
        <section className="py-32 bg-surface-container-low" aria-label="Strategic Pillars">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-surface p-12 rounded-[2rem] shadow-ambient hover:bg-surface-container-lowest transition-colors duration-500 flex flex-col items-start group"
                >
                  <div className="p-4 rounded-2xl bg-surface-container-low text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <div className="inline-flex px-3 py-1 mb-4 text-[9px] font-bold tracking-widest uppercase bg-primary/5 text-primary-container rounded-full">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{pillar.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed font-sans text-lg">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Excellence: Addressing Bio-Monitoring & Weighing */}
        <section className="py-40 bg-surface overflow-hidden" aria-label="Technical Features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2">
                <header className="mb-20">
                  <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase block mb-4">Precision Components</span>
                  <h2 className="text-5xl lg:text-7xl font-display font-bold leading-tight tracking-tighter">
                    超越肉眼的 <br />
                    <span className="text-primary italic">技術底蘊</span>
                  </h2>
                </header>

                <div className="space-y-12">
                  {techFeatures.map((feature, idx) => (
                    <motion.article 
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-8 group"
                    >
                      <div className="flex-shrink-0 w-px h-16 bg-outline-variant/30 group-hover:bg-primary transition-colors duration-500"></div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                            {feature.label}
                          </span>
                          <h4 className="text-2xl font-display font-bold">{feature.title}</h4>
                        </div>
                        <p className="text-on-surface-variant leading-relaxed max-w-md">
                          {feature.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 relative">
                {/* Visual anchor with tonal depth */}
                <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 bg-surface-container-low p-8 rounded-[3rem] shadow-ambient border border-white/20"
                >
                  <img 
                    src={aiStationImg} 
                    alt="AI Precision Hardware" 
                    className="w-full h-auto rounded-[2rem] drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-surface p-8 rounded-full shadow-ambient flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-display font-bold text-primary tracking-tighter underline underline-offset-4 decoration-primary/30">99.9%</span>
                    <span className="text-[8px] font-bold tracking-widest uppercase mt-2 text-on-surface-variant">Accuracy Certified</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Timeline: High-End Magazine Layout */}
        <section className="py-40 bg-surface-container-low relative" aria-label="Milestones">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-32 text-center max-w-3xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-8 italic">臨床實力，時間見證</h2>
              <p className="text-on-surface-variant text-lg">從列印解決方案供應商，蛻變為台灣醫療調劑安全的核心守護者。</p>
            </header>

            <div className="space-y-40 relative">
               {/* Center divider removed to follow "No-Line" rule, using spacing/flow instead */}
               {milestones.map((ms, idx) => (
                 <motion.div 
                   key={ms.year}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                 >
                   <div className="flex-1 w-full relative">
                      <span className="text-[12rem] lg:text-[18rem] font-display font-black text-on-surface/[0.03] leading-none absolute -top-24 left-0 select-none">
                        {ms.year}
                      </span>
                      <div className="relative z-10 pt-12">
                        <div className="inline-flex px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase bg-primary text-white rounded-full">
                          {ms.status}
                        </div>
                        <h4 className="text-4xl font-display font-bold mb-6 tracking-tight">{ms.title}</h4>
                        <p className="text-on-surface-variant text-xl leading-relaxed max-w-md italic font-light">
                          "{ms.description}"
                        </p>
                      </div>
                   </div>
                   <div className="flex-1 hidden md:block">
                      {/* Generous negative space between items creates luxury feel */}
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* AI Roadmap: Strategic Vision */}
        <section className="py-40 bg-surface" aria-label="Roadmap">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="lg:sticky lg:top-32">
                <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase block mb-6">Future Proofing</span>
                <h2 className="text-5xl lg:text-8xl font-display font-bold leading-[0.85] tracking-tighter mb-10">
                  AI 發展計畫 <br />
                  <span className="text-on-surface-variant/40 font-light italic">四大階段</span>
                </h2>
                <p className="text-on-surface-variant text-xl leading-relaxed max-w-md font-sans">
                  我們不設定終點。透過階梯式的演算法升級，逐步消除醫療體系中所有潛在的人為誤差，實現全場景自動化檢核。
                </p>
              </div>

              <div className="space-y-6">
                {roadmap.map((item, idx) => (
                  <motion.article
                    key={item.phase}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-10 rounded-[2.5rem] transition-all duration-700 ${
                      item.active 
                        ? 'bg-surface-container-low shadow-ambient border-primary/10 border' 
                        : 'bg-surface-container-lowest opacity-50 grayscale hover:grayscale-0 hover:opacity-100'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-4xl font-display font-bold text-primary/20">{item.phase}</span>
                      {item.active && (
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                           <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Currently Active</span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-2xl font-display font-bold mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement: Editorial Image Bleed */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Closing">
          <div className="bg-primary p-16 lg:p-32 rounded-[3.5rem] text-white relative overflow-hidden isolate">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] -z-10 animate-pulse" aria-hidden="true"></div>
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-7xl font-display font-bold leading-none mb-12 tracking-tighter">
                為醫療專業人員 <br />
                <span className="text-primary-container font-light italic">奪回專注力。</span>
              </h2>
              <p className="text-white/70 text-xl leading-relaxed mb-16 font-sans">
                每一秒的節省與每一分的精確，都是對生命的尊重。白國科技將持續引領這場寧靜的醫療革命，讓自動化成為最高品質醫療的標配。
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  'ESTABLISHED 2012',
                  'CLINICAL VALIDATED',
                  'TAIWAN ENGINEERING'
                ].map((tag) => (
                  <div key={tag} className="px-8 py-4 border border-white/20 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-300 cursor-default">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

