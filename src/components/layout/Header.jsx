import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X, Zap, ShieldCheck } from 'lucide-react';

    const Header = ({ toggleTheme, currentTheme, Moon, Sun, navigateTo, currentPage }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const navItems = [
        { name: 'Home', href: '#hero', action: () => navigateTo('home') },
        { name: 'How It Works', href: '#howitworks', action: () => navigateTo('home') },
        { name: 'Benefits', href: '#benefits', action: () => navigateTo('home') },
        { name: 'DAO', href: '#dao', action: () => navigateTo('home') },
        { name: 'Credibility', href: '#credibility', action: () => navigateTo('credibility'), icon: ShieldCheck },
        { name: 'Dashboard', href: '#dashboard', action: () => navigateTo('home') },
      ];

      const ThemeIcon = currentTheme === 'dark' ? Sun : Moon;

      const handleNavClick = (item) => {
        item.action();
        if (item.href.startsWith('#') && currentPage === 'home') {
           const element = document.getElementById(item.href.substring(1));
           if (element) {
             element.scrollIntoView({ behavior: 'smooth' });
           }
        }
        setIsMobileMenuOpen(false);
      };


      return (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="sticky top-0 z-50 bg-space-black/80 backdrop-blur-lg shadow-lg shadow-galactic-blue/20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <motion.a
                href="#hero"
                onClick={(e) => {
                    e.preventDefault();
                    handleNavClick({ action: () => navigateTo('home'), href: '#hero' });
                }}
                className="flex items-center space-x-2 text-2xl font-bold font-orbitron text-galactic-blue hover:text-neon-purple transition-colors"
                whileHover={{ scale: 1.05, textShadow: "0 0 8px hsl(var(--neon-purple))" }}
              >
                <Zap size={32} />
                <span>Creator Mint</span>
              </motion.a>

              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                    }}
                    className="text-lg font-medium text-slate-300 hover:text-galactic-blue transition-colors duration-300 relative group flex items-center"
                    whileHover={{ y: -2 }}
                  >
                    {item.icon && <item.icon size={18} className="mr-1.5" />}
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-galactic-blue group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                 <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label={currentTheme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
                    className="text-slate-300 hover:text-galactic-blue hover:bg-galactic-blue/10"
                  >
                    <ThemeIcon size={24} />
                  </Button>
                <Button variant="outline" className="hidden md:inline-flex border-galactic-blue text-galactic-blue hover:bg-galactic-blue hover:text-space-black">
                  Connect Wallet
                </Button>
                <div className="md:hidden">
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-galactic-blue">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-space-black/95 pb-4"
            >
              <nav className="flex flex-col items-center space-y-4 pt-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                    }}
                    className="text-lg font-medium text-slate-300 hover:text-galactic-blue transition-colors flex items-center"
                  >
                    {item.icon && <item.icon size={18} className="mr-1.5" />}
                    {item.name}
                  </a>
                ))}
                <Button variant="outline" className="w-3/4 border-galactic-blue text-galactic-blue hover:bg-galactic-blue hover:text-space-black">
                  Connect Wallet
                </Button>
              </nav>
            </motion.div>
          )}
        </motion.header>
      );
    };

    export default Header;