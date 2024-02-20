import { ref } from 'vue';

export const slideMotion = (direction, delay) =>
  ref({
    initial: {
      x:
        direction === 'left'
          ? 100
          : direction === 'right'
          ? -100
          : 0,
      y:
        direction === 'up'
          ? 100
          : direction === 'down'
          ? -100
          : 0,
      opacity: 0,
    },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: delay,
      },
    },
  });

export const slideTextMotion = (delay) =>
  ref({
    initial: {
      y: -50,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: delay,
      },
    },
  });
