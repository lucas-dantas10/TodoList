import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
 
library.add([
    faChevronLeft, faGoogle
]);

const app = createApp(App);
app
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
