import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { routes } from './router/index'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faAngleLeft,  faHome, faAddressCard, faCode, faEnvelope, faClose,} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faTelegram  } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faAngleLeft, faHome, faAddressCard, faCode, faEnvelope, faClose, faFacebook, faGithub, faTelegram) 


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
