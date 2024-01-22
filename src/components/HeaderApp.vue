<script>
export default {
  name: 'Header-app',
  data() {
    return {
      list: [
        {
          name: 'Главная',
          to: 'main',
        },
        {
          name: 'Контакты',
          to: 'contacts',
        },
        {
          name: 'Услуги',
          to: 'services',
        },
      ],
      active: 0,
    };
  },
  methods: {
    changeActive(index) {
      this.active = index;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__left">
          <h1 class="header__title">
            <a href="/"> Logo</a>
          </h1>
        </div>
        <div class="header__right">
          <nav class="header__menu header-menu">
            <ul class="header-menu__list">
              <li
                @click="changeActive(index)"
                class="header-menu__item"
                :class="{
                  'header-menu__item--active':
                    index == active,
                }"
                v-for="(item, index) in list">
                <router-link :to="`#${item.to}`">{{
                  item.name
                }}</router-link>
              </li>
            </ul>
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
    background: v.$black2--a;
    color: v.$white;
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
  &__left {
    h1 {
      font-size: v.rem(30);
    }
  }
  &__right {
    > nav {
      ul {
        list-style-type: none;
        display: flex;
        gap: v.rem(20);
        letter-spacing: v.em(1);
        font-size: v.rem(20);
        li {
          a {
            position: relative;
            &::after {
              content: '';
              transition: width 0.5s;
              background-color: v.$white;
              position: absolute;
              top: v.em(25, 20);
              left: 0px;
              width: 0%;
              height: 1px;
            }
            &:hover::after {
              width: 100%;
            }
          }
          &.header-menu__item--active {
            color: v.$green2--h;
            a {
              &::after {
                width: 50%;
                background-color: v.$green2--h;
              }
            }
          }
        }
      }
    }
  }
}
</style>
