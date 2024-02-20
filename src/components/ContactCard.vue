<script setup>
import VanillaTilt from "vanilla-tilt";

import { onMounted, ref, toRefs } from "vue";

import { useSlideIn } from "@/hooks/useSlideMotion.js";

const props = defineProps({
  item: {
    type: Object,
    requier: true,
  },
  index: {
    type: Number,
    default: true,
  },
});

const { item, index } = toRefs(props);
const element = ref(null);

onMounted(() => {
  useSlideIn(
    element,
    index.value % 2 === 0 ? "right" : "left",
    (((index.value + (index.value % 2) === 0 ? 10 : 20) * 250) / 2) * 0.6
  );
  VanillaTilt.init(element.value, {
    max: 10,
    speed: 200,
  });
});
</script>

<template>
  <article class="contacts__card" ref="element">
    <div class="contacts__card-container">
      <img
        :src="require(`@/assets/image/contact/${item.name}.png`)"
        alt="иконка соцсетей"
        class="contacts__card-img"
      />
      <div class="contacts__card-body">
        <h2 class="contacts__card-title">{{ item.title }}</h2>
        <a :href="item.link" class="contacts__card-btn" v-if="item.link" role="button">
          Написать
        </a>
      </div>
    </div>
    <img
      :src="require(`@/assets/image/contact/${item.name}__photo.jpg`)"
      alt="Картинка шариков"
      class="contacts__card-background"
    />
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;
.contacts__card {
  & {
    gap: v.em(5);
    position: relative;
    overflow: hidden;
    border-radius: v.rem(12);

    @media (min-width: v.em(576)) {
      min-width: v.rem(350);
    }

    @media (max-width: v.em(576)) {
      min-width: 100%;
      border-radius: 0 !important;
    }

    @media (min-width: v.em(1024)) {
      &:nth-child(3n + 5),
      &:nth-child(2) {
        border: {
          // left: v.rem(2) x solid v.$grey;
          // right: v.rem(2) solid v.$grey;
          radius: 0;
        }
      }
    }
    @media (max-width: v.em(1024)) {
      border-radius: v.rem(10);
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: v.rem(25);
  }

  &-body {
    text-align: center;
    margin-top: v.rem(25);
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    filter: brightness(40%);
  }

  &-title {
    font: {
      weight: 700;
      size: v.em(25);
    }

    color: v.$white;
  }

  &-img {
    width: v.rem(100);
  }

  &-btn {
    display: block;
    padding: v.rem(7) v.rem(45);
    border: v.rem(1) solid v.$white;
    color: v.$white;
    margin-top: v.rem(7);

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: v.$white;
      color: v.$grey;
    }

    &:active {
      background-color: v.$black2;
    }
  }
}
</style>
