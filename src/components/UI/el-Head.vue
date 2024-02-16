<script>
export default {
  name: 'el-head',
  props: {
    list: {
      type: Object,
      required: true,
      default: [],
    },
  },
};
</script>

<template>
  <div class="title">
    <h2 class="title__main">{{ list.main }}</h2>
    <h3 class="title__sub">{{ list.sub }}</h3>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;
.title {
  //! Вынес стили тайтла в компонент
  // ServicesBlock, потому что у блока
  // нельзя задавать отступы,
  // влияющие на соседние блоки

  color: v.$main-black;
  &__main {
    font-weight: 500;
    line-height: 1;
    font-size: v.rem(40);
    font-weight: 500;
    @media (max-width: v.em(320)) {
      line-height: 0.7;
      margin-bottom: v.em(5);
    }
  }
  &__sub {
    font-size: v.rem(15);
    letter-spacing: v.em(1.5, 15);
  }
}
</style>
