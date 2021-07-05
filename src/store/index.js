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
          title: 'Yoga Finder with VueJS',
          description:
            'More intersting Vue projecth with a lot of technologies.',
          link: 'https://michey85.github.io/vue-finder/instructors',
        },
        {
          id: '2',
          title: 'Source code of this project',
          description: 'GitHub repo of this small Vue project.',
          link: 'https://github.com/michey85/vue-list-proj',
        },
        {
          id: '3',
          title: 'Portfolio web page',
          description: 'Portfolio webpage based on GitBook service.',
          link: 'https://michey85.gitbook.io/frontend-developer-portfolio/',
        },
      ],
      activeTab: 'the-list',
    };
  },
  mutations,
  actions,
  getters,
});
