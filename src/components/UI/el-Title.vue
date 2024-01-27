<script>
export default {
  name: 'el-title',
  props: {
    param: {
      type: String,
      required: false,
      default: 'just',
    },
  },
  computed: {
    returnClass() {
      return ['element', `element-${this.param}`];
    },
  },
};
</script>

<template>
  <span :class="returnClass"><slot></slot></span>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

$element-sizes: (
  'main': (
    'font-size': 37px,
    'font-weight': 400,
    'display': block,
  ),
  'just': (
    'font-size': 20px,
    'font-weight': 400,
  ),
);

@each $name, $sizeMap in $element-sizes {
  .element-#{$name} {
    display: map-get($sizeMap, 'display');

    @media (min-width: 576px) {
      font-size: map-get($sizeMap, 'font-size');
      font-weight: map-get($sizeMap, 'font-weight');
    }
    @media (max-width: 576px) {
      font-size: calc(
        #{map-get($sizeMap, 'font-size')} - 4px
      );
      font-weight: map-get($sizeMap, 'font-weight');
    }
  }
}

.element {
  color: v.$main-black;
}
</style>
