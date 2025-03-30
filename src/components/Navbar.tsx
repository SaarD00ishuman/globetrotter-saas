
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="py-4 border-b backdrop-blur-sm bg-white/70 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-travel-ocean" />
          <span className="font-bold text-xl">TravelAI</span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-sm font-medium hover:text-travel-ocean transition-colors">Features</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-travel-ocean transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium hover:text-travel-ocean transition-colors">Pricing</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm" className="bg-travel-ocean hover:bg-travel-ocean/90">Sign Up Free</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
