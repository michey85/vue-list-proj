import { createApp } from 'vue';

import App from './App';

import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseIcon from './components/UI/BaseIcon.vue';

import { store } from './store';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.component('base-icon', BaseIcon);

app.use(store);

app.mount('#app');
