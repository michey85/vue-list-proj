<template>
  <base-card>
    <h2>Add a new resourse</h2>
    <form @submit.prevent="submitData" ref="new-resource-form">
      <label>
        Resource Title
        <input type="text" v-model="enteredTitle" />
      </label>
      <label>
        Resource Description
        <textarea type="text" v-model="enteredDescription" rows="5"></textarea>
      </label>
      <label>
        Resource Link
        <input type="url" v-model="enteredLink" placeholder="https://" />
      </label>
      <base-button type="submit">Add resource</base-button>
    </form>
  </base-card>
  <base-dialog v-if="!isValidData" title="Invalid data" @close="closeDialog">
    <template #default>
      <p>
        Some of the form fields are invalid. Please check it and fill all the
        fields.
      </p>
    </template>
    <template #actions>
      <base-button @click="closeDialog">Close</base-button>
    </template>
  </base-dialog>
</template>

<script>
import { mapActions } from 'vuex';

import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  components: { BaseButton, BaseDialog },
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',

      isValidData: true,
    };
  },
  methods: {
    ...mapActions(['addResource']),

    submitData() {
      if (
        this.enteredTitle.trim() === '' ||
        this.enteredDescription.trim() === '' ||
        this.enteredLink.trim() === ''
      ) {
        this.isValidData = false;
        return;
      }

      this.addResource({
        title: this.enteredTitle,
        description: this.enteredDescription,
        link: this.enteredLink,
      });
      this.$refs['new-resource-form'].reset();
    },
    closeDialog() {
      this.isValidData = true;
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

  width: 100%;
  max-width: 30rem;
}
</style>
