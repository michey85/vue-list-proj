<template>
  <li>
    <base-card>
      <header>
        <h2>{{ title }}</h2>
        <base-button mode="flat">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <a :href="link" target="_blank" rel="nofollow noopener">Read more</a>
    </base-card>
  </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  props: {
    id: Number,
    title: String,
    description: String,
    link: String,
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

header {
  display: flex;
  justify-content: space-between;
}

h2 {
  margin-top: 0;
}

a {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  text-decoration: none;
}

a:hover {
  background-color: var(--primary-color-hover);
}
</style>
