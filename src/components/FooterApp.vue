<script>
export default {
  name: 'Footer-app',
};
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <nav class="footer__menu footer-menu">
        <el-list
          class="footer-menu__list"
          :array="this.$store.state.links" />
        <!-- компонент листа -->
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.footer {
  display: flex;
  justify-content: center;
  align-items: start;
  padding: v.em(30) 0 v.em(70);
  background: v.$black1--a; //изменил переменную, на мой взгляд, этот цвет подходит лучше

  &-menu__list {
    list-style-type: none;
    display: flex;
    gap: v.rem(20);
  }
}
</style>
