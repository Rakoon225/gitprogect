<script setup>
import VanillaTilt from 'vanilla-tilt';
import {
  useSlideIn,
  useSpec,
} from '@/hooks/useSlideMotion.js';
import { onMounted, ref, toRefs } from 'vue';
const props = defineProps({
  card: {
    type: Object,
    required: true,
    default: true,
  },
  index: {
    type: Number,
    default: true,
  },
});
const { card, index } = toRefs(props);
const element = ref(null);

onMounted(() => {
  useSlideIn(
    element,
    index.value % 2 === 0 ? 'right' : 'left',
    (((index.value + (index.value % 2) === 0 ? 10 : 20) *
      250) /
      2) *
      0.6
  );

  VanillaTilt.init(element.value, {
    max: 10,
    speed: 200,
  });
});
</script>
<template>
  <a href="#contacts">
    <div class="card" ref="element">
      <div class="card__inner">
        <div class="card__image">
          <img
            :src="
              require(`@/assets/image/card/${card.key}.svg`)
            "
            alt="" />
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
    // @media (hover: hover) {
    //   &:hover {
    //     box-shadow: 10px 10px 10px v.$grey-accent;
    //   }
    // }
    // @media (hover: none) {
    //   &:hover {
    //     box-shadow: 10px 10px 10px v.$grey-accent;
    //   }
    // }
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
