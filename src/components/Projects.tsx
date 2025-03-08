
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ButtonCustom } from "@/components/ui/button-custom";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A fully-featured online shopping platform with cart, checkout, and payment integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "TypeScript", "Firebase", "Material UI"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking financial data with charts and analytics.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Vue.js", "D3.js", "Express", "MySQL"],
    liveLink: "#",
    repoLink: "#"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of my recent work showcasing my skills and experience in building web applications.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group h-full rounded-2xl overflow-hidden bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <ButtonCustom 
                      variant="ghost" 
                      size="sm" 
                      className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                    >
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </ButtonCustom>
                    <ButtonCustom 
                      variant="ghost" 
                      size="sm" 
                      className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                    >
                      <Github className="h-4 w-4" />
                    </ButtonCustom>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-accent group/link"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <ButtonCustom size="lg">
            View All Projects
          </ButtonCustom>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
