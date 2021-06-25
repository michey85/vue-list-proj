<template>
  <TheHeader />
  <TheResources />
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources,
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

.container {
  padding: 0 1rem;
  max-width: 800px;
}
</style>
