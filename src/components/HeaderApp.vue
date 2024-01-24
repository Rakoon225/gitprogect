<script>
export default {
  name: 'Header-app',
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__left">
          <el-logo class="header__title">
            <!--компонент логотипа, изменён на h2, так как может использоваться несколько раз -->
            <router-link to="/"> Logo</router-link>
          </el-logo>
        </div>
        <div class="header__right">
          <nav class="header__menu header-menu">
            <el-list
              class="header-menu__list"
              :array="this.$store.state.links" />
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;
.header {
  & {
    padding: v.em(20) 0 v.em(20) 0;
    background: v.$black1--a;
    z-index: 2; 
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: v.em(450)) {
      gap: v.em(15);
      flex-direction: column;
    }
  }
  &__right {
    > nav {
      ul {
        list-style-type: none;
        display: flex;
        gap: v.rem(20);
      }
    }
  }
}
</style>
