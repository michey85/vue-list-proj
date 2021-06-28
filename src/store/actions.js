export const actions = {
  addResource(context, { title, description, link }) {
    context.commit('addResource', { title, description, link });
  },
  removeResource(context, payloadId) {
    context.commit('removeResource', payloadId);
  },
  setActiveTab(context, payloadTab) {
    context.commit('setActiveTab', payloadTab);
  },
};
