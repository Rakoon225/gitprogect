<script>
import ContactCard from '@/components/ContactCard.vue';
import { cardsContacts } from '@/assets/statics/text.js';

export default {
  name: 'ContactBlock',
  components: { ContactCard },
  data() {
    return {
      cardsContacts: cardsContacts,
    };
  },
};
</script>

<template>
  <section id="contacts" class="contacts">
    <div class="contacts__container">
      <el-head
        class="contacts__title"
        :list="{
          main: 'Наши контакты',
          sub: 'обратная связь',
        }"></el-head>
      <div class="contacts__body">
        <contact-card
          v-for="card in cardsContacts"
          :item="card"></contact-card>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/utils' as v;

.contacts {
  & {
    display: flex;
    padding: 30px 0;
    justify-content: center;
    border-bottom: 1px solid v.$grey-accent;
  }
  &__body {
    display: flex;
    justify-content: center;
    flex-shrink: 1;
    flex-grow: 1;
    flex-wrap: wrap;
    row-gap: 1px;

    max-width: 1300px;
    margin-top: 25px;

    @media (max-width: v.em(1024)) and (min-width: v.em(576)) {
      gap: 5px;
      row-gap: 10px;
    }
  }
  &__title {
    text-align: center;
  }
}
</style>
