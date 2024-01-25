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
      <el-head :list="{main: 'Наши услуги', sub: 'и что мы вообще делаем'}"></el-head>
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
  &__cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
}

</style>
