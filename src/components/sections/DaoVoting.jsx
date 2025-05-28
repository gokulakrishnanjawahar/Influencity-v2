import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { CheckCircle, XCircle, Clock } from 'lucide-react';

    const mockProposalsData = [
      {
        id: 1,
        title: 'Fund Galactic Gaming Tournament Sponsorship',
        description: 'Proposal to sponsor a major eSports tournament with 10 ETH prize pool. This section can be expanded with details about the tournament and expected ROI.',
        votesYes: 723,
        votesNo: 158,
        timeLeft: '2d 15h',
        xpReward: 50,
        status: 'active',
      },
      {
        id: 2,
        title: 'Integrate New Social Platform: NebulaNet',
        description: 'Allocate dev resources to integrate NebulaNet for creator onboarding. More information on NebulaNet and integration benefits can be added here.',
        votesYes: 450,
        votesNo: 55,
        timeLeft: '18h 30m',
        xpReward: 25,
        status: 'active',
      },
      {
        id: 3,
        title: 'Marketing Campaign for Q3: Target Alpha Centauri',
        description: 'Launch a targeted marketing campaign across key star systems. Provide specifics on the campaign strategy and budget allocation.',
        votesYes: 980,
        votesNo: 30,
        timeLeft: 'Ended',
        xpReward: 30,
        status: 'passed',
      },
    ];

    const DaoVoting = ({ Users, CheckCircle: PassedIcon }) => {
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({ 
          opacity: 1, 
          y: 0,
          transition: { delay: i * 0.1, type: "spring", stiffness: 100 } 
        }),
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
            DAO Voting & Proposals
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProposalsData.map((proposal, i) => {
              const totalVotes = proposal.votesYes + proposal.votesNo;
              const yesPercentage = totalVotes > 0 ? (proposal.votesYes / totalVotes) * 100 : 0;
              const noPercentage = totalVotes > 0 ? (proposal.votesNo / totalVotes) * 100 : 0;

              return (
                <motion.div key={proposal.id} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Card className="bg-blue-900/70 border-2 border-neon-purple/50 rounded-xl p-6 h-full flex flex-col transform hover:shadow-neon-purple/40 transition-shadow duration-300 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-neon-purple mb-1">{proposal.title}</CardTitle>
                        {proposal.status === 'passed' && PassedIcon && <PassedIcon className="text-green-400" size={24} />}
                        {proposal.status === 'failed' && <XCircle className="text-red-400" size={24} />}
                      </div>
                      <CardDescription className="text-slate-300 text-sm">{proposal.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      {proposal.status === 'active' && (
                        <>
                          <div className="mb-4">
                            <div className="flex justify-between text-xs text-slate-300 mb-1">
                              <span>YES: {proposal.votesYes} ({yesPercentage.toFixed(1)}%)</span>
                              <span>NO: {proposal.votesNo} ({noPercentage.toFixed(1)}%)</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden border border-slate-600">
                              <div
                                className="bg-green-500 h-full rounded-l-full"
                                style={{ width: `${yesPercentage}%`, boxShadow: '0 0 8px #22c55e' }}
                              ></div>
                              <div
                                className="bg-red-500 h-full rounded-r-full inline-block"
                                style={{ width: `${noPercentage}%`, transform: `translateX(${(yesPercentage > 0 && noPercentage > 0) ? '-1px': '0px'})`, boxShadow: '0 0 8px #ef4444' }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-slate-400">
                            <Clock size={16} className="mr-2 text-galactic-blue" />
                            Time Left: {proposal.timeLeft}
                          </div>
                        </>
                      )}
                       {proposal.status !== 'active' && (
                         <p className={`text-lg font-semibold ${proposal.status === 'passed' ? 'text-green-400' : 'text-red-400'}`}>
                           Proposal {proposal.status}
                         </p>
                       )}
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-4">
                      <span className="text-sm text-galactic-blue">XP Reward: {proposal.xpReward} XP</span>
                      {proposal.status === 'active' && (
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" className="border-green-500 text-green-500 hover:bg-green-500/20">
                            <CheckCircle size={16} className="mr-1" /> Vote Yes
                          </Button>
                          <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500/20">
                            <XCircle size={16} className="mr-1" /> Vote No
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    };

    export default DaoVoting;