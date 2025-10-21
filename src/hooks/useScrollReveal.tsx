import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  easing?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0,
    duration = 600,
    easing = 'easeOutCubic',
    direction = 'up',
    distance = 30,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setIsVisible(true);
          setHasAnimated(true);

          // Create subtle animation
          const animationConfig: any = {
            targets: element,
            duration,
            easing,
            delay,
            opacity: [0, 1],
          };

          // Add direction-based transforms
          switch (direction) {
            case 'up':
              animationConfig.translateY = [distance, 0];
              break;
            case 'down':
              animationConfig.translateY = [-distance, 0];
              break;
            case 'left':
              animationConfig.translateX = [distance, 0];
              break;
            case 'right':
              animationConfig.translateX = [-distance, 0];
              break;
            case 'fade':
              // Only opacity animation
              break;
          }

          anime(animationConfig);
        } else if (!entry.isIntersecting && !triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, duration, easing, direction, distance, hasAnimated]);

  return { elementRef, isVisible };
};
