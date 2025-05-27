import { motion } from "framer-motion";
import { Download, Rocket } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-neutral-light via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden"
    >
      <ThemeToggle />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-blue-500 dark:text-blue-400 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ⚛️
      </motion.div>
      <motion.div
        className="absolute top-40 right-10 text-4xl text-yellow-500 dark:text-yellow-400 opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        📱
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-4xl text-green-500 dark:text-green-400 opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        ⚙️
      </motion.div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6"
            variants={staggerItem}
          >
            Hi, I'm{" "}
            <span className="text-portfolio-primary dark:text-blue-400">
              Nhut
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-light"
            variants={staggerItem}
          >
            <span className="typing-animation font-mono">Web Developer</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            I create exceptional digital experiences through clean code and
            thoughtful design. Passionate about React, TypeScript, and modern
            web technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={staggerItem}
          >
            <AnimatedButton
              onClick={scrollToProjects}
              className="bg-portfolio-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <Rocket className="mr-2 h-5 w-5" />
              View My Work
            </AnimatedButton>

            <AnimatedButton
              variant="outline"
              className="border-2 border-portfolio-primary text-portfolio-primary dark:border-blue-400 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-portfolio-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
