<script>
import TechnologiesCard from '@/components/TechnologiesCard.vue';
import { technologies } from '@/assets/statics/text';
export default {
  name: 'Technologies',
  components: { TechnologiesCard },
  data() {
    return {
      technologies: technologies,
    };
  },
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
    // display: flex;
    // justify-content: center;
    // gap: 20px;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: v.em(965)) {
      grid-template-columns: auto;
    }
  }
}
</style>
<template>
  <section class="technologies">
    <div class="container">
      <el-head
        class="technologies__title"
        :list="{
          main: 'Технологии',
          sub: 'чаще всего используем в проектах',
        }"></el-head>
      <div class="technologies__cards">
        <technologies-card
          v-for="(card,index) in technologies"
          :card="card" :index="index" />
      </div>
    </div>
  </section>
</template>
