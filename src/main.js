import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { routes } from './router/index'
import store from './store'


// const historyType = 'HISTORY_TYPE'
// const router = createRouter({
//     history: historyType === 'webhash' ? createWebHashHistory() : createWebHistory(),
//     routes: routes,
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createApp(App).use(store).use(router).mount('#app')
