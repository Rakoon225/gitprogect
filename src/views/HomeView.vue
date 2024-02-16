<script>
import FirstBlock from '@/components/blocks/home/FirstBlock.vue';
import ServicesBlock from '@/components/blocks/home/ServicesBlock.vue';
import ContactBlock from '@/components/blocks/home/ContactBlock.vue';
import TechnologiesBlock from '@/components/blocks/home/TechnologiesBlock.vue';

export default {
  components: {
    FirstBlock,
    ServicesBlock,
    ContactBlock,
    TechnologiesBlock,
  },
  name: 'Home-view',
};
</script>

<template>
  <first-block />
  <services-block />
  <contact-block />
  <technologies-block />
</template>

<style lang="scss" scoped></style>
