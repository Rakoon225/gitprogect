<script>
import ElementCard from '../../ElementCard.vue';

export default {
  name: 'ServicesBlock',
  components: { ElCard: ElementCard },
};
</script>

<template>
  <section id="services" class="services">
    <div class="container">
      <div class="services__top services-top">
        <h3 class="services-top__title">Наши услуги</h3>
        <h4 class="services-top__subtitle"
          >и что мы вообще делаем</h4
        >
      </div>
      <div class="services__cards">
        <el-card
          v-for="card in this.$store.state.cardsServices"
          :card="card" />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@use '@/assets/styles/utils' as v;

.services {
  & {
    background-color: v.$green1--h;
    padding: v.em(30) 0 v.em(30) 0;
    min-height: 400px;
  }
  .services__top {
  }
  &__cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
}
.services-top {
  text-align: center;
  color: v.$green2--a;
  margin-bottom: v.em(35);
  @media (max-width: v.em(465)) {
    margin-bottom: v.em(25);
  }
  @media (max-width: v.em(320)) {
    margin-bottom: v.em(25);
  }
  &__title {
    font-weight: 500;
    line-height: 1;
    font-size: v.rem(48);
    @media (max-width: v.em(320)) {
      line-height: 0.8;
      margin-bottom: v.em(5);
    }
  }
  &__subtitle {
    font-size: v.rem(18);
    letter-spacing: v.em(1.5, 18);
  }
}
</style>
