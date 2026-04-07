import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll to adjust navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: '首頁', path: '/' },
    { name: '關於白國', path: '/about' },
    { name: '發展里程碑', path: '/milestones' },
    { name: '產品介紹', path: '/products' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-glass border-b border-outline-variant/10 py-3 shadow-ambient' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex items-center gap-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary-gradient rounded-xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-out" />
                <span className="relative z-10 text-white font-display font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-on-surface leading-none tracking-tight">
                  白國科技
                </span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-primary leading-tight mt-1">
                  Precision Medical
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium tracking-wide transition-all duration-300 py-2 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-on-surface-variant hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-primary-gradient text-white px-8 py-4 rounded-full font-display font-bold text-sm shadow-ambient hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">聯繫我們</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-on-surface focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`h-0.5 w-full bg-on-surface rounded-full transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2 bg-primary' : ''}`} />
                <span className={`h-0.5 w-full bg-on-surface rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-on-surface rounded-full transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2 bg-primary' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 md:hidden bg-surface flex flex-col pt-32 px-10"
          >
            <div className="flex flex-col space-y-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-5xl font-display font-bold transition-all ${
                        isActive ? 'text-primary translate-x-2' : 'text-on-surface hover:text-primary'
                      } block`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 border-t border-outline-variant/10 mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block bg-primary-gradient text-white px-8 py-6 rounded-2xl font-display font-bold text-xl shadow-ambient"
                >
                  聯繫我們
                </Link>
                <div className="mt-16 space-y-3">
                  <p className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-primary">白國科技</p>
                  <p className="text-base font-sans text-on-surface-variant leading-relaxed">Precision Medical Logistics & AI Robotics Partner</p>
                </div>
              </motion.div>
            </div>
            
            {/* Close button inside drawer */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
