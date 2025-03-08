
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import and initialize framer-motion
import { LazyMotion, domAnimation } from "framer-motion";

const Index = () => {
  const controls = useAnimation();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".section-reveal").forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll(".section-reveal").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar />
        
        <main>
          <Hero />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="section-reveal"
          >
            <About />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="section-reveal"
          >
            <Projects />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="section-reveal"
          >
            <Contact />
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default Index;
