import {
  slideMotion,
  slideTextMotion,
} from '@/animations/motion';

import { useMotion } from '@vueuse/motion';

export const useSlideIn = (target, direction, delay) => {
  const options = slideMotion(direction, delay);
  useMotion(target, options);
};
export const useSpec = (target, direction, delay) => {
  // const options = slideMotion(direction, delay);
  // useMotion(target, options);
};
export const useSlideText = (target, delay) => {
  const options = slideTextMotion(delay);
  useMotion(target, options);
};
