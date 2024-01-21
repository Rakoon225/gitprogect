<script>
import { RouterView } from 'vue-router';

export default {
  components: { RouterView },
  name: 'app',
};
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use '@/assets/styles/utils' as v;

* {
  transition: 0.2s;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background-color: v.$white;
}

.container {
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 1200px;
  }
}
</style>
