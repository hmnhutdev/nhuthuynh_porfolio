import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Crafting digital solutions with passion and precision
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation={fadeInLeft}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Alex Chen - Full Stack Developer"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </ScrollReveal>

            <ScrollReveal animation={fadeInRight}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Passionate Full Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  With over 5 years of experience in web development, I
                  specialize in creating scalable, performant applications using
                  modern technologies. My journey started with a curiosity for
                  how things work, and it's evolved into a passion for building
                  exceptional user experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest industry trends. When I'm not
                  coding, you'll find me contributing to open source projects or
                  exploring new technologies.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-portfolio-primary dark:text-blue-400 mb-2">
                      50+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Projects Completed
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-portfolio-primary dark:text-blue-400 mb-2">
                      5+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Years Experience
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
