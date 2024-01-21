<script>
export default {
  name: "el-block",
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
  <article :class="returnClass"><slot></slot></article>
</template>

<style lang="scss" scoped>

$margin-sizes: (
  "lg": 40px,
  "md": 30px,
  "sm": 20px,
  "none": 0
);

@each $name, $size in $margin-sizes {
  .element-#{$name} {
    @media (min-width: 576px) {
        margin-top: $size;
    }
    @media (max-width: 576px) {
        margin-top: calc(#{$size} - 10px);
    }
  }
}
</style>
