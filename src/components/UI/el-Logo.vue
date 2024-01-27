<script>
export default {
  name: 'el-logo',
};
</script>

<template>
  <h2 class="element"><slot></slot></h2>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.element {
  font-family: 'sfuid';
  font-weight: 700;
  color: v.$main-black;

  @media (min-width: 576px) {
    font-size: v.rem(28);
  }
  @media (max-width: 576px) {
    font-size: v.rem(25);
  }
}
</style>
