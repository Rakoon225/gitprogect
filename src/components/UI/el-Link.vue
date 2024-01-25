<script>
export default {
  name: 'el-link',
  props: {
    param: {
      //размер лишки, пока что всего один - md
      type: String,
      required: false,
      default: 'md',
    },
    isActive: {
      //получаем состояние лишки - активная или неактивная
      type: Boolean,
      required: true,
      default: false,
    },
    href: {
      //этот пропс можно использовать для того, чтобы переходить на внешние ссылки
      type: String,
      required: false,
    },
  },
  computed: {
    //так как вид лишки один, то нет необходимости создавать уникальный класс
    // returnClass() {
    //   return ["element", `element-${this.param}`];
    // },
  },
};
</script>

<template>
  <a
    :href="href"
    @click="console.log(`${href}`)"
    class="element"
    :class="{ 'element--active': isActive }"
    ><slot></slot
  ></a>
  <!-- непосредственно сама лишка -->
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.element {
  //стили и аниамация лишки
  font-family: 'sfuid';
  color: v.$white;
  letter-spacing: v.em(1);
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

  &--active {
    color: v.$green2--h;
    &:active {
      color: v.$green1--a;
    }
    &::after {
      width: 50%;
      background-color: v.$green2--h;
    }
  }

  @media (min-width: v.em(576)) {
    font-size: v.rem(20);
  }
  @media (max-width: v.em(576)) {
    font-size: v.rem(17);
  }
}

//Так как лишки у нас будут редко, нет смысла придумывать для них разные варианты, оставим только один. В случае, если нам понадобиться вариант лишки поменьше, то легко добавить

// $element-sizes: (
//   "md": (
//     "font-size": 20px,
//     "font-weight": 500,
//   ),
// );

// @each $name, $sizeMap in $element-sizes {
//   .element-#{$name} {
//     @media (min-width: 576px) {
//       font-size: map-get($sizeMap, "font-size");
//       font-weight: map-get($sizeMap, "font-weight");
//     }
//     @media (max-width: 576px) {
//       font-size: calc(#{map-get($sizeMap, "font-size")} - 4px);
//       font-weight: map-get($sizeMap, "font-weight");
//     }
//   }
// }
</style>
