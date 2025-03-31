
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "TravelAI transformed our family vacation planning from a stressful experience to an exciting adventure. The AI recommendations were spot-on!",
    author: "Sarah J.",
    role: "Family Traveler",
    avatar: "https://i.pravatar.cc/100?img=1",
    location: "Paris, France",
    tripType: "Family Vacation"
  },
  {
    quote: "As a solo traveler, safety is my priority. TravelAI not only suggested amazing off-the-beaten-path locations but also provided crucial safety insights.",
    author: "Marcus T.",
    role: "Adventure Seeker",
    avatar: "https://i.pravatar.cc/100?img=2",
    location: "Bali, Indonesia",
    tripType: "Solo Adventure"
  },
  {
    quote: "We used TravelAI to plan our honeymoon and it exceeded all expectations. The personalized itinerary hit every romantic spot we hoped for!",
    author: "Emma & David",
    role: "Newlyweds",
    avatar: "https://i.pravatar.cc/100?img=3",
    location: "Santorini, Greece",
    tripType: "Honeymoon"
  },
  {
    quote: "Business travel becomes a breeze with TravelAI. I was able to balance meetings with exploration, making the most of my time in each city.",
    author: "James L.",
    role: "Business Executive",
    avatar: "https://i.pravatar.cc/100?img=4",
    location: "Tokyo, Japan",
    tripType: "Business Travel"
  },
  {
    quote: "Our group of friends had different interests and budgets. TravelAI somehow managed to create an itinerary that pleased everyone!",
    author: "Sophia R.",
    role: "Group Coordinator",
    avatar: "https://i.pravatar.cc/100?img=5",
    location: "Barcelona, Spain",
    tripType: "Friend Group"
  }
];

const companies = [
  "TravelMag", "AdventureWeek", "GlobalExplorer", "TripAdvisor", "Wanderlust"
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    })
  };

  const getTripTypeColor = (tripType: string) => {
    const colorMap: {[key: string]: string} = {
      "Family Vacation": "bg-travel-ocean",
      "Solo Adventure": "bg-travel-forest",
      "Honeymoon": "bg-travel-sunset",
      "Business Travel": "bg-travel-sand",
      "Friend Group": "bg-travel-sky",
    };
    
    return colorMap[tripType] || "bg-travel-ocean";
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-muted/30 to-white">
      <div className="container px-4 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by travelers worldwide
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Join thousands of satisfied travelers who have transformed their travel experience with TravelAI.
          </p>
        </div>
        
        <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-20 max-w-4xl mx-auto overflow-hidden">
          {/* Background decoration elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-travel-ocean/5 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-travel-sunset/5 rounded-full -ml-20 -mb-20" />
          
          {/* Featured testimonial */}
          <div className="relative flex flex-col md:flex-row gap-8 min-h-[300px]">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col md:flex-row gap-8 w-full"
              >
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full blur-xl opacity-20 ${getTripTypeColor(testimonials[activeIndex].tripType)}`} />
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>
                  <h4 className="font-bold text-xl mt-4">{testimonials[activeIndex].author}</h4>
                  <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <MapPin className="h-4 w-4 text-travel-ocean" />
                    <span className="text-sm">{testimonials[activeIndex].location}</span>
                  </div>
                  
                  <div className={`text-xs px-3 py-1 rounded-full mt-3 text-white ${getTripTypeColor(testimonials[activeIndex].tripType)}`}>
                    {testimonials[activeIndex].tripType}
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <div className="mb-6 text-travel-ocean">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 opacity-60">
                      <path d="M3 21C3 16.0294 7.02944 12 12 12C16.9706 12 21 16.0294 21 21M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-travel-ocean">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground text-xl md:text-2xl leading-relaxed italic mb-6 flex-grow">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-travel-ocean/20 hover:bg-travel-ocean/10 hover:text-travel-ocean"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-travel-ocean scale-125" 
                      : "bg-travel-ocean/30 hover:bg-travel-ocean/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-travel-ocean/20 hover:bg-travel-ocean/10 hover:text-travel-ocean"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">FEATURED IN</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            {companies.map((company, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
