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

    @media (min-width: 768px) {
      height: 80vh;
    }
    @media (max-width: 768px) {
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
      font-size: 25px;
      font-weight: 500;
    }
    &_sub-title {
      font-size: 14px;
      font-weight: 100;
    }
  }
}
</style>
