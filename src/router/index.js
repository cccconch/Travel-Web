import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import contact from '../views/contact.vue'
import index from '../views/index.vue'
import museum from "@/views/museum.vue";
import newslist from "@/views/newslist.vue";
import sight from "@/views/sight.vue";
import xwzzy from "@/views/xwzzy.vue";
import stra from "@/views/stra.vue";
import zzy from "@/views/zzy.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/museum',
      name: 'museum',
      component: museum
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: newslist
    },
    {
      path: '/sight',
      name: 'sight',
      component: sight
    },
    {
      path: '/xwzzy',
      name: 'xwzzy',
      component: xwzzy
    },
    {
      path: '/zzy',
      name: 'zzy',
      component: zzy
    },
    {
      path: '/stra',
      name: 'stra',
      component: stra
    },
  ]
})

export default router
