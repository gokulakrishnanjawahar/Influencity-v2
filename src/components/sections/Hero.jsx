
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const Hero = ({ Zap, Users }) => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
          },
        },
      };

      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 100 },
        },
      };

      return (
        <motion.div 
          className="min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 z-0">
            {/* Placeholder for animated galactic background / Lottie */}
            <div className="absolute inset-0 bg-gradient-to-br from-space-black via-galactic-blue/10 to-neon-purple/10 opacity-70"></div>
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-galactic-blue/30 rounded-full filter blur-3xl animate-pulse-glow opacity-30"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-neon-purple/30 rounded-full filter blur-3xl animate-pulse-glow animation-delay-2000 opacity-30"></div>
          </div>
          
          <motion.div variants={itemVariants} className="relative z-10 flex items-center justify-center text-galactic-blue mb-6">
            <Zap size={48} className="mr-3 drop-shadow-[0_0_8px_hsl(var(--galactic-blue))]" />
            <span className="text-xl font-semibold">Welcome to the Future of Sponsorships</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100"
            style={{ textShadow: "0 0 10px hsl(var(--galactic-blue)), 0 0 20px hsl(var(--neon-purple))" }}
          >
            Decentralized Sponsorships.
            <br />
            <span className="text-galactic-blue">Trustless. Transparent. Global.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10"
          >
            No middlemen. No delays. Just direct brand–creator deals powered by crypto.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button className="glowing-button text-lg px-8 py-6 group">
              <Users size={24} className="mr-2 text-white group-hover:text-neon-purple transition-colors" /> I’m a Creator
            </Button>
            <Button className="glowing-button-secondary text-lg px-8 py-6 group">
              <Zap size={24} className="mr-2 text-white group-hover:text-galactic-blue transition-colors" /> I’m a Brand
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-sm text-slate-400"
          >
            Join the revolution. Power your partnerships with Web3.
          </motion.div>
        </motion.div>
      );
    };

    export default Hero;
  