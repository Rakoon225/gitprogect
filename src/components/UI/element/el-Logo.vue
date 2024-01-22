<script>
export default {
  name: "el-logo",
};
</script>

<template>
  <h2 class="element"><slot></slot></h2>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;


.element {
  font-family: "sfuid";
  font-weight: 500;
  color: v.$white;

  &:hover{
    color: v.$green2--h;
  }

  @media(min-width: 576px){
    font-size: v.rem(28);
  }
  @media(max-width: 576px){
    font-size: v.rem(25);
  }
}
</style>
