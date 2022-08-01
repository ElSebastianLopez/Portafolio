import { createApp } from 'vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

/* import specific icons */
import {
  faHtml5,
  faSquareJs,
  faVuejs,
  faCss3Alt,
  faJava,

} from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
/* add icons to the library */
library.add(
  faVuejs,
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faJava,
  faDatabase,
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router)
  .mount('#app');
