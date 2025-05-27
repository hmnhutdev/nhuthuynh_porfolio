import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeInUp } from '@/lib/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: any;
}

export function ScrollReveal({ children, className, delay = 0, animation = fadeInUp }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={isVisible ? animation.animate : animation.initial}
      transition={{ ...animation.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
