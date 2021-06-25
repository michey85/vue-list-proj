<template>
  <TheHeader />
  <List>
    <ListItem v-for="item in resources" :key="item" v-bind="item" />
  </List>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import List from './components/List.vue';
import ListItem from './components/ListItem.vue';

export default {
  components: {
    TheHeader,
    List,
    ListItem,
  },
  data() {
    return {
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
:root {
  --primary-color: red;
  --primary-color-hover: rgb(243, 165, 165);
  --secondary-color: maroon;
  --secondary-color-hover: rgb(129, 80, 80);
  --grey: #ccc;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
