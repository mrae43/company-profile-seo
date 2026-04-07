import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import kaohsiungMap from '../assets/kaohsiung_map.webp';
import taipeiMap from '../assets/taipei_map.webp';

const CONTACT_CATEGORIES = [
  { value: '產品咨詢', label: '產品咨詢' },
  { value: '合作提案', label: '合作提案' },
  { value: '技術支援', label: '技術支援' },
  { value: '其他問題', label: '其他問題' }
];

const OFFICES = [
  {
    id: 'kaohsiung',
    title: '高雄總公司',
    subtitle: 'KAOHSIUNG HEADQUARTERS',
    phone: '07-792-7896',
    fax: '07-792-5226',
    address: '831高雄市大寮區內坑路158-79號',
    mapUrl: 'https://maps.app.goo.gl/5L6v2Jq3p4q5q5q5A',
    map: kaohsiungMap,
  },
  {
    id: 'taipei',
    title: '台北分公司',
    subtitle: 'TAIPEI BRANCH',
    phone: '02-2547-2179',
    fax: '02-2547-2803',
    address: '105台北市松山區民權東路3段106巷3弄15號1F',
    mapUrl: 'https://maps.app.goo.gl/5L6v2Jq3p4q5q5q5A',
    map: taipeiMap,
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '產品咨詢',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <main className="bg-surface min-h-screen overflow-hidden selection:bg-primary/20">
      <Helmet>
        <title>Contact | Clinical Architect Precision</title>
        <meta name="description" content="Connect with Baiguo Technology for professional medical automation and AI dispensing solutions. Our clinical consultants are ready to assist your facility." />
      </Helmet>
      
      {/* Editorial Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden" aria-labelledby="contact-heading">
        {/* Decorative elements - Tonal Layering */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low rounded-bl-[200px] -z-10 translate-x-1/4 opacity-50" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
                  Inquiry Channel
                </span>
                <h1 id="contact-heading" className="text-[clamp(3rem,8vw,5.5rem)] font-display font-bold leading-[1] mb-8 tracking-tighter text-on-surface">
                  Professional <br />
                  <span className="text-primary italic">Consultation</span>
                </h1>
                <p className="text-xl sm:text-2xl text-on-surface-variant font-sans max-w-xl leading-relaxed">
                  Our team of clinical architects is ready to transform your pharmaceutical logistics through precision automation.
                </p>
              </motion.div>
            </div>
            
            <div className="hidden lg:block lg:col-span-5">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="relative aspect-square bg-surface-container-highest rounded-[40px] overflow-hidden shadow-ambient"
               >
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                 <div className="absolute bottom-12 left-12 right-12 p-8 bg-surface/90 backdrop-blur-xl rounded-[32px] shadow-ambient">
                    <p className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Global Support</p>
                    <p className="text-lg font-display text-on-surface leading-snug">
                      Providing high-precision medical automation across Taiwan and logistics hubs.
                    </p>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interaction Hub */}
      <section className="pb-32 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Column 1: Contact Form - Interaction Module */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-surface-container-lowest p-8 sm:p-14 rounded-[3rem] shadow-ambient relative"
              >
                {/* Visual Accent - No structural line approach */}
                <div className="absolute top-0 inset-x-12 h-1 bg-primary-gradient opacity-60 rounded-full" />
                
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-1 ml-1 group-focus-within:text-primary transition-colors">
                        Name / Organization
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-surface-container-low px-4 py-4 text-on-surface border-b-2 border-outline-variant/20 focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-on-surface-variant/30 text-lg rounded-t-xl"
                        required
                      />
                    </div>
                    
                    <div className="relative group">
                      <label htmlFor="email" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-1 ml-1 group-focus-within:text-primary transition-colors">
                        Clinical Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@organization.com"
                        className="w-full bg-surface-container-low px-4 py-4 text-on-surface border-b-2 border-outline-variant/20 focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-on-surface-variant/30 text-lg rounded-t-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="category" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-1 ml-1 group-focus-within:text-primary transition-colors">
                      Inquiry Category
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-surface-container-low px-4 py-4 text-on-surface border-b-2 border-outline-variant/20 focus:border-primary focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-lg rounded-t-xl"
                      >
                        {CONTACT_CATEGORIES.map(cat => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/50 group-focus-within:text-primary transition-colors">
                        <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="message" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-1 ml-1 group-focus-within:text-primary transition-colors">
                      Detailed Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we assist your clinical workflow?"
                      className="w-full bg-surface-container-low px-4 py-4 text-on-surface border-b-2 border-outline-variant/20 focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-on-surface-variant/30 text-lg resize-none rounded-t-xl"
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <button
                      type="submit"
                      className="flex-[2] bg-primary-gradient text-surface-container-lowest py-5 px-12 rounded-full font-display font-bold text-lg shadow-ambient hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      Initialize Contact
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 bg-surface-container-highest text-on-surface py-5 px-12 rounded-full font-display font-bold text-lg hover:bg-surface-container-low transition-colors duration-300"
                    >
                      Clear
                    </button>
                  </div>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 bg-primary/10 text-primary text-center rounded-[2rem] font-bold border border-primary/20 backdrop-blur-sm"
                    >
                      Message Transmitted Successfully. We will respond within 24 clinical hours.
                    </motion.div>
                  )}
                </form>
              </motion.div>
              
              <div className="mt-12 flex items-start gap-4 ml-6 group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-500 animate-pulse"></div>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed max-w-lg">
                  Registered submissions are routed directly to our specialist consulting team. Technical specifications and project-specific requirements are handled with clinical precision.
                </p>
              </div>
            </div>

            {/* Column 2: Location Matrix */}
            <div className="lg:col-span-5 space-y-20">
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-outline-variant/20"></div>
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Office Matrix</h2>
                  <div className="h-px w-8 bg-outline-variant/20"></div>
                </div>

                <div className="space-y-16">
                  {OFFICES.map((office) => (
                    <motion.article 
                      key={office.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="group"
                    >
                      <header className="mb-6">
                        <span className="text-[10px] font-bold tracking-widest text-on-surface-variant/60 block mb-1">
                          {office.subtitle}
                        </span>
                        <h3 className="text-3xl font-display font-bold text-on-surface group-hover:text-primary transition-colors">{office.title}</h3>
                      </header>
                      
                      <div className="grid sm:grid-cols-2 gap-8 items-start mb-8">
                         <div className="space-y-4">
                            <div>
                               <p className="text-[10px] font-bold text-on-surface-variant/40 tracking-wider mb-0.5">TEL</p>
                               <p className="text-lg font-medium text-on-surface">{office.phone}</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-bold text-on-surface-variant/40 tracking-wider mb-0.5">FAX</p>
                               <p className="text-lg font-medium text-on-surface">{office.fax}</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-bold text-on-surface-variant/40 tracking-wider mb-0.5">LOCATION</p>
                               <p className="text-base text-on-surface-variant leading-relaxed">{office.address}</p>
                            </div>
                         </div>
                         
                         <a 
                            href={office.mapUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block relative aspect-video rounded-3xl overflow-hidden bg-surface-container-low shadow-ambient group"
                            aria-label={`View ${office.title} on Google Maps`}
                          >
                            <img 
                              src={office.map} 
                              alt={`${office.title} Location Map`}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                              loading='lazy'
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <div className="bg-surface/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary shadow-ambient">
                                  View on Google Maps
                               </div>
                            </div>
                          </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>

              {/* Digital Pulse Section */}
              <div className="p-10 rounded-[3rem] bg-surface-container-low relative overflow-hidden group">
                 <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-1000"></div>
                 <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-6">Digital Interface</h2>
                 <div className="space-y-2">
                    <p className="text-[10px] font-bold text-on-surface-variant/40 tracking-wider uppercase">Direct Email</p>
                    <p className="text-2xl font-display font-medium text-on-surface hover:text-primary transition-colors select-all">
                      sales@baiguo.com.tw
                    </p>
                 </div>
                 <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-all">
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                       </svg>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant tracking-tight uppercase">High-Speed Response Infrastructure</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
