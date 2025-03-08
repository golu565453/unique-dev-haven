
import { motion } from "framer-motion";
import { Code, Database, Server, LineChart, BarChart, Globe } from "lucide-react";

const skills = [
  { name: "Python", level: 95 },
  { name: "Django", level: 90 },
  { name: "Flask", level: 85 },
  { name: "FastAPI", level: 80 },
  { name: "Data Science", level: 85 },
  { name: "Machine Learning", level: 75 },
];

const experiences = [
  {
    title: "Lead Python Developer",
    company: "TechInnovate",
    period: "2021 - Present",
    description: "Leading backend development with Django and FastAPI, implementing efficient data processing pipelines and mentoring junior developers."
  },
  {
    title: "Python Engineer",
    company: "DataSolutions Inc.",
    period: "2019 - 2021",
    description: "Developed data processing applications and APIs using Python, Flask, and pandas for various clients in the financial sector."
  },
  {
    title: "Junior Python Developer",
    company: "Web Innovations",
    period: "2017 - 2019",
    description: "Collaborated in agile environment, focusing on web scraping, automation and building microservices with Flask."
  }
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="about" className="py-20 lg:py-32 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            My Background & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I'm a passionate Python developer with expertise in building robust backends, data analysis solutions, and machine learning applications.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 7 years of experience as a Python developer, I've mastered the art of building efficient, scalable applications across various domains. My expertise spans web development with Django and Flask, data processing with pandas and NumPy, and machine learning implementations with scikit-learn and TensorFlow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying current with the latest Python ecosystem developments. Every project is an opportunity to solve complex problems with elegant Python solutions.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
                <Code className="text-blue-400 mb-2" size={24} />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
                <Database className="text-green-400 mb-2" size={24} />
                <span className="text-sm font-medium">Data Engineering</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
                <Server className="text-purple-400 mb-2" size={24} />
                <span className="text-sm font-medium">API Development</span>
              </div>
            </div>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-card border border-border transition-all hover:shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-md bg-blue-500/10">
                    {index === 0 ? (
                      <Globe className="text-blue-400 h-5 w-5" />
                    ) : index === 1 ? (
                      <LineChart className="text-green-400 h-5 w-5" />
                    ) : (
                      <BarChart className="text-purple-400 h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    <p className="text-sm mt-3">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
