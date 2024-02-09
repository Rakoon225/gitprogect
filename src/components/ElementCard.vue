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
        <div></div>
      </div>
      <div class="card__text">
        <h5 class="card__title">{{ card.title }}</h5>
        {{ card.text }}
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
    > div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: v.$black2;
      //   text-align: center;
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
