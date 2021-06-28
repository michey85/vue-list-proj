export const mutations = {
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
};
