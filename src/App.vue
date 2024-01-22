<script>
import { RouterView } from 'vue-router';
import '@/assets/styles/styles.scss';

import HeaderApp from './components/HeaderApp.vue';

export default {
  components: { RouterView, HeaderApp },
  name: 'app',
};
</script>

<template>
  <header-app />
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">

</style>
