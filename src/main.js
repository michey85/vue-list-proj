import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App';

import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseIcon from './components/UI/BaseIcon.vue';

const store = createStore({
  state() {
    return {
      resources: [
        {
          id: '1',
          title: 'Official Vue Guide',
          description: 'Official Vue documentation. 9 languages.',
          link: 'https://vuejs.org',
        },
        {
          id: '2',
          title: 'Google',
          description: 'Most popular search engine. Try it when you need help.',
          link: 'https://google.com',
        },
      ],
      activeTab: 'the-list',
    };
  },
  mutations: {
    addResource(state, { title, description, link }) {
      const newResource = {
        id: Date.now().toLocaleString(),
        title,
        description,
        link,
      };

      state.resources = [newResource, ...state.resources];
      state.activeTab = 'the-list';
    },
    removeResource(state, payloadId) {
      state.resources = state.resources.filter(el => el.id !== payloadId);
    },
    setActiveTab(state, payloadTab) {
      state.activeTab = payloadTab;
    },
  },
});

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.component('base-icon', BaseIcon);

app.use(store);

app.mount('#app');
