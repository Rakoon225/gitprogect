<script setup>
import usePercentScroll from '@/hooks/usePercentScroll';

const percent = usePercentScroll();
</script>
<template>
  <div class="percent-bar">
    <div
      :style="`width: ${percent}%`"
      class="percent-bar__inner">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;
.percent-bar {
  height: v.$white;
}
</style>
