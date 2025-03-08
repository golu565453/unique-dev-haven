
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ButtonCustom } from "@/components/ui/button-custom";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="order-2 lg:order-1 flex flex-col space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-4">
                  Full-Stack Developer
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              >
                Creating digital <span className="text-gradient">experiences</span> with precision
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-xl leading-relaxed mt-4"
              >
                I design and build applications with a focus on simplicity, 
                usability, and performance. Every line of code is crafted 
                with attention to detail.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ButtonCustom size="lg">
                View Projects
              </ButtonCustom>
              <ButtonCustom variant="outline" size="lg">
                Contact Me
              </ButtonCustom>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 aspect-square relative"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary border border-accent/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm font-medium text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
