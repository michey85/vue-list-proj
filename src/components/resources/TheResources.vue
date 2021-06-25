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
import TheList from './TheList.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    TheList,
    AddResource,
  },
  data() {
    return {
      activeTab: 'the-list',
      resources: [
        {
          id: 1,
          title: 'Guide',
          description: 'documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 2,
          title: 'Google',
          description: 'search engine',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    listBtnMode() {
      return this.activeTab === 'the-list' ? null : 'flat';
    },
    addBtnMode() {
      return this.activeTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    addResource(title, description, link) {
      console.log('add res');
      const newResource = {
        id: Date.now().toLocaleString(),
        title,
        description,
        link,
      };

      this.resources.unshift(newResource);
      this.activeTab = 'the-list';
    },
  },
};
</script>

<style scoped></style>
