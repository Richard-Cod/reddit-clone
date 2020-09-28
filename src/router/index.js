import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Subreddits from '../views/Subreddits.vue'
import Subreddit from '../views/Subreddit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subreddits',
    name: 'Subreddits',
    component: Subreddits
  },
  {
    path: '/subreddits/r/:name',
    name: 'Subreddit',
    component: Subreddit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
