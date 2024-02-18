<script>
export default {
  name: "el-logo",
};
</script>

<template>
  <div class="logo">
    <span>Ракунс</span>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.logo {
  display: flex;
  align-items: center;

  font-family: "sfuid";
  font-weight: 700;
  color: v.$main-black;

  @media (min-width: v.em(576)) {
    font-size: v.rem(24);
  }
  @media (max-width: v.em(576)) {
    font-size: v.rem(25);
  }

  &:after {
    content: ''; 
    display: inline-block; 
    background: url('@/assets/image/logo/racoon-logo.svg') no-repeat center/contain; 
    width: 50px;
    height: 50px; 
    margin-left: 10px; 
  }
}
</style>
