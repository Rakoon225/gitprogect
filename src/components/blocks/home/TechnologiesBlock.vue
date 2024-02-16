<script>
export default {
  name: 'TechnologiesBlock',
  components: { ElCard: ElementCard },
};
</script>

<style lang="scss">
@use '@/assets/styles/utils/' as v;

.technologies {
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
<template>
  <section class="technologies">
    <div class="container">
      <el-head
        class="technologies__title"
        :list="{
          main: 'Наши технологии',
          sub: 'чаще всего используем в проектах',
        }"></el-head>
      <div class="technologies__cards">
        <el-card
          v-for="card in cardsServices"
          :card="card" />
      </div>
    </div>
  </section>
</template>
