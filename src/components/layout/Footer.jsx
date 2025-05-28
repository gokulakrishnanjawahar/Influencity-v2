import React from 'react';
    import { motion } from 'framer-motion';
    import { Github, Twitter, Youtube, Instagram, Twitch } from 'lucide-react';

    const Footer = () => {
      const socialLinks = [
        { icon: Twitter, href: '#', name: 'Twitter' },
        { icon: Youtube, href: '#', name: 'YouTube' },
        { icon: Instagram, href: '#', name: 'Instagram' },
        { icon: Twitch, href: '#', name: 'Twitch' },
        { icon: Github, href: '#', name: 'GitHub' },
      ];

      return (
        <motion.footer 
          className="bg-space-black/50 border-t border-galactic-blue/30 py-12"
          initial={{ opacity:0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-galactic-blue transition-colors"
                  whileHover={{ scale: 1.2, color: 'hsl(var(--neon-purple))' }}
                  aria-label={`Creator Mint on ${link.name}`}
                >
                  <link.icon size={28} />
                </motion.a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Gokulakrishnan Jawahar. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Creator Mint: Fueling creator economies, one smart contract at a time.
            </p>
          </div>
        </motion.footer>
      );
    };

    export default Footer;