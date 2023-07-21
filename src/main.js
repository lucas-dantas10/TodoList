import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import dateISO from './filters/dateTime.js';
import date from './filters/date.js';
import justDate from './filters/justDate.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faChevronLeft, faFilter, faHouse, faCalendarDays, faPlus, faClock, faUser, faMagnifyingGlass, faChevronDown,
    faGraduationCap, faTag, faBriefcase, faDumbbell, faMusic, faHeartPulse
 } from '@fortawesome/free-solid-svg-icons';

import { faClockFour } from '@fortawesome/free-regular-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
 
library.add([
    faChevronLeft, faGoogle, faFilter, faHouse, faCalendarDays, faPlus, faClock, faUser, faMagnifyingGlass,
    faChevronDown, faGraduationCap, faClockFour, faTag, faBriefcase, faDumbbell, faMusic, faHeartPulse
]);

const app = createApp(App);
app
    .use(store)
    .use(router)
    .use(VCalendar, {})
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

app.config.globalProperties.$filters = {
    dateISO,
    date,
    justDate
}
