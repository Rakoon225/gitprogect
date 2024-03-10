import { ref } from 'vue';

export default function usePercentScroll() {
  const percent = ref(0);

  const getPercent = () => {
    const actualScrollPercentage = window.scrollY;
    const fullScrollPercentage =
      document.body.scrollHeight - window.innerHeight;
    const newPercent = Math.round(
      (actualScrollPercentage / fullScrollPercentage) * 100
    );
    percent.value = newPercent;
  };

  onMounted(() =>
    window.addEventListener('scroll', getPercent)
  );

  onBeforeUnmount(() =>
    window.removeEventListener('scroll', getPercent)
  );

  return { percent };
}
