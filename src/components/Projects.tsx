
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code, Database, LineChart } from "lucide-react";
import { ButtonCustom } from "@/components/ui/button-custom";

const projects = [
  {
    title: "Data Analysis Dashboard",
    description: "A comprehensive dashboard for visualizing complex datasets with interactive charts and filterable views.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Python", "Pandas", "Plotly", "Dash"],
    liveLink: "#",
    repoLink: "#",
    icon: <LineChart className="h-10 w-10 text-blue-400" />
  },
  {
    title: "E-commerce API",
    description: "A high-performance RESTful API for e-commerce applications with authentication and payment processing.",
    image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b",
    tags: ["Django", "DRF", "PostgreSQL", "Docker"],
    liveLink: "#",
    repoLink: "#",
    icon: <Code className="h-10 w-10 text-green-400" />
  },
  {
    title: "Machine Learning Pipeline",
    description: "An automated pipeline for data preprocessing, model training, evaluation and deployment.",
    image: "https://images.unsplash.com/photo-1456428746267-a1756408f782",
    tags: ["Python", "scikit-learn", "TensorFlow", "MLflow"],
    liveLink: "#",
    repoLink: "#",
    icon: <Database className="h-10 w-10 text-purple-400" />
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
            Python Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of my recent Python development work showcasing my skills in web development, data science, and machine learning.
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <ButtonCustom 
                    variant="ghost" 
                    size="sm" 
                    className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                  >
                    Demo
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
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-blue-500 group/link"
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
