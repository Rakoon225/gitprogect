<script>
import { links } from '@/assets/statics/text';
export default {
  name: 'Header-app',
  data() {
    return {
      links: links,
      isFixedHeader: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.isFixedHeader = true;
      } else {
        this.isFixedHeader = false;
      }
    },
  },
};
</script>

<template>
  <header
    :class="{
      header: true,
      'header--fixed': isFixedHeader,
    }">
    <div class="container">
      <div class="header__content">
        <div class="header__left">
            <!--компонент логотипа, изменён на h2, так как может использоваться несколько раз -->
            <a href="#main">
              <el-logo class="header__title"> </el-logo>
            </a>
        </div>
        <div class="header__right">
          <nav class="header__menu header-menu">
            <el-list
              class="header-menu__list"
              :array="links" />
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
    background: v.$white;
    z-index: 2;
    transition-delay: 11200ms;
    width: 100%;
    border-bottom: 1px solid v.$grey-accent;
    transition: all 0.6s;
    position: fixed;
    opacity: 0;

    @media (max-width: v.em(576)) {
      padding: v.em(5) 0 v.em(13) 0;
    }
  }
  &--fixed {
    opacity: 100%;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: v.em(576)) {
      gap: v.em(0);
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
