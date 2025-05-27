import { motion } from 'framer-motion';
import { Download, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, buttonHover, buttonTap, typingCursor } from '@/lib/animations';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-4xl text-blue-500 opacity-20"
      >
        ⚛️
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-10 text-4xl text-yellow-500 opacity-20"
      >
        📝
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: 360
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 text-4xl text-green-500 opacity-20"
      >
        ⚙️
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm <span className="text-primary">Alex</span>
          </motion.h1>
          
          <motion.div
            variants={fadeInUp}
            className="text-2xl md:text-4xl text-gray-600 mb-8 font-light font-mono"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.span>
            <motion.span
              variants={typingCursor}
              animate="visible"
              className="inline-block w-0.5 h-8 bg-primary ml-1"
            />
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I create exceptional digital experiences through clean code and thoughtful design. 
            Passionate about React, TypeScript, and modern web technologies.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="bg-primary hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <Rocket className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
