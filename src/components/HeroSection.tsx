
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Map, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border px-5 py-2 text-sm font-medium bg-white/50 backdrop-blur-sm shadow-sm">
              <span className="flex items-center gap-2">
                <span className="text-travel-ocean text-lg">✨</span> 
                <span className="font-medium tracking-wide">AI-powered travel planning</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight md:leading-tight">
              <span className="block">Travel smarter with</span>
              <span className="text-gradient font-extrabold">your AI companion</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[640px] mx-auto lg:mx-0 leading-relaxed">
              Plan, organize, and enjoy your trips with intelligent recommendations, 
              real-time updates, and personalized itineraries tailored just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-travel-ocean hover:bg-travel-ocean/90 text-white h-14 px-8 rounded-full text-md shadow-md hover:shadow-lg transition-all">
                Start Planning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-md border-travel-ocean/30 text-travel-ocean hover:bg-travel-ocean/5">
                See How It Works
              </Button>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="bg-travel-ocean/10 p-2.5 rounded-full">
                  <Calendar className="h-5 w-5 text-travel-ocean" />
                </div>
                <span className="text-sm font-medium">Smart Scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-travel-forest/10 p-2.5 rounded-full">
                  <Map className="h-5 w-5 text-travel-forest" />
                </div>
                <span className="text-sm font-medium">Personalized Recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-travel-sunset/10 p-2.5 rounded-full">
                  <Users className="h-5 w-5 text-travel-sunset" />
                </div>
                <span className="text-sm font-medium">Collaborative Planning</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative lg:ml-8 mt-12 lg:mt-0">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border animate-float max-w-md mx-auto lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Travel destination" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-7 text-white">
                  <h3 className="text-2xl font-bold">Mountain Retreat</h3>
                  <p className="text-sm opacity-90 mt-1">AI suggested based on your preferences</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4 animate-pulse-soft border">
              <div className="flex items-center gap-3">
                <div className="bg-travel-ocean/20 p-2.5 rounded-full">
                  <ArrowRight className="h-5 w-5 text-travel-ocean rotate-45" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Price Alert</p>
                  <p className="text-xs text-muted-foreground">Flights are 23% cheaper now</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 animate-pulse-soft border">
              <div className="flex items-center gap-3">
                <div className="bg-travel-forest/20 p-2.5 rounded-full">
                  <Calendar className="h-5 w-5 text-travel-forest" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Weather forecast</p>
                  <p className="text-xs text-muted-foreground">Perfect conditions for your dates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
