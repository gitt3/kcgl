import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import showAll from "./components/showAll.vue";
import showCompleted from "./components/showCompleted.vue";
import showActice from "./components/showActice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/showAll",
    component: showAll,
    name: 'showAll'
  },
  {
    path: "/showActice",
    component: showActice,
    name: 'showActice'
  },
  {
    path: "/showCompleted",
    component: showCompleted,
    name: 'showCompleted'
  },
  {
    path: "/",
    redirect: '/showAll'
  }
]

var router = new VueRouter({
  routes
})
export default router;