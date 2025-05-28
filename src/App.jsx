import React, { useState, useEffect, Suspense, lazy } from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import { Button } from '@/components/ui/button';
    import { Moon, Sun, Zap, Users, Target, BarChart2, CheckCircle, Award, MoonStar as IconStar, TrendingUp, Globe, Shield, Rocket, Star } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';

    const Header = lazy(() => import('@/components/layout/Header'));
    const Footer = lazy(() => import('@/components/layout/Footer'));
    const Hero = lazy(() => import('@/components/sections/Hero'));
    const LiveDealFeed = lazy(() => import('@/components/sections/LiveDealFeed'));
    const HowItWorks = lazy(() => import('@/components/sections/HowItWorks.jsx'));
    const Benefits = lazy(() => import('@/components/sections/Benefits'));
    const DaoVoting = lazy(() => import('@/components/sections/DaoVoting'));
    const DashboardSection = lazy(() => import('@/components/sections/DashboardSection'));
    const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
    const CredibilityPage = lazy(() => import('@/components/pages/CredibilityPage'));
    
    const StarField = () => {
      const [stars, setStars] = useState([]);

      useEffect(() => {
        const numStars = 100;
        const newStars = [];
        for (let i = 0; i < numStars; i++) {
          newStars.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            delay: Math.random() * 5,
          });
        }
        setStars(newStars);
      }, []);

      return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          {stars.map(star => (
            <motion.div
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: star.delay }}
            />
          ))}
        </div>
      );
    };


    function App() {
      const [theme, setTheme] = useState('dark');
      const [currentPage, setCurrentPage] = useState('home');


      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme]);

      const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
      };
      
      const navigateTo = (page) => {
        setCurrentPage(page);
      };


      const pageSections = [
        { id: 'hero', component: Hero, props: { Zap, Users } },
        { id: 'feed', component: LiveDealFeed, props: { TrendingUp } },
        { id: 'howitworks', component: HowItWorks, props: { Target, BarChart2, CheckCircle, Rocket } },
        { id: 'benefits', component: Benefits, props: { Globe, Shield } },
        { id: 'dao', component: DaoVoting, props: { Users, CheckCircle } },
        { id: 'dashboard', component: DashboardSection, props: { BarChart2, Award } },
        { id: 'testimonials', component: Testimonials, props: { IconStar } },
      ];

      const renderContent = () => {
        if (currentPage === 'credibility') {
          return <CredibilityPage Star={Star} />;
        }
        return (
          <AnimatePresence>
            {pageSections.map((section, index) => {
              const SectionComponent = section.component;
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="my-16 md:my-24 scroll-mt-20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <SectionComponent {...section.props} />
                </motion.section>
              );
            })}
          </AnimatePresence>
        );
      };


      return (
        <div className="flex flex-col min-h-screen bg-space-black text-foreground relative">
          <StarField />
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-2xl text-galactic-blue">Loading Universe...</div>}>
            <Header toggleTheme={toggleTheme} currentTheme={theme} Moon={Moon} Sun={Sun} navigateTo={navigateTo} currentPage={currentPage} />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {renderContent()}
            </main>
            <Footer />
          </Suspense>
          <Toaster />
        </div>
      );
    }

    export default App;