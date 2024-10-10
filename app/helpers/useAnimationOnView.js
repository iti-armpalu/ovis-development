import { useInView } from 'react-intersection-observer';

export const useAnimateOnView = (delay, options = {}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: delay,
    ...options,
  });

  return { ref, inView };
};
