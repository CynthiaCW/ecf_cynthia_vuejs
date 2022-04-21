import Vue from 'vue'
import VueRouter from 'vue-router'
import CardHomeView from '../views/CardHomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CardHomeView',
    component: CardHomeView
  },

  {
    path: '/CardsCollection',
    name: 'CardsCollection',

    component: () => import('../views/CardsCollectionView.vue')
  },

  {
    path: '/CardsCollection/:cardId',
    name: 'CardDetails',

    component: () => import('../views/DetailsCardView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
