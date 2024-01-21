<script>
export default {
  name: "el-link",
  props: {
    param: {
      type: String,
      required: false,
      default: "md",
    },
    href: {
      type: String,
      required: false,
      default: "#",
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
  <a :href="href" :class="returnClass"><slot></slot></a>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/var' as v;

$element-sizes: (
  "md": (
    "font-size": 20px,
    "font-weight": 500,
  ),
  "sm": (
    "font-size": 17px,
    "font-weight": 400,
  ),
);

@each $name, $sizeMap in $element-sizes {
  .element-#{$name} {
    @media (min-width: 576px) {
      font-size: map-get($sizeMap, "font-size");
      font-weight: map-get($sizeMap, "font-weight");
    }
    @media (max-width: 576px) {
      font-size: calc(#{map-get($sizeMap, "font-size")} - 4px);
      font-weight: map-get($sizeMap, "font-weight");
    }
  }
}

.element {
  font-family: "sfuid";
  color: v.$green1;
  text-decoration: none;
}
</style>
