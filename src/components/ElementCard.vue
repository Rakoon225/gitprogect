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
  <a href="#contacts">
    <div class="card" ref="element">
      <div class="card__inner">
        <div class="card__image">
          <img :src="require(`@/assets/image/card/${card.key}.svg`)" alt="" />
        </div>
        <div class="card__text">
          <h5 class="card__title">{{ card.title }}</h5>
          <p class="card__description">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;
.card {
  & {
    min-height: v.rem(300);
    max-width: v.rem(300);
    padding: v.em(20);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 2px solid v.$grey-accent;
    cursor: default;
    &:hover {
      box-shadow: 10px 10px 10px v.$grey-accent;
    }
  }
  &__image {
    display: flex;
    justify-content: center;
    > img {
      width: v.em(120);
      height: 100%;
      object-fit: cover;
      margin: 0 auto v.em(15) auto;
    }
  }
  &__title {
    font-weight: 500;
    font-size: v.rem(25);
    margin-bottom: v.em(10, 25);
  }
}
</style>
