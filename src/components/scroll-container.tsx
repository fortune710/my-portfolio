
"use client"
import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom' 
  | 'none';

interface ScrollAnimationProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string
}

const animations = {
  'fade-up': {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  },
  'fade-down': {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 }
  },
  'fade-left': {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 }
  },
  'fade-right': {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }
  },
  'zoom': {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.95 }
  },
  'none': {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }
};

const ScrollAnimation = ({ 
  animation = 'fade-up',
  duration = 0.5,
  delay = 0,
  once = true,
  children,
  className,
  ...props
}: ScrollAnimationProps) => {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export type { ScrollAnimationProps, AnimationType };
export default ScrollAnimation;