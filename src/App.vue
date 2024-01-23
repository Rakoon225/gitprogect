<script>
import { RouterView } from "vue-router";
import "@/assets/styles/styles.scss";

import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  components: { RouterView, HeaderApp, FooterApp },
  name: "app",
};
</script>

<template>
  <div class="wrapper">
    <header-app />
    <main>
      <router-view></router-view>
    </main>
    <footer-app></footer-app>
  </div>
</template>

<style lang="scss"></style>
