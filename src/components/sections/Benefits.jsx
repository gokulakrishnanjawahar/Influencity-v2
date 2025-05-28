import React from 'react';
    import { motion } from 'framer-motion';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import { CheckCircle } from 'lucide-react';

    const creatorBenefitsData = [
      { title: 'Global Exposure', description: 'Reach brands worldwide, breaking geographical barriers. Add more details about how creators gain visibility.' },
      { title: 'Instant Crypto Payouts', description: 'Receive payments in crypto immediately upon milestone completion. Explain the benefits of crypto for creators.' },
      { title: 'No Gatekeepers', description: 'Direct access to brands, no intermediaries taking cuts or causing delays. Emphasize the freedom and direct communication.' },
      { title: 'XP & Reputation Bonuses', description: 'Earn XP and build your on-chain reputation with every successful deal. Describe how this system helps creators grow.' },
    ];

    const brandBenefitsData = [
      { title: 'Full Transparency', description: 'Track campaigns and payments on-chain for unparalleled clarity. Detail how blockchain ensures transparency.' },
      { title: 'Milestone-Based Payouts', description: 'Release funds only when agreed-upon deliverables are met. Explain the security this offers to brands.' },
      { title: 'Decentralized Reputation', description: 'Access creator profiles with verified, immutable track records. Highlight the value of trustworthy creator data.' },
      { title: 'Global Talent Pool', description: 'Connect with diverse creators from every corner of the digital world. Showcase the variety of talent available.' },
    ];

    const BenefitCard = ({ title, description, IconComponent }) => (
      <motion.div
        className="glassmorphism-card p-6 min-h-[200px] flex flex-col justify-start items-start backdrop-filter backdrop-blur-lg bg-white/5 border border-galactic-blue/20 rounded-xl shadow-xl hover:shadow-neon-purple/30 transition-shadow duration-300"
        whileHover={{ y: -5, boxShadow: "0 10px 20px hsla(var(--neon-purple),0.2)" }}
      >
        <div className="flex items-center mb-3">
          { IconComponent && <IconComponent size={28} className="mr-3 text-galactic-blue" /> }
          <h4 className="text-xl font-semibold text-slate-100">{title}</h4>
        </div>
        <p className="text-slate-300 text-sm flex-grow">{description}</p>
        <CheckCircle size={20} className="text-green-400 mt-3 self-end" />
      </motion.div>
    );

    const Benefits = ({ Globe, Shield }) => {
      const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
        }),
      };
      
      return (
        <div className="py-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-galactic-blue to-neon-purple"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Creator & Brand Advantages
          </motion.h2>
          <Tabs defaultValue="creators" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="creators">For Creators</TabsTrigger>
              <TabsTrigger value="brands">For Brands</TabsTrigger>
            </TabsList>
            <TabsContent value="creators">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {creatorBenefitsData.map((benefit, i) => (
                  <motion.div key={benefit.title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <BenefitCard title={benefit.title} description={benefit.description} IconComponent={Globe} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="brands">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brandBenefitsData.map((benefit, i) => (
                  <motion.div key={benefit.title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <BenefitCard title={benefit.title} description={benefit.description} IconComponent={Shield} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      );
    };

    export default Benefits;