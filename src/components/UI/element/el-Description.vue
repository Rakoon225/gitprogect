<script>
export default {
  name: "el-description",
  props: {
    param: {
      type: String,
      require: false,
      default: "none",
    },
  }
};
</script>

<template>
  <p :class="`element`"><slot></slot></p>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;


.element {
  font-family: "sfuid";
  font-weight: 300;
  color: v.$green1;
  @media(min-width: 576px){
    font-size: 18px;
  }
  @media(max-width: 576px){
    font-size: 16px;
  }
}
</style>
