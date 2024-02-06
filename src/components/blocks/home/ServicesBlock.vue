<script>
import ElementCard from '../../ElementCard.vue';
import { cardsServices } from '@/assets/statics/text.js';

export default {
  name: 'ServicesBlock',
  components: { ElCard: ElementCard },
  data() {
    return {
      cardsServices: cardsServices,
    };
  },
};
</script>

<template>
  <section id="services" class="services">
    <div class="container">
      <el-head
        class="services__title"
        :list="{
          main: 'Наши услуги',
          sub: 'и что мы вообще делаем',
        }"></el-head>
      <div class="services__cards">
        <el-card
          v-for="card in cardsServices"
          :card="card" />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@use '@/assets/styles/utils' as v;

.services {
  & {
    padding: v.em(30) 0 v.em(30) 0;
    min-height: 400px;
  }
  &__title {
    text-align: center;
    margin-bottom: v.em(35);
    @media (max-width: v.em(465)) {
      margin-bottom: v.em(25);
    }
    @media (max-width: v.em(320)) {
      margin-bottom: v.em(25);
    }
  }
  &__cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
