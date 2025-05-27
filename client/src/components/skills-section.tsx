import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { staggerContainer, scaleIn } from '@/lib/animations';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: '⚛️', color: 'text-blue-500' },
      { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
      { name: 'Vue.js', icon: '💚', color: 'text-green-500' },
      { name: 'HTML5', icon: '🌐', color: 'text-orange-500' },
      { name: 'CSS3', icon: '🎨', color: 'text-blue-600' },
      { name: 'Sass', icon: '💅', color: 'text-pink-500' },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: '🟢', color: 'text-green-600' },
      { name: 'MongoDB', icon: '🍃', color: 'text-green-700' },
      { name: 'Express', icon: '⚡', color: 'text-gray-700' },
      { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-700' },
      { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
      { name: 'Docker', icon: '🐳', color: 'text-blue-600' },
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: '📝', color: 'text-orange-600' },
      { name: 'GitHub', icon: '🐙', color: 'text-gray-800' },
      { name: 'Figma', icon: '🎨', color: 'text-purple-600' },
      { name: 'AWS', icon: '☁️', color: 'text-orange-500' },
      { name: 'VS Code', icon: '💙', color: 'text-blue-600' },
      { name: 'Webpack', icon: '📦', color: 'text-blue-500' },
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">Tools and technologies I work with</p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={scaleIn}
                    custom={index}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer group hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`text-4xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
