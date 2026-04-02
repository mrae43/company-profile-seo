import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import aiStationImg from '../assets/productm.png';

export default function About() {
  const milestones = [
    {
      year: '2012',
      title: '高速噴墨技術革新',
      description: '正式推出 SANHAU 660C 高速噴墨印表機，全面應用於各大醫院藥袋及報表輸出，極大提升了醫療作業效率與準確度。',
      accent: 'bg-primary/10 text-primary'
    },
    {
      year: '2019',
      title: '智慧化管理新紀元',
      description: '研發並部署 SANHAU 智能櫃系統，成功導入各大醫院藥局及半導體工廠，實現高價值耗材與藥品的精密自動化管理。',
      accent: 'bg-primary-container/20 text-primary-container'
    }
  ];

  const pillars = [
    {
      title: '專業印表機租賃',
      subtitle: 'HP LaserJet Services',
      description: '深耕醫院及半導體產業多年，提供全方位的 HP 雷射印表機租賃方案，確保高強度作業環境下的穩定輸出。'
    },
    {
      title: '醫療效率優化',
      subtitle: 'Workflow Optimization',
      description: '透過 SANHAU 系列專利技術，解決傳統藥袋列印速度瓶頸，為醫療人員節省每一秒關鍵時間。'
    },
    {
      title: '智能倉儲解決方案',
      subtitle: 'Automation & Control',
      description: '整合硬體與軟體，打造物聯網化智能櫃體，滿足醫療及高科技產業對精密物資追蹤的需求。'
    }
  ];

  return (
    <>
      <Helmet>
        <title>關於白國 | 專業醫療自動化與列印解決方案</title>
        <meta name="description" content="白國科技致力於醫療科技的創新，專注於醫院及半導體業的 HP 印表機租賃、SANHAU 高速噴墨列印與智能櫃系統。" />
      </Helmet>

      <main className="bg-surface min-h-screen pb-32">
        {/* Layered Hero Section with Asymmetry */}
        <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
          {/* Subtle background element for asymmetry */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -skew-x-12 translate-x-1/2 opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full"
              >
                關於白國 | ABOUT
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-display-lg font-display font-bold leading-none mb-10 tracking-tight"
              >
                白國科技 <br />
                <span className="text-on-surface-variant/60 font-light">引領醫療精密自動化</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-on-surface-variant leading-relaxed max-w-xl"
              >
                白國科技不僅是租賃服務提供者，更是醫療流程的優化專家。我們專注於醫院與半導體產業的高效列印與物資自動化管理，讓科技真正服務於生命。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Core Pillars: Tonal Layering Principle */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={pillar.title}
                  whileHover={{ y: -5 }}
                  className="bg-surface-container-lowest p-10 rounded-2xl shadow-ambient border border-white/40 transition-all duration-300"
                >
                  <div className="inline-flex px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{pillar.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Timeline: Progress Through Precision */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mb-20 space-y-4">
              <div className="inline-flex self-start px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
                MILESTONES | 發展里程碑
              </div>
              <div className="flex flex-col md:flex-row items-baseline gap-12">
                <h2 className="text-headline-lg font-display font-bold whitespace-nowrap">關鍵里程碑</h2>
                <div className="h-px bg-outline-variant flex-grow opacity-30"></div>
              </div>
            </div>

            <div className="space-y-24 relative">
              {/* Timeline Center Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2 hidden md:block"></div>
              
              {milestones.map((ms, idx) => (
                <div 
                  key={ms.year}
                  className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 w-full text-left md:text-right">
                    <div className={`${idx % 2 === 0 ? '' : 'md:text-left'}`}>
                      <span className="text-6xl lg:text-8xl font-display font-black text-primary/10 tracking-tighter block mb-2 leading-none uppercase">
                        {ms.year}
                      </span>
                      <h4 className="text-2xl font-display font-bold text-on-surface mb-4">
                        {ms.title}
                      </h4>
                      <p className="text-on-surface-variant leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0">
                        {ms.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Anchor Point */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-primary ring-8 ring-primary/10"></div>
                  </div>

                  <div className="flex-1 w-full hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Statement / Editorial Image Bleed */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-primary p-12 lg:p-24 rounded-3xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-light leading-tight mb-8">
                持續精進於 <br />
                <span className="font-bold">每一個細節裡的精確。</span>
              </h2>
              <p className="text-white/80 text-lg mb-12">
                白國科技成立至今，始終以客戶需求為核心，在列印技術與自動化領域不斷突破，只為提供更高效、更專業的服務體驗。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 border border-white/20 rounded-full font-bold text-sm tracking-wide">
                  ESTABLISHED 2012
                </div>
                <div className="px-6 py-3 border border-white/20 rounded-full font-bold text-sm tracking-wide">
                  SERVICING TOP HOSPITALS
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* AI Solution Roadmap: The Evolution of Precision */}
        <section className="py-32 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Text Content: Editorial Alignment */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
                    ROADMAP | 發展計畫
                  </div>
                  <h2 className="text-display-md font-display font-bold leading-tight mb-8">
                    AI 藥品辨識設備發展：<br />
                    <span className="text-on-surface-variant/60 font-light">從精確到智慧的演進</span>
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed mb-12 max-w-lg">
                    自 2020 年起，我們專注於解決藥局工作流程中最具風險的環節。透過 AI 視覺識別技術，從高風險藥品出發，逐步建構全方位的藥品自動化檢核生態。
                  </p>
                </motion.div>

                {/* Vertical Staggered Phases */}
                <div className="space-y-6">
                  {[
                    {
                      phase: '第一階段 2020',
                      title: '安全核心：高風險辨識',
                      description: '研發藥品辨識/取樣設備硬體。支援 30 種最易出錯且危及病患健康之關鍵藥品，並成功導入醫學中心藥局。',
                      status: 'COMPLETED',
                      completed: true
                    },
                    {
                      phase: '第二階段',
                      title: '全種類裸錠支援',
                      description: '擴展 AI 學習資料庫，支援辨識所有裸錠、膠囊等錠劑種類藥品，實現全品項自動化準備。',
                    },
                    {
                      phase: '第三階段',
                      title: '複雜包裝辨識',
                      description: '技術跨越：支援辨識所有針劑、盒裝、瓶罐裝等各類包裝形式藥品。',
                    },
                    {
                      phase: '第四階段',
                      title: '智慧統計分析',
                      description: '進階量化計算：支援統計藥袋內藥品數量計算，強化最終檢核的精確性。',
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.phase}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-8 rounded-2xl border border-white/40 transition-all duration-300 ${
                        item.completed 
                          ? 'bg-surface-container-lowest shadow-ambient border-primary/20' 
                          : 'bg-surface-container-low opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className={`text-[10px] font-bold tracking-widest uppercase ${item.completed ? 'text-primary' : 'text-on-surface-variant'}`}>
                          {item.phase}
                        </span>
                        {item.completed && (
                          <span className="bg-primary/10 text-primary text-[9px] px-2 py-0.5 rounded-full font-bold">
                            ✓ 已完成導入
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Anchor: Product Render */}
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full transform -translate-y-12"></div>
                  <img 
                    src={aiStationImg} 
                    alt="AI Medication Station" 
                    className="relative z-20 w-full h-auto drop-shadow-2xl rounded-[2rem]"
                  />
                  
                  {/* Floating Metric Card for Editorial Detail */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-8 -left-8 bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-2xl shadow-ambient border border-white/40 z-30 hidden sm:block"
                  >
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Precision Rating</p>
                    <p className="text-3xl font-display font-bold">99.98%</p>
                    <p className="text-[10px] text-on-surface-variant mt-2 font-medium">Verified by Medical Centers</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

