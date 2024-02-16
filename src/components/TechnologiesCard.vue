<script setup>
import VanillaTilt from 'vanilla-tilt';

import { onMounted, ref } from 'vue';
const element = ref(null);

onMounted(() => {
  VanillaTilt.init(element.value, {
    max: 10,
    speed: 200,
  });
});

defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="card" ref="element">
    <div
      :style="{
        background: card.gradient,
      }"
      class="card__inner">
      <div class="card__content">
        <div class="card__image-group">
          <img
            :src="
              require(`@/assets/image/technologies/${card.name}.png`)
            "
            alt="icon" />
        </div>
      </div>
      <div class="card__text card-text">
        <h2 class="card-text__title">{{ card.name }}</h2>
        <p class="card-text__description">
          {{ card.text }}</p
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;
.card {
  font: {
    size: v.rem(16);
  }
  width: 100%;
  border-radius: 20px;
  padding: 1px;
  min-height: 200px;
  &__inner {
    display: flex;
    width: 100%;
    gap: v.rem(30);
    border-radius: 20px;
    padding: v.em(20) v.em(16);
    flex-direction: row;
    @media (min-width: v.em(576)) {
      padding-left: v.em(48);
      padding-right: v.em(48);
    }
  }
  &__content {
    margin: 0 auto;
    @media (min-width: v.em(980)) {
      margin: 0;
    }
  }
  &__image-group {
    position: relative;
    img {
      width: 300px;
      max-width: 100%;
      border-radius: 20px;
    }
    > div {
      display: flex;
      height: 48px;
      width: 48px;

      justify-items: center;
      align-items: center;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: v.rem(2);
      img {
        width: 80%;
      }
    }
  }
}
.card-text {
  &__title {
    text-transform: uppercase;
    border-radius: 20px;
    text-align: center;
    border: 1px solid v.$grey-accent;
    color: v.$white;
    transition: all 0.4s;

    font: {
      size: v.rem(35);
      weight: 800;
    }
  }
  &__description {
    max-width: 350px;
    color: v.$white;
    margin: v.em(12) 0;
    font: {
      size: v.em(15);
      weight: 400;
    }
  }
}
</style>
