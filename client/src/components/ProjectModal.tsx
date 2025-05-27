import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { modalAnimation, overlayAnimation } from '@/lib/animations';
import { Project } from '@/components/Projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div 
          className="modal-backdrop absolute inset-0 bg-black/50"
          variants={overlayAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div 
          className="relative z-10 bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          variants={modalAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white/90 rounded-full z-10"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.longDescription}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-portfolio-primary text-white hover:bg-blue-600">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Demo
                  </Button>
                </motion.a>
                
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-gray-400">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
