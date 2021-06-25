<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1rem;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
