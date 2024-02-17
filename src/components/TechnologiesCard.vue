<script setup>
import VanillaTilt from "vanilla-tilt";

import { onMounted, ref } from "vue";
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
      class="card__inner"
    >
      <div class="card__content">
        <div class="card__image-group">
          <img
            :src="require(`@/assets/image/technologies/${card.name}.png`)"
            alt="icon"
          />
        </div>
      </div>
      <!-- <div class="card__text card-text"> -->
      <h2 class="card__title">{{ card.name }}</h2>
      <p class="card__description">
        {{ card.text }}
      </p>
      <!-- </div> -->
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: v.em(10);

    width: 100%;
    border-radius: 20px;
    padding: v.em(16);

    @media (min-width: v.em(576)) {
      grid-template-areas:
        "image title"
        "image text";

      padding: v.em(20) v.em(28);
    }
    @media (max-width: v.em(576)) {
      grid-template-areas:
        "image title"
        "text text";

      padding: v.em(20);
    }
  }

  &__content {
    margin: 0 auto;
    grid-area: image;
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

  &__title {
    grid-area: title;
    text-transform: uppercase;
    border-radius: 20px;
    text-align: center;
    border: 1px solid v.$grey-accent;
    color: v.$white;
    transition: all 0.4s;

    height: max-content;
    margin: auto;

    @media (min-width: v.em(576)) {
      width: 200px;
      padding: 10px 20px;
      font: {
        size: v.rem(35);
        weight: 800;
      }
    }
    @media (max-width: v.em(576)) {
      width: 120px;
      padding: 5px 10px;
      font: {
        size: v.rem(23);
        weight: 800;
      }
    }
  }
  &__description {
    grid-area: text;
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
