<template>
  <base-card>
    <h2>Add resourse</h2>
    <form @submit.prevent="submitData" ref="new-resource-form">
      <label>
        Resource Title
        <input type="text" v-model="enteredTitle" />
      </label>
      <label>
        Resource Description
        <textarea type="text" v-model="enteredDescription" rows="4"></textarea>
      </label>
      <label>
        Resource Link
        <input type="url" v-model="enteredLink" />
      </label>
      <base-button type="submit">Add resource</base-button>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  inject: ['addResource'],
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',
    };
  },
  methods: {
    submitData() {
      this.addResource(
        this.enteredTitle,
        this.enteredDescription,
        this.enteredLink
      );
      this.$refs['new-resource-form'].reset();
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 0;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
}

input,
textarea {
  padding: 0.5rem 0.8rem;
  border: 1px solid var(--grey);
}
</style>
