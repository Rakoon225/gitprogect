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
  padding: 0px 15px;

  @media (max-width: v.em(768)) {
    width: 100%;
  }
  @media (min-width: v.em(768)) {
    max-width: v.rem(1230px);
  }
}
</style>
