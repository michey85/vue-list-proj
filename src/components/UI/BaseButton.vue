<template>
  <button type="button" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: String,
  },
};
</script>

<style scoped>
button {
  background-color: var(--secondary-color);
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: var(--secondary-color-hover);
}

.flat {
}
</style>
