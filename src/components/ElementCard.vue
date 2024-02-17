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
    <div class="card__inner">
      <div class="card__image">
        <img src="@/assets/image/contact/telegram__photo.jpg" alt="">
      </div>
      <div class="card__text">
        <h5 class="card__title">{{ card.title }}</h5>
        <p class="card__description">{{ card.text }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;
.card {
  & {
    min-height: 300px;
    max-width: 300px;
    padding: 20px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 2px solid v.$grey-accent;
    cursor: default;
    &:hover {
      box-shadow: 10px 10px 10px v.$grey-accent;
    }
  }
  &__image {
    > img {
      width: 100%;
      height: 180px;
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
