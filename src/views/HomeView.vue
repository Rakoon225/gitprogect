<script>
import FirstBlock from '@/components/blocks/home/FirstBlock.vue';
import ServicesBlock from '@/components/blocks/home/ServicesBlock.vue';
import ContactBlock from '@/components/blocks/home/ContactBlock.vue';

export default {
  components: { FirstBlock, ServicesBlock, ContactBlock },
  name: 'Home-view',
};
</script>

<template>
  <first-block />
  <services-block />
  <contact-block />
</template>

<style lang="scss" scoped></style>
