import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Skills() {
  const frontendSkills = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "TypeScript", icon: "📘", color: "text-yellow-500" },
    { name: "Vue.js", icon: "💚", color: "text-green-500" },
    { name: "HTML5", icon: "🌐", color: "text-orange-500" },
    { name: "CSS3", icon: "🎨", color: "text-blue-600" },
    { name: "Sass", icon: "💄", color: "text-pink-500" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "MongoDB", icon: "🍃", color: "text-blue-700" },
    { name: "Express", icon: "⚡", color: "text-gray-700" },
    { name: "PostgreSQL", icon: "🐘", color: "text-orange-600" },
    { name: "Python", icon: "🐍", color: "text-blue-500" },
    { name: "Docker", icon: "🐳", color: "text-blue-600" },
  ];

  const toolsSkills = [
    { name: "Git", icon: "📂", color: "text-orange-600" },
    { name: "GitHub", icon: "🐙", color: "text-gray-800" },
    { name: "Figma", icon: "🎨", color: "text-purple-600" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "VS Code", icon: "💻", color: "text-blue-600" },
    { name: "Webpack", icon: "📦", color: "text-gray-600" },
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      variants={staggerItem}
      className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      custom={index}
    >
      <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
      <h4 className="font-semibold text-gray-900 dark:text-white">
        {skill.name}
      </h4>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-20 bg-portfolio-neutral-light dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tools and technologies I work with
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <ScrollReveal className="mb-12" delay={0.2}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frontend Development
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Backend Skills */}
          <ScrollReveal className="mb-12" delay={0.4}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Backend Development
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Tools & Others */}
          <ScrollReveal delay={0.6}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Tools & Others
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {toolsSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
