import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/origins",
      name: "origins",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "origins" */ "./views/Origins.vue")
    },
    {
      path: "/questions",
      name: "questions",
      component: () => import("./views/Questions.vue")
    },
    {
      path: "/terms",
      name: "/terms",
      component: () => import("./views/Terms.vue")
    }
  ]
});
