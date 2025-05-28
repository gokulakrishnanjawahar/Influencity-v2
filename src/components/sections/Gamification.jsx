
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Progress } from '@/components/ui/progress';

    const gamificationFeatures = [
      {
        title: 'XP System & Levels',
        description: 'Earn XP for voting, completing campaigns, referrals. Level up: Newbie → Rising Star → DAO Contributor → Sponsorship Legend.',
        iconKey: 'IconStar',
        progress: 75,
        level: 'Rising Star',
      },
      {
        title: 'Soulbound NFTs',
        description: 'Receive non-transferable NFT badges for successful sponsorships, building your on-chain reputation.',
        iconKey: 'Award',
        nftCount: 3,
      },
      {
        title: 'Quests & Bounties',
        description: 'Complete open tasks like "Design a DAO logo" for USDC + NFT rewards.',
        iconKey: 'Code',
        activeQuests: 5,
      },
      {
        title: 'Loot Boxes & Airdrops',
        description: 'Unlock random XP or NFT drops by hitting community milestones or personal achievements.',
        iconKey: 'Gift',
        nextDrop: 'Community Tier 3',
      },
    ];

    const Gamification = ({ Award, Gift, IconStar, Code }) => {
      const icons = { Award, Gift, IconStar, Code };

      const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      };

      const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { type: "spring", damping: 12, stiffness: 90 }
        }
      };
      
      return (
        <div className="py-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-galactic-blue to-neon-purple"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Gamify Your Journey
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {gamificationFeatures.map((feature, index) => {
              const IconComponent = icons[feature.iconKey];
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="glassmorphism-card p-2 h-full transform hover:border-neon-purple/70 transition-all duration-300 hover:shadow-neon-purple/30">
                    <CardHeader>
                      <div className="flex items-center mb-3">
                        {IconComponent && <IconComponent size={36} className="mr-4 text-galactic-blue drop-shadow-[0_0_6px_hsl(var(--galactic-blue))]" />}
                        <CardTitle className="text-2xl text-neon-purple">{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-slate-300">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {feature.progress !== undefined && (
                        <div className="mt-2">
                          <div className="flex justify-between text-sm text-slate-400 mb-1">
                            <span>Level: {feature.level}</span>
                            <span>{feature.progress}% to next level</span>
                          </div>
                          <Progress value={feature.progress} className="h-3" indicatorClassName="bg-gradient-to-r from-neon-purple to-galactic-blue"/>
                        </div>
                      )}
                      {feature.nftCount !== undefined && (
                        <p className="text-slate-200 mt-2">Badges Unlocked: <span className="font-bold text-galactic-blue">{feature.nftCount}</span></p>
                      )}
                      {feature.activeQuests !== undefined && (
                        <p className="text-slate-200 mt-2">Active Quests: <span className="font-bold text-galactic-blue">{feature.activeQuests}</span></p>
                      )}
                       {feature.nextDrop !== undefined && (
                        <p className="text-slate-200 mt-2">Next Loot Drop: <span className="font-bold text-neon-purple">{feature.nextDrop}</span></p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
             <h3 className="text-3xl font-bold text-slate-100 mb-6">Leaderboard Spotlight</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {['Top Creator: @StarlightPro', 'Top Brand: NovaCorp', 'Top Voter: DAOWhale77'].map((item, idx) => (
                    <motion.div 
                        key={idx} 
                        className="glassmorphism-card p-4 rounded-lg text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.6, duration: 0.4 }}
                    >
                        <p className="text-lg font-semibold text-galactic-blue">{item.split(': ')[0]}</p>
                        <p className="text-xl text-neon-purple">{item.split(': ')[1]}</p>
                    </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      );
    };

    export default Gamification;
  