
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Progress } from '@/components/ui/progress';
    import { Button } from '@/components/ui/button';
    import { Settings, Edit3, Eye } from 'lucide-react';

    const mockDashboardData = {
      xp: 1250,
      level: 'Rising Star',
      xpToNextLevel: 750,
      badges: [
        { id: 1, name: 'First Campaign', icon: 'Award' },
        { id: 2, name: 'DAO Voter I', icon: 'Users' },
        { id: 3, name: 'ETH Earner', icon: 'DollarSign' },
      ],
      pastDeals: [
        { id: 1, type: 'completed', title: 'Sponsored Stream with @CosmicGaming', amount: '0.3 ETH', date: '2025-05-10' },
        { id: 2, type: 'posted', title: 'UGC Campaign for NovaLaunch', budget: '500 USDC', date: '2025-05-01', status: 'Active' },
      ],
      stats: [
        { label: 'Total Earned/Spent', value: '1.2 ETH' },
        { label: 'Campaigns Completed', value: '5' },
        { label: 'Reputation Score', value: '850' },
      ],
    };

    const DashboardSection = ({ BarChart2, Award }) => {
      const userXPPercentage = (mockDashboardData.xp / (mockDashboardData.xp + mockDashboardData.xpToNextLevel)) * 100;

      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, type: 'spring', stiffness: 80 }
        })
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
            Your Galactic Dashboard
          </motion.h2>

          <motion.div 
            className="glassmorphism-card p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* XP Progress & Badges */}
              <motion.div className="lg:col-span-1 space-y-6" custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="bg-space-black/50 border-neon-purple/30 shadow-neon-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-neon-purple">XP & Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-galactic-blue">{mockDashboardData.xp} XP</p>
                    <p className="text-lg text-slate-300 mb-2">Level: {mockDashboardData.level}</p>
                    <Progress value={userXPPercentage} className="h-3 my-2" />
                    <p className="text-xs text-slate-400">{mockDashboardData.xpToNextLevel} XP to next level</p>
                  </CardContent>
                </Card>
                <Card className="bg-space-black/50 border-galactic-blue/30 shadow-galactic-blue/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-galactic-blue">Unlocked Badges</CardTitle>
                  </CardHeader>
                  <CardContent className="flex space-x-3">
                    {mockDashboardData.badges.map(badge => (
                      <motion.div 
                        key={badge.id} 
                        className="p-3 bg-galactic-blue/20 rounded-lg text-center tooltip"
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <Award size={32} className="text-galactic-blue mx-auto" />
                        <span className="tooltip-text bg-neon-purple text-white text-xs rounded py-1 px-2 absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">{badge.name}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Past Deals */}
              <motion.div className="lg:col-span-2 space-y-6" custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="bg-space-black/50 border-slate-600/30 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-100">Past Deals & Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockDashboardData.pastDeals.map(deal => (
                      <div key={deal.id} className="p-3 bg-slate-800/50 rounded-md border border-slate-700 flex justify-between items-center">
                        <div>
                          <p className={`font-semibold ${deal.type === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>{deal.title}</p>
                          <p className="text-sm text-slate-400">{deal.type === 'completed' ? `Earned: ${deal.amount}` : `Budget: ${deal.budget}`} - {deal.date}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-galactic-blue hover:text-neon-purple"><Eye size={18}/></Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                {/* Stats */}
                <Card className="bg-space-black/50 border-slate-600/30 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl text-slate-100 flex items-center">
                            <BarChart2 size={28} className="mr-3 text-galactic-blue"/>
                            Your Stats
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {mockDashboardData.stats.map(stat => (
                            <div key={stat.label} className="p-4 bg-slate-800/50 rounded-lg text-center border border-slate-700">
                                <p className="text-2xl font-bold text-neon-purple">{stat.value}</p>
                                <p className="text-sm text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div 
              className="mt-8 flex justify-end space-x-4"
              custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-space-black">
                <Edit3 size={18} className="mr-2" /> Edit Profile
              </Button>
              <Button className="glowing-button">
                <Settings size={18} className="mr-2" /> Account Settings
              </Button>
            </motion.div>
          </motion.div>
        </div>
      );
    };

    export default DashboardSection;
  