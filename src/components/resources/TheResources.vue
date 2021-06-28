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
      <component :is="activeTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import TheList from './TheList.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    TheList,
    AddResource,
  },
  computed: {
    ...mapGetters(['activeTab']),
    listBtnMode() {
      return this.activeTab === 'the-list' ? null : 'flat';
    },
    addBtnMode() {
      return this.activeTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    ...mapActions(['setActiveTab']),
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
