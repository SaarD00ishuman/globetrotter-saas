
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-travel-ocean/10 mb-6">
              <MapPin className="h-8 w-8 text-travel-ocean" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your travel experience?
            </h2>
            
            <p className="text-muted-foreground max-w-[600px] mb-8">
              Join thousands of travelers who are already using TravelAI to plan smarter, discover more, and create unforgettable memories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-travel-ocean hover:bg-travel-ocean/90 text-white px-8">
                Get Started for Free
              </Button>
              <Button variant="outline" className="px-8">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
