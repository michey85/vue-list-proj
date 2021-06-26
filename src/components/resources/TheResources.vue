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
          title: 'Official Vue Guide',
          description: 'Official Vue documentation. 9 languages.',
          link: 'https://vuejs.org',
        },
        {
          id: 2,
          title: 'Google',
          description: 'Most popular search engine. Try it when you need help.',
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
      removeResource: this.removeResource,
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: Date.now().toLocaleString(),
        title,
        description,
        link,
      };

      this.resources.unshift(newResource);
      this.activeTab = 'the-list';
    },
    removeResource(id) {
      // TODO: добавить диалог с уточненением точно ли юзер хочет удалить ресурс
      const ind = this.resources.findIndex(el => el.id === id);
      this.resources.splice(ind, 1);
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
