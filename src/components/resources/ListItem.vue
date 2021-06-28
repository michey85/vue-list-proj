<template>
  <li>
    <base-card>
      <header>
        <h2>{{ title }}</h2>
        <base-button mode="flat" @click="removeResource(id)">
          <base-icon icon-name="write">
            <g data-v-9dd4e508="" fill="currentColor"
              ><g data-v-9dd4e508=""
                ><path
                  d="M17 5h-4V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v1h2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7h2V6a1 1 0 0 0-1-1zM7 3h4v2H7V3zm7 12H4V7h10v8z"
                ></path>
                <path
                  d="M6.5 13h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zM10.5 13h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5z"
                ></path></g
            ></g>
          </base-icon>
        </base-button>
      </header>
      <p>{{ description }}</p>
      <a :href="link" target="_blank" rel="nofollow noopener">Read more</a>
    </base-card>
  </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseIcon from '../UI/BaseIcon.vue';
export default {
  components: { BaseButton, BaseIcon },
  props: {
    id: String,
    title: String,
    description: String,
    link: String,
  },
  methods: {
    removeResource(id) {
      // TODO: добавить диалог с уточненением точно ли юзер хочет удалить ресурс
      this.$store.commit('removeResource', id);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  display: flex;
}

li > div {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin-top: auto;
  align-self: flex-start;
}

a:hover {
  background-color: var(--primary-color-hover);
}
</style>
