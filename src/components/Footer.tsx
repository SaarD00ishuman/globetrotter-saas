
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-travel-ocean" />
              <span className="font-bold text-xl">TravelAI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              TravelAI uses cutting-edge artificial intelligence to transform how you plan, experience, and remember your travels.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-travel-ocean">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.917 4.917 0 0 0 4.598 3.415 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 14.004-7.5 14.004-14.001 0-.213-.005-.426-.015-.637A9.935 9.935 0 0 0 24 4.557z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-travel-ocean">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.058 1.805.249 2.228.415.562.217.96.477 1.382.9.419.419.679.819.9 1.382.164.424.358 1.059.415 2.229.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.058 1.17-.25 1.805-.415 2.229-.22.563-.48.96-.9 1.382-.42.419-.82.679-1.382.9-.424.164-1.059.358-2.229.415-1.265.058-1.645.07-4.849.07-3.205 0-3.584-.012-4.849-.07-1.17-.058-1.805-.25-2.228-.415a3.891 3.891 0 0 1-1.382-.9c-.42-.419-.68-.82-.9-1.382-.164-.424-.358-1.059-.415-2.228-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.849.057-1.17.25-1.805.415-2.228a3.894 3.894 0 0 1 .9-1.382c.419-.42.819-.68 1.382-.9.424-.164 1.059-.358 2.228-.415 1.266-.057 1.645-.07 4.85-.07zm0 2.163c-3.153 0-3.503.01-4.759.069-.8.036-1.307.17-1.61.29a2.22 2.22 0 0 0-.85.546 2.223 2.223 0 0 0-.547.85c-.119.303-.254.81-.29 1.61-.059 1.256-.069 1.606-.069 4.759 0 3.153.01 3.503.069 4.759.036.8.17 1.307.29 1.61.151.312.322.553.547.85.277.226.518.396.85.547.303.119.81.254 1.61.29 1.256.059 1.606.069 4.759.069 3.153 0 3.503-.01 4.759-.069.8-.036 1.307-.17 1.61-.29a2.221 2.221 0 0 0 .85-.547c.226-.277.396-.518.547-.85.119-.303.254-.81.29-1.61.059-1.256.069-1.606.069-4.759 0-3.153-.01-3.503-.069-4.759-.036-.8-.17-1.307-.29-1.61a2.22 2.22 0 0 0-.547-.85 2.22 2.22 0 0 0-.85-.547c-.303-.119-.81-.254-1.61-.29-1.256-.059-1.606-.069-4.759-.069zm0 3.677a5.997 5.997 0 1 1 0 11.994 5.997 5.997 0 0 1 0-11.994zm0 9.9a3.903 3.903 0 1 0 0-7.806 3.903 3.903 0 0 0 0 7.806zm7.65-10.15a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-travel-ocean">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-travel-ocean">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-ocean transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} TravelAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-travel-ocean transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-travel-ocean transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-travel-ocean transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
