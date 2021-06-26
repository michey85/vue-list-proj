<template>
  <button :class="mode">
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
  text-decoration: none;
  border: none;
  cursor: pointer;
  align-self: center;
  font-size: 1.2rem;
}

button:hover {
  background-color: var(--secondary-color-hover);
}

.flat {
  background-color: transparent;
  color: var(--primary-color);
}
.flat:hover {
  background-color: var(--grey);
}
</style>
