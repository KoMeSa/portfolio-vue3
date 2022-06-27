import DefaultLayout from '@/layouts/DefaultLayout'
import HomeView from '@/views/HomeView.vue'

export default [
  {
    path: '/',
    component: DefaultLayout,
    // beforeEnter: async () => ((await checkUser()) ? true : '/'),
    children: [
      {
        path: '',
        component: HomeView,
      },
    ],
  },
]
