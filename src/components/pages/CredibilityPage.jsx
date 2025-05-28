import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { ThumbsUp, ThumbsDown, MessageSquare, Search } from 'lucide-react';

    const mockCreators = [
      {
        id: 'creator1',
        name: '@GalaxyStreamer',
        avatarPlaceholder: 'GS',
        platform: 'Twitch',
        avgRating: 4.8,
        reviews: [
          { brand: '@NovaWidgets', rating: 5, feedback: 'Excellent collaboration, very professional and delivered great results!' },
          { brand: '@QuantumAds', rating: 4.5, feedback: 'Good reach, but communication could be slightly faster.' },
        ],
      },
      {
        id: 'creator2',
        name: '@CryptoArtisan',
        avatarPlaceholder: 'CA',
        platform: 'Instagram',
        avgRating: 4.5,
        reviews: [
          { brand: '@PixelPerfectCo', rating: 4, feedback: 'Creative content, met deadlines.' },
        ],
      },
    ];

    const StarRating = ({ rating, setRating, editable = true }) => {
      return (
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              type="button"
              key={star}
              onClick={() => editable && setRating(star)}
              whileHover={editable ? { scale: 1.2, y: -2 } : {}}
              className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-slate-600'} ${editable ? 'cursor-pointer' : 'cursor-default'}`}
              aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
            >
              ★
            </motion.button>
          ))}
        </div>
      );
    };
    

    const CredibilityPage = ({ Star }) => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCreator, setSelectedCreator] = useState(null);
      const [rating, setRating] = useState(0);
      const [feedback, setFeedback] = useState('');

      const filteredCreators = mockCreators.filter(creator =>
        creator.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const handleSubmitReview = (e) => {
        e.preventDefault();
        if (!selectedCreator || rating === 0 || !feedback.trim()) {
          alert('Please select a creator, provide a rating, and write feedback.');
          return;
        }
        console.log({
          creatorId: selectedCreator.id,
          brand: '@YourBrandName', 
          rating,
          feedback,
        });
        alert('Review submitted! (This is a mock submission)');
        setRating(0);
        setFeedback('');
        setSelectedCreator(null);
      };

      return (
        <motion.div 
          className="py-16 min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-galactic-blue to-neon-purple"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            Creator Credibility Hub
          </motion.h1>

          <Card className="glassmorphism-card max-w-4xl mx-auto mb-12 p-6">
            <CardHeader>
              <CardTitle className="text-3xl text-neon-purple">Rate a Creator</CardTitle>
              <CardDescription className="text-slate-300">
                Share your experience working with a creator to help other brands.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <Label htmlFor="creator-select" className="text-lg text-slate-200">Select Creator</Label>
                  <select
                    id="creator-select"
                    value={selectedCreator ? selectedCreator.id : ''}
                    onChange={(e) => setSelectedCreator(mockCreators.find(c => c.id === e.target.value))}
                    className="w-full mt-2 p-3 bg-slate-800 border border-galactic-blue/50 rounded-md text-slate-100 focus:ring-neon-purple focus:border-neon-purple"
                  >
                    <option value="" disabled>-- Select a Creator --</option>
                    {mockCreators.map(creator => (
                      <option key={creator.id} value={creator.id}>{creator.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label className="text-lg text-slate-200 mb-2 block">Your Rating</Label>
                  <StarRating rating={rating} setRating={setRating} />
                </div>
                <div>
                  <Label htmlFor="feedback" className="text-lg text-slate-200">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share details of your experience..."
                    className="w-full mt-2 p-3 bg-slate-800 border border-galactic-blue/50 rounded-md text-slate-100 focus:ring-neon-purple focus:border-neon-purple min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="glowing-button w-full text-lg">
                  <ThumbsUp size={20} className="mr-2" /> Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glassmorphism-card max-w-4xl mx-auto p-6">
            <CardHeader>
              <CardTitle className="text-3xl text-neon-purple">Find Creator Reviews</CardTitle>
              <div className="relative mt-4">
                <Input 
                  type="search"
                  placeholder="Search for a creator by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pl-10 bg-slate-800 border border-galactic-blue/50 rounded-md text-slate-100 focus:ring-neon-purple focus:border-neon-purple"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20}/>
              </div>
            </CardHeader>
            <CardContent className="mt-6 space-y-8">
              {filteredCreators.length > 0 ? filteredCreators.map(creator => (
                <motion.div 
                  key={creator.id} 
                  className="p-6 bg-space-black/50 border border-neon-purple/30 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-galactic-blue to-neon-purple flex items-center justify-center text-white font-bold text-2xl mr-4">
                      {creator.avatarPlaceholder}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-galactic-blue">{creator.name}</h3>
                      <p className="text-sm text-slate-400">{creator.platform} - Avg Rating: <StarRating rating={creator.avgRating} editable={false} /> ({creator.avgRating.toFixed(1)})</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-neon-purple">Recent Feedback:</h4>
                    {creator.reviews.length > 0 ? creator.reviews.map((review, index) => (
                      <div key={index} className="p-3 bg-slate-800/70 border-l-4 border-galactic-blue rounded-r-md">
                        <div className="flex justify-between items-center mb-1">
                           <p className="font-semibold text-slate-200">{review.brand}</p>
                           <StarRating rating={review.rating} editable={false} />
                        </div>
                        <p className="text-sm text-slate-300 italic">"{review.feedback}"</p>
                      </div>
                    )) : <p className="text-slate-400">No reviews yet for this creator.</p>}
                  </div>
                </motion.div>
              )) : (
                <p className="text-center text-slate-400 text-lg">No creators found matching your search.</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default CredibilityPage;