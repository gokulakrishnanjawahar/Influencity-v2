
    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';

    const mockDeals = [
      { id: 1, creator: '@GalaxyStreamer', brand: '@NovaWidgets', amount: '0.5 ETH', platform: 'Twitch' },
      { id: 2, creator: '@CryptoArtisan', brand: '@QuantumAds', amount: '1200 USDC', platform: 'Instagram' },
      { id: 3, creator: '@TechVerseReview', brand: '@CyberSecure', amount: '0.2 BTC', platform: 'YouTube' },
      { id: 4, creator: '@PixelPlayz', brand: '@GameDAO', amount: '750 MATIC', platform: 'X' },
      { id: 5, creator: '@EcoExplorer', brand: '@GreenChainCo', amount: '0.8 ETH', platform: 'YouTube' },
    ];

    const LiveDealFeed = ({ TrendingUp }) => {
      const [deals, setDeals] = useState([]);

      useEffect(() => {
        // Simulate fetching data
        setDeals(mockDeals.concat(mockDeals)); // Duplicate for a longer scroll
      }, []);

      return (
        <div className="py-12 bg-space-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-galactic-blue/10">
          <motion.div 
            className="flex items-center justify-center mb-8 text-2xl font-bold text-galactic-blue"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrendingUp size={32} className="mr-3" />
            Live Deal Feed
          </motion.div>
          <div className="relative w-full h-16 overflow-hidden">
            <motion.div
              className="absolute flex whitespace-nowrap"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {deals.map((deal, index) => (
                <div key={`${deal.id}-${index}`} className="inline-block mx-6 p-4 bg-galactic-blue/10 rounded-lg border border-galactic-blue/30 shadow-md hover:shadow-neon-purple/30 transition-shadow">
                  <span className="text-slate-300 font-semibold">{deal.creator}</span>
                  <span className="text-slate-400 mx-2">just earned</span>
                  <span className="text-neon-purple font-bold">{deal.amount}</span>
                  <span className="text-slate-400 mx-2">from</span>
                  <span className="text-slate-300 font-semibold">{deal.brand}</span>
                  <span className="text-xs text-slate-500 ml-2">({deal.platform})</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      );
    };
    export default LiveDealFeed;
  