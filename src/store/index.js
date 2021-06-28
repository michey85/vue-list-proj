import { createStore } from 'vuex';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const store = createStore({
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
  mutations,
  actions,
  getters,
});
