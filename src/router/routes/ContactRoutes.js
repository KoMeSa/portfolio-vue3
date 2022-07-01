import DefaultLayout from '@/layouts/DefaultLayout'
import ContactView from '@/views/ContactView.vue'

export default [
  {
    path: '/contact/',
    component: DefaultLayout,
    // beforeEnter: async () => ((await checkUser()) ? true : '/'),
    children: [
      {
        path: '',
        component: ContactView,
      },
    ],
  },
]
