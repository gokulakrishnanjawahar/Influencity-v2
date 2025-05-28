
    import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Card, CardContent } from '@/components/ui/card';
    import { ChevronLeft, ChevronRight } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const mockTestimonials = [
      {
        id: 1,
        quote: "SponsorDAO revolutionized how I connect with brands. Direct crypto payments are a game-changer!",
        name: '@CreatorGalaxy',
        role: 'YouTube Tech Reviewer',
        earnings: 'Earned 2.5 ETH',
        avatarPlaceholder: 'CG',
      },
      {
        id: 2,
        quote: "Finally, a transparent and efficient way to find authentic creators. The DAO voting adds a layer of trust I love.",
        name: '@BrandNova',
        role: 'Marketing Lead, Quantum Leap Inc.',
        earnings: 'Deployed 15 ETH in sponsorships',
        avatarPlaceholder: 'BN',
      },
      {
        id: 3,
        quote: "No more chasing invoices or waiting for bank transfers. SponsorDAO is the future for global creators.",
        name: '@PixelArtisan',
        role: 'Instagram Artist',
        earnings: 'Secured 5 deals worth 8000 USDC',
        avatarPlaceholder: 'PA',
      },
    ];

    const Testimonials = ({ IconStar }) => {
      const [currentIndex, setCurrentIndex] = useState(0);

      const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mockTestimonials.length);
      };

      const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + mockTestimonials.length) % mockTestimonials.length);
      };
      
      useEffect(() => {
        const timer = setTimeout(nextTestimonial, 7000); // Auto-scroll every 7 seconds
        return () => clearTimeout(timer);
      }, [currentIndex]);

      const current = mockTestimonials[currentIndex];

      const slideVariants = {
        enter: (direction) => ({
          x: direction > 0 ? 500 : -500,
          opacity: 0,
          scale: 0.8,
        }),
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1,
          scale: 1,
        },
        exit: (direction) => ({
          zIndex: 0,
          x: direction < 0 ? 500 : -500,
          opacity: 0,
          scale: 0.8,
        }),
      };
      
      const [direction, setDirection] = useState(0);

      const paginate = (newDirection) => {
        setDirection(newDirection);
        if (newDirection > 0) nextTestimonial();
        else prevTestimonial();
      };


      return (
        <div className="py-16 relative overflow-hidden">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-galactic-blue to-neon-purple"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Voices from the Cosmos
          </motion.h2>
          
          <div className="relative max-w-3xl mx-auto h-[350px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="absolute w-full"
              >
                <Card className="glassmorphism-card p-6 md:p-8 text-center shadow-xl shadow-galactic-blue/20">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                       {[...Array(5)].map((_, i) => (
                          <IconStar key={i} size={24} className={`mx-1 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/50 fill-yellow-400/30'}`} />
                       ))}
                    </div>
                    <p className="text-lg md:text-xl text-slate-200 italic mb-6">"{current.quote}"</p>
                    <div className="flex items-center justify-center mb-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-galactic-blue to-neon-purple flex items-center justify-center text-white font-bold text-xl mr-4">
                        {current.avatarPlaceholder}
                      </div>
                      <div>
                        <p className="font-semibold text-neon-purple text-lg">{current.name}</p>
                        <p className="text-sm text-slate-400">{current.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-galactic-blue font-medium mt-2">{current.earnings}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full border-galactic-blue text-galactic-blue hover:bg-galactic-blue/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full border-galactic-blue text-galactic-blue hover:bg-galactic-blue/20"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      );
    };

    export default Testimonials;
  