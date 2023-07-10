import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faChevronLeft, faFilter, faHouse, faCalendarDays, faPlus, faClock, faUser, faMagnifyingGlass, faChevronDown,
    faGraduationCap, faTag
 } from '@fortawesome/free-solid-svg-icons';

import { faClockFour } from '@fortawesome/free-regular-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
 
library.add([
    faChevronLeft, faGoogle, faFilter, faHouse, faCalendarDays, faPlus, faClock, faUser, faMagnifyingGlass,
    faChevronDown, faGraduationCap, faClockFour, faTag
]);

const app = createApp(App);
app
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
