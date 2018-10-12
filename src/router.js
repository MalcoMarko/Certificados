import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Personas from './views/personas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: Personas
        },
        {
          path: 'Certificados',
          name: 'Certificados',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Certificados.vue'),
          props: true
        }
      ]
    }

  ]
})
