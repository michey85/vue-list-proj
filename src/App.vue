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
  --primary-color: #c53030;
  --primary-color-hover: #f56565;
  --secondary-color: #805ad5;
  --secondary-color-hover: #b794f4;
  --grey: #e2e8f0;

  --shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  --radius-base: 1rem;
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
  margin: auto;
}
</style>
