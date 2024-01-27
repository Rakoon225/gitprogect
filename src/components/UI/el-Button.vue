<script>
export default {
  name: 'el-button',
  props: {
    param: {
      type: String,
      required: false,
      default: 'md',
    },
    to: String,
  },
  computed: {
    returnClass() {
      return ['button', `button-${this.param}`];
    },
  },
};
</script>

<template>
  <a :class="returnClass" :href="`#${to}`"><slot></slot></a>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

$element-sizes: (
  'lg': (
    'padding-y': 4px,
    'padding-x': 55px,
    'font-size': 25px,
    'font-weight': 500,
  ),
  'md': (
    'padding-y': 3px,
    'padding-x': 40px,
    'font-size': 23px,
    'font-weight': 400,
  ),
  'sm': (
    'padding-y': 2px,
    'padding-x': 20px,
    'font-size': 20px,
    'font-weight': 300,
  ),
);

@each $name, $sizeMap in $element-sizes {
  .button-#{$name} {
    @media (min-width: 576px) {
      padding: map-get($sizeMap, 'padding-y')
        map-get($sizeMap, 'padding-x');
      font-size: map-get($sizeMap, 'font-size');
      font-weight: map-get($sizeMap, 'font-weight');
    }
    @media (max-width: 576px) {
      padding: map-get($sizeMap, 'padding-y')
        calc(#{map-get($sizeMap, 'padding-x')} / 1.5);
      font-size: calc(
        #{map-get($sizeMap, 'font-size')} - 6px
      );
    }
  }
}

.button {
  background-color: v.$main-black;

  border-radius: 3px;

  color: v.$white;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: v.$blue-accent;
  }
  &:active {
    background-color: v.$blue-accent;
  }
}
</style>
