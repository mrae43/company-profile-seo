import { Link } from 'react-router-dom';

export default function Footer() {
  const navItems = [
    { name: '首頁', path: '/' },
    { name: '關於白國', path: '/about' },
    { name: '發展里程碑', path: '/milestones' },
    { name: '產品介紹', path: '/products' },
    { name: '聯繫我們', path: '/contact' },
  ];

  const contactInfo = {
    kaohsiung: {
      title: '高雄總公司',
      phone: '07-792-7896',
      fax: '07-792-5226',
      address: '831高雄市大寮區內坑路158-79號',
    },
    taipei: {
      title: '台北分公司',
      phone: '02-2547-2179',
      fax: '02-2547-2803',
      address: '105台北市松山區民權東路3段106巷3弄15號1F',
    },
  };

  return (
    <footer className="bg-on-surface text-surface py-20 lg:py-32 relative overflow-hidden">
      {/* Background Accent - Subtle glow to represent "AI Pulse" */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Section 1: Brand Identity & Heritage */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="group flex items-center gap-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary-gradient rounded-xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-out" />
                <span className="relative z-10 text-white font-display font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-white leading-none tracking-tight">
                  白國科技
                </span>
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-primary leading-tight mt-1">
                  Established 2012
                </span>
              </div>
            </Link>
            
            <p className="text-surface/60 font-sans leading-relaxed max-w-sm text-balance">
              專業化醫療自動化合作夥伴，為醫院與物流中心提供高精度儲位與 AI 辨識解決方案，致力於通過技術革新消除臨床配藥與發藥誤差。
            </p>
            
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Official Communication</span>
              <a href="mailto:sales@baiguo.com.tw" className="text-lg font-display text-white hover:text-primary transition-colors">
                sales@baiguo.com.tw
              </a>
            </div>
          </div>

          {/* Section 2: Contact Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
            {/* Kaohsiung HQ */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(163,207,45,0.8)]" />
                <h3 className="font-display font-bold text-lg text-white">{contactInfo.kaohsiung.title}</h3>
              </div>
              <address className="not-italic space-y-4 text-sm text-surface/70 leading-loose">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Telephone & Fax</span>
                  <p>T: {contactInfo.kaohsiung.phone}</p>
                  <p>F: {contactInfo.kaohsiung.fax}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Main Facility</span>
                  <p className="pr-4">{contactInfo.kaohsiung.address}</p>
                </div>
              </address>
            </section>

            {/* Taipei Branch */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                <h3 className="font-display font-bold text-lg text-white">{contactInfo.taipei.title}</h3>
              </div>
              <address className="not-italic space-y-4 text-sm text-surface/70 leading-loose">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Telephone & Fax</span>
                  <p>T: {contactInfo.taipei.phone}</p>
                  <p>F: {contactInfo.taipei.fax}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Regional Branch</span>
                  <p className="pr-4">{contactInfo.taipei.address}</p>
                </div>
              </address>
            </section>
          </div>

          {/* Section 3: Navigation Quick Links */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="font-display font-bold text-lg text-white px-0 sm:px-2">核心導航</h3>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center gap-3 text-sm font-medium text-surface/60 hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-500 overflow-hidden" />
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-12 bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-xs text-surface/40 leading-relaxed font-sans italic">
                "Bridging physical storage and digital tracking through clinical precision."
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar for legal/copyright */}
        <div className="mt-20 lg:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            © {new Date().getFullYear()} BAI GUO TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-primary transition-colors cursor-default">Privacy Protocol</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-primary transition-colors cursor-default">Medical Compliancy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

