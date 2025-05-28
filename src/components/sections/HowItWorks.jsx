import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    const stepsData = [
      {
        id: 1,
        title: 'Brand Posts Offer',
        description: 'Brands define sponsorship goals, budget in crypto, and target creator profiles on our secure platform. You can add more details here about the offer posting process.',
        iconKey: 'Target',
      },
      {
        id: 2,
        title: 'Creator Applies',
        description: 'Creators discover relevant offers, showcase their portfolio, and apply with confidence. Explain how creators can filter and find the best opportunities.',
        iconKey: 'Rocket',
      },
      {
        id: 3,
        title: 'DAO Votes (Optional)',
        description: 'For community-funded or high-value deals, DAO members can vote to approve sponsorships, ensuring alignment. Detail the voting mechanism and its benefits.',
        iconKey: 'BarChart2',
      },
      {
        id: 4,
        title: 'Smart Contract Pays',
        description: 'Upon milestone completion, smart contracts automatically release crypto payments directly to creators. Fast & fair. Highlight the security and speed of crypto payments.',
        iconKey: 'CheckCircle',
      },
    ];

    const HowItWorks = ({ Target, BarChart2, CheckCircle, Rocket }) => {
      const icons = { Target, BarChart2, CheckCircle, Rocket };
      
      const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { type: "spring", damping: 15, stiffness: 100 }
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
            How It Works: The Galactic Flow
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stepsData.map((step) => {
              const IconComponent = icons[step.iconKey];
              return (
                <motion.div key={step.id} variants={itemVariants}>
                  <Card className="bg-blue-900/60 border-2 border-galactic-blue/50 rounded-xl p-6 h-full flex flex-col transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-galactic-blue/50">
                    <CardHeader className="items-center text-center">
                      {IconComponent && <IconComponent size={48} className="mb-4 text-galactic-blue drop-shadow-[0_0_8px_hsl(var(--galactic-blue))]" />}
                      <CardTitle className="text-2xl text-neon-purple">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300 text-center flex-grow">
                      <p>{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      );
    };

    export default HowItWorks;