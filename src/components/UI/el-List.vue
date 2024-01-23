<script>
export default {
  name: 'el-list',
  props: {
    array: {
      //получаем список который нужно отрендерить
      type: Array,
      require: true,
      default: [],
    },
  },
  data() {
    return {
      active: 0, //активная лишка в данный момент
    };
  },
  methods: {
    changeActive(index) {
      this.active = index; //изменение активной лишки по нажатию
    },
  },
};
</script>

<template>
  <ul class="list">
    <li
      class="list__item"
      v-for="(item, index) in array"
      @click="changeActive(index)">
      <!--рендерим лишки по списку -->
      <el-link :isActive="this.active == index">
        <!--компонент лишек -->
        <router-link :to="`#${item.to}`">{{
          item.name
        }}</router-link>
        <!-- роутер лишка, query -->
      </el-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
