<template>
  <div class="container">
    <base-card>
      <base-button @click="setActiveTab('the-list')" :mode="listBtnMode"
        >Stored resources</base-button
      >
      <base-button @click="setActiveTab('add-resource')" :mode="addBtnMode"
        >Add resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="$store.state.activeTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheList from './TheList.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    TheList,
    AddResource,
  },
  computed: {
    listBtnMode() {
      return this.$store.state.activeTab === 'the-list' ? null : 'flat';
    },
    addBtnMode() {
      return this.$store.state.activeTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setActiveTab(tab) {
      this.$store.commit('setActiveTab', tab);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
}
</style>
