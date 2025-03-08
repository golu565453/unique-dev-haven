
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="py-12 px-6 md:px-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold font-display mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Creating exceptional digital experiences with a focus on clean code and intuitive design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h4 className="text-sm font-medium mb-4">Navigate</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm font-medium mb-4">Get in Touch</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@example.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@example.com</a></li>
                <li><a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+1 (234) 567-890</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-foreground/5 hover:bg-accent/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
