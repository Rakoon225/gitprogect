<script>
export default {
  name: "el-button",
  props: {
    param: {
      type: String,
      required: false,
      default: "md",
    },
  },
  computed: {
    returnClass() {
      return ["element", `element-${this.param}`];
    },
  },
};
</script>

<template>
  <button :class="returnClass"><slot></slot></button>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/var' as v;

$element-sizes: (
  "lg": (
    "padding-y": 4px,
    "padding-x": 55px,
    "font-size": 25px,
    "font-weight": 500,
  ),
  "md": (
    "padding-y": 3px,
    "padding-x": 40px,
    "font-size": 22px,
    "font-weight": 400,
  ),
  "sm": (
    "padding-y": 2px,
    "padding-x": 20px,
    "font-size": 20px,
    "font-weight": 300,
  ),
);

@each $name, $sizeMap in $element-sizes {
  .element-#{$name} {
    @media (min-width: 576px) {
      padding: map-get($sizeMap, "padding-y") map-get($sizeMap, "padding-x");
      font-size: map-get($sizeMap, "font-size");
      font-weight: map-get($sizeMap, "font-weight");
    }
    @media (max-width: 576px) {
      padding: map-get($sizeMap, "padding-y") calc(#{map-get($sizeMap, "padding-x")} / 1.5);
      font-size: calc(#{map-get($sizeMap, "font-size")} - 6px);
    }
  }
}

.element {
  background-color: v.$green2;

  border: 1px solid v.$green1;
  border-radius: 2px;

  font-family: "sfuid";
  color: v.$green1;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: v.$green1--h;
    color: v.$green2;
  }
  &:active {
    background-color: v.$green1--a;
  }
}
</style>
