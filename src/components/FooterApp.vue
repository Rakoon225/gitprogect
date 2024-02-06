<script>
import { links } from '@/assets/statics/text';
export default {
  name: 'Footer-app',
  data() {
    return {
      links: links,
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <nav class="footer__menu footer-menu">
        <el-list class="footer-menu__list" :array="links" />
        <!-- компонент листа -->
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.footer {
  border-top: 1px solid v.$grey-accent;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: v.em(30) 0 v.em(70);
  z-index: 2;
  margin-top: v.rem(60);

  &-menu__list {
    list-style-type: none;
    display: flex;
    gap: v.rem(20);
  }
}
</style>
