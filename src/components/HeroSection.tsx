
import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar, Map, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 space-y-8 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white/50 backdrop-blur-sm">
              <span className="flex items-center gap-1">
                <span className="text-travel-ocean">✨</span> AI-powered travel planning
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Travel smarter with your AI companion
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto lg:mx-0">
              Plan, organize, and enjoy your trips with intelligent recommendations, real-time updates, and personalized itineraries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-travel-ocean hover:bg-travel-ocean/90 text-white h-12 px-8">
                Start Planning Free
              </Button>
              <Button variant="outline" className="h-12 px-8">
                See How It Works
              </Button>
            </div>
            
            <div className="pt-6 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-travel-ocean" />
                <span className="text-sm">Smart Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <Map className="h-5 w-5 text-travel-forest" />
                <span className="text-sm">Personalized Recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-travel-sunset" />
                <span className="text-sm">Collaborative Planning</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border animate-float">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Travel destination" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Mountain Retreat</h3>
                  <p className="text-sm opacity-90">AI suggested based on your preferences</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-pulse-soft border">
              <div className="flex items-center gap-3">
                <div className="bg-travel-ocean/20 p-2 rounded-full">
                  <ArrowUp className="h-5 w-5 text-travel-ocean" />
                </div>
                <div>
                  <p className="text-sm font-medium">Price Alert</p>
                  <p className="text-xs text-muted-foreground">Flights are 23% cheaper now</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 animate-pulse-soft border">
              <div className="flex items-center gap-3">
                <div className="bg-travel-forest/20 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-travel-forest" />
                </div>
                <div>
                  <p className="text-sm font-medium">Weather forecast</p>
                  <p className="text-xs text-muted-foreground">Perfect conditions for your dates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
