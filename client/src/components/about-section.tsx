import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { AnimatedCounter } from './animated-counter';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600">Crafting digital solutions with passion and precision</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Alex Chen - Full Stack Developer" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Full Stack Developer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                scalable, performant applications using modern technologies. My journey started 
                with a curiosity for how things work, and it's evolved into a passion for 
                building exceptional user experiences.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest industry trends. When I'm not coding, you'll find me contributing 
                to open source projects or exploring new technologies.
              </p>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <motion.div 
                  variants={fadeInLeft}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </motion.div>
                <motion.div 
                  variants={fadeInRight}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter value={5} suffix="+" />
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
