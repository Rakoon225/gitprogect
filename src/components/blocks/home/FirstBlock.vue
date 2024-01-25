<script>
export default {
  name: 'FirstBlock',
};
</script>

<template>
  <section class="first" id="main">
    <div class="first__container container">
      <div class="first__left">
        <div class="first__text">
          <h1 class="first__title">Создание веб-сайтов</h1>
          <p class="first__description"
            >профессиональная разработка и дизайн</p
          >
        </div>
        <el-button class="first__button" :to="'services'"
          >Услуги</el-button
        >
      </div>
      <img
        src="@/assets/image/first/pngwing.com.png"
        alt="image"
        class="first__img" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.first {
  & {
    background-color: v.$green1--h;
    height: 70dvh;
    padding: 50px 0;
  }

  &__container {
    display: flex;

    position: relative;
    height: 100%;
  }

  &__left {
    position: relative;
    z-index: 1;

    @media (min-width: v.em(576)) {
      align-self: center;
    }
    @media (max-width: v.em(576)) {
      align-self: start;
    }
  }

  &__text {
    margin-bottom: v.em(20);
    @media (min-width: v.em(576)) {
      line-height: 1.1;
    }
    @media (max-width: v.em(576)) {
      line-height: 0.9;
    }
  }

  &__title {
    color: v.$green2;
    font-weight: 500;

    @media (min-width: v.em(576)) {
      font-size: v.rem(50);
    }
    @media (max-width: v.em(576)) {
      font-size: v.rem(40);
    }
  }

  &__description {
    color: v.$green2--a;
    font-weight: 300;

    @media (min-width: v.em(576)) {
      font-size: v.rem(24);
    }
    @media (max-width: v.em(576)) {
      font-size: v.rem(20);
      margin-top: 8px;
    }
  }

  &__img {
    position: absolute;
    right: 0;
    z-index: 0;

    @media (min-width: v.em(576)) {
      align-self: center;
      width: 40%;
    }
    @media (max-width: v.em(576)) {
      align-self: flex-end;
      width: 80%;
    }
  }
}
</style>
