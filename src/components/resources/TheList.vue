<template>
  <ul class="list">
    <ListItem v-for="item in resources" :key="item" v-bind="item" />
  </ul>
  <h4 v-if="!resources.length">There is nothing here yet!</h4>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  inject: ['resources'],
  components: {
    ListItem,
  },
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1rem 0;
  margin: 0;
}

h4 {
  margin: 0;
}

@media screen and (min-width: 768px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
