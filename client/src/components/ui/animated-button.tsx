import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';
import { buttonHover } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={buttonHover.whileHover}
      whileTap={buttonHover.whileTap}
      transition={buttonHover.transition}
    >
      <Button
        className={cn(
          'transition-all duration-200',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
