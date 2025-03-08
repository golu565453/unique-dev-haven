
import { motion } from "framer-motion";
import { Code, Layers, Zap, Briefcase, GraduationCap, Users } from "lucide-react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "UI/UX Design", level: 70 },
  { name: "Python", level: 65 },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp",
    period: "2021 - Present",
    description: "Leading the frontend development team, implementing modern web technologies and improving user experience."
  },
  {
    title: "Web Developer",
    company: "Digital Solutions Inc.",
    period: "2019 - 2021",
    description: "Developed responsive websites and web applications for various clients using React and Node.js."
  },
  {
    title: "Junior Developer",
    company: "Startup Innovations",
    period: "2017 - 2019",
    description: "Collaborated in agile development environment, focusing on implementing UI components and integration."
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
            I'm a passionate developer with a keen eye for design and a dedication to creating exceptional digital experiences.
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
              With over 7 years of experience in web development, I've cultivated a diverse skill set that spans frontend and backend technologies. My approach integrates clean code architecture with intuitive design principles, ensuring that the applications I build are both powerful and user-friendly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying at the forefront of technological advancements. Each project is an opportunity to refine my craft and explore new possibilities in creating seamless digital experiences.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
                <Code className="text-accent mb-2" size={24} />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
                <Layers className="text-accent mb-2" size={24} />
                <span className="text-sm font-medium">Architecture</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
                <Zap className="text-accent mb-2" size={24} />
                <span className="text-sm font-medium">Performance</span>
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
                        className="h-full bg-accent rounded-full"
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
                  <div className="p-2 rounded-md bg-accent/10">
                    <Briefcase className="text-accent h-5 w-5" />
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
