import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import kaohsiungMap from '../assets/kaohsiung_map.png';
import taipeiMap from '../assets/taipei_map.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '產品咨詢',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = {
    email: 'sales@baiguo.com.tw',
    kaohsiung: {
      title: '高雄總公司',
      phone: '07-792-7896',
      fax: '07-792-5226',
      address: '831高雄市大寮區內坑路158-79號',
      mapUrl: 'https://maps.app.goo.gl/5L6v2Jq3p4q5q5q5A',
      map: kaohsiungMap,
    },
    taipei: {
      title: '台北分公司',
      phone: '02-2547-2179',
      fax: '02-2547-2803',
      address: '105台北市松山區民權東路3段106巷3弄15號1F',
      mapUrl: 'https://maps.app.goo.gl/5L6v2Jq3p4q5q5q5A',
      map: taipeiMap,
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', category: '產品咨詢', message: '' });
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', category: '產品咨詢', message: '' });
  };

  const inputClasses = "w-full bg-surface-container-low px-4 py-4 text-on-surface border-b-2 border-outline-variant/30 focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-on-surface-variant/50";
  const labelClasses = "block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2";

  return (
    <>
      <Helmet>
        <title>聯繫我們 | Clinical Architect</title>
        <meta name="description" content="與白國科技聯繫，獲取專業的醫療自動化解決方案諮詢。" />
      </Helmet>
      
      <main className="bg-surface min-h-screen pt-32 pb-24 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -skew-x-12 translate-x-1/2 opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:gap-24">
            
            {/* Column 1: Editorial Header & Contact Info */}
            <div className="lg:w-1/3 mb-16 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
                  Contact Us
                </div>
                <h1 className="text-display-lg font-display font-bold leading-[1.1] mb-12 tracking-tight">
                  歡迎您與我們 <br />
                  <span className="text-primary italic">聯絡</span>
                </h1>
                
                <div className="space-y-12">
                  <section>
                    <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-6 border-l-2 border-primary pl-4">公司信箱</h2>
                    <p className="text-xl font-display font-medium text-on-surface">{contactInfo.email}</p>
                  </section>

                  {[contactInfo.kaohsiung, contactInfo.taipei].map((office) => (
                    <section key={office.title}>
                      <h2 className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-6 border-l-2 border-outline-variant pl-4">{office.title}</h2>
                      <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                        <div className="space-y-1">
                          <p><span className="font-bold text-on-surface mr-2">電話</span> {office.phone}</p>
                          <p><span className="font-bold text-on-surface mr-2">傳真</span> {office.fax}</p>
                          <p className="max-w-xs">{office.address}</p>
                        </div>
                        
                        {/* Map Integration */}
                        <a 
                          href={office.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block relative group overflow-hidden rounded-2xl bg-surface-container-low"
                        >
                          <img 
                            src={office.map} 
                            alt={`${office.title} Map`}
                            className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                          <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                             Open in Google Maps
                          </div>
                        </a>
                      </div>
                    </section>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Column 2: Interaction Module (Form) */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-surface-container-lowest p-10 sm:p-16 rounded-[2.5rem] shadow-ambient relative overflow-hidden"
              >
                {/* Tonal Layering effect */}
                <div className="absolute top-0 left-0 w-full h-2 bg-primary-gradient opacity-80"></div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label htmlFor="name" className={labelClasses}>姓名 / 寶號</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className={labelClasses}>回應類別</label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer pr-12`}
                      >
                        <option value="產品咨詢">產品咨詢</option>
                        <option value="合作提案">合作提案</option>
                        <option value="其他問題">其他問題</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>回應內容</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 pt-6">
                    <button
                      type="submit"
                      className="flex-1 bg-primary-gradient text-surface-container-lowest py-5 px-12 rounded-full font-display font-bold text-lg shadow-ambient hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      送出訊息
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-surface-container-highest text-on-surface py-5 px-12 rounded-full font-display font-bold text-lg hover:bg-surface-container-low transition-colors"
                    >
                      取消
                    </button>
                  </div>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-primary/10 text-primary text-center rounded-2xl font-bold"
                    >
                      感謝您的聯絡！我們將盡快回覆您。
                    </motion.div>
                  )}
                </form>
              </motion.div>
              
              {/* Extra context for premium feel */}
              <div className="mt-12 ml-6 text-xs text-on-surface-variant font-medium tracking-tight flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>我們的醫療顧問團隊通常會在 24 小時內提供回覆。</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
