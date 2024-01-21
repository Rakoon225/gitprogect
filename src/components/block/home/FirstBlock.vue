<script>
export default {
  name: 'FirstBlock',
};
</script>

<template>
  <el-block class="first" :param="'none'">
    <div class="first__container container">
      <div class="first__text">
        <span class="first__text_title"
          >Кто если не мы</span
        >
        <span class="first__text_sub-title"
          >веб-студия</span
        >
      </div>
    </div>
  </el-block>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.first {
  & {
    background-color: v.$black1--a;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: v.em(768)) {
      height: 80vh;
    }
    @media (max-width: v.em(768)) {
      height: 50vh;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: v.$white;
    font-family: 'sfuid';

    &_title {
      font-size: v.rem(55);
      margin-bottom: v.em(10, 55);
      font-weight: 500;
      @media (max-width: v.em(768)) {
        font-size: v.rem(20);
      }
    }
    &_sub-title {
      font-size: v.rem(14);
      font-weight: 100;
    }
  }
}
</style>
