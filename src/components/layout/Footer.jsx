import { Link } from 'react-router-dom';

export default function Footer() {
  const navItems = [
    { name: '首頁', path: '/' },
    { name: '關於白國', path: '/about' },
    { name: '最新消息', path: '/news' },
    { name: '產品介紹', path: '/products' },
    { name: '廠商合作', path: '/cooperation' },
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
    <footer className="bg-primary-container text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        
        {/* Section 1: Company Identity */}
        <section className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              {/* Simple Logo Placeholder based on Image */}
              <div className="text-primary font-display font-black text-xl leading-none tracking-tighter">
                BAI<br />GUO
              </div>
            </div>
            <h2 className="font-display font-bold text-xl tracking-tight mt-4">
              百國科技股份有限公司
            </h2>
          </div>
          <div className="text-sm font-light opacity-90">
            <span className="font-bold mr-2 text-white/70">E-MAIL:</span>
            sales@baiguo.com.tw
          </div>
        </section>

        {/* Section 2: Kaohsiung Office */}
        <section className="relative lg:pl-8">
          {/* Ghost Border - visible only on desktop */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/20"></div>
          
          <h3 className="font-display font-bold text-lg mb-6">{contactInfo.kaohsiung.title}</h3>
          <ul className="space-y-3 text-sm font-medium opacity-90">
            <li className="flex gap-2">
              <span className="font-bold opacity-60">電話:</span>
              {contactInfo.kaohsiung.phone}
            </li>
            <li className="flex gap-2">
              <span className="font-bold opacity-60">傳真:</span>
              {contactInfo.kaohsiung.fax}
            </li>
            <li className="flex gap-2">
              <span className="font-bold opacity-60 shrink-0">地址:</span>
              <span className="leading-relaxed">{contactInfo.kaohsiung.address}</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Taipei Office */}
        <section className="relative lg:pl-8">
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/20"></div>
          
          <h3 className="font-display font-bold text-lg mb-6">{contactInfo.taipei.title}</h3>
          <ul className="space-y-3 text-sm font-medium opacity-90">
            <li className="flex gap-2">
              <span className="font-bold opacity-60">電話:</span>
              {contactInfo.taipei.phone}
            </li>
            <li className="flex gap-2">
              <span className="font-bold opacity-60">傳真:</span>
              {contactInfo.taipei.fax}
            </li>
            <li className="flex gap-2">
              <span className="font-bold opacity-60 shrink-0">地址:</span>
              <span className="leading-relaxed">{contactInfo.taipei.address}</span>
            </li>
          </ul>
        </section>

        {/* Section 4: Navigation Links */}
        <section className="relative lg:pl-8">
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/20"></div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-bold hover:text-white/70 transition-all duration-300 transform hover:translate-x-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
      
      {/* Bottom bar for legal/copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 text-[10px] uppercase tracking-[0.2em] opacity-40 text-center">
        © {new Date().getFullYear()} BAI GUO TECHNOLOGY CO., LTD. All Rights Reserved.
      </div>
    </footer>
  );
}

