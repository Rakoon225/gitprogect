<script setup>
import { ref, onMounted } from 'vue';
import { useSlideIn } from '@/hooks/useSlideMotion.js';
const targetText = ref();
const targetImg = ref();
onMounted(() => {
  useSlideIn(targetText, 'right', 200);
  useSlideIn(targetImg, 'left', 500);
});
</script>

<template>
  <section class="first" id="main">
    <div class="first__container container">
      <div class="first__left" ref="targetText">
        <div class="first__text">
          <h1 class="first__title">Создание веб-сайтов</h1>
          <p class="first__description"
            >В нашей дружной команде создаются красивые
            сайты и макеты, которые отличаются качеством и
            удобством использования</p
          >
        </div>
        <el-button
          :param="'lg'"
          class="first__button"
          :to="'services'"
          >Услуги</el-button
        >
      </div>
      <img
        ref="targetImg"
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
    height: 70dvh;
    padding: 50px 0 50px 0;
    border-bottom: 1px solid v.$grey-accent;
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
    @media (max-width: v.em(768)) {
      margin: auto;
      text-align: center;
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
    color: v.$main-black;
    font-weight: 600;

    @media (min-width: v.em(576)) {
      font-size: v.rem(50);
    }
    @media (max-width: v.em(576)) {
      font-size: v.rem(40);
    }
  }

  &__description {
    color: v.$grey;
    font-weight: 300;

    @media (min-width: v.em(576)) {
      font-size: v.rem(24);
      max-width: v.em(350);
      margin-top: v.rem(11);
    }
    @media (max-width: v.em(576)) {
      font-size: v.rem(20);
      margin-top: v.rem(12);
    }
  }

  &__img {
    position: absolute;
    right: 0;
    z-index: 0;
    border-radius: 8px;
    @media (min-width: v.em(576)) {
      align-self: center;
      width: 40%;
    }
    @media (max-width: v.em(576)) {
      align-self: flex-end;
      width: 80%;
    }
    @media (max-width: v.em(768)) {
      display: none;
    }
  }
}
</style>
