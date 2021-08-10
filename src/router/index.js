import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import LivingShorelines from "../components/LivingShorelines.vue";
import CommunityPlanner from "../components/CommunityPlanner.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/living-shorelines",
    name: "LivingShorelines",
    component: LivingShorelines,
  },
  {
    path: "/community-planner",
    name: "CommunityPlanner",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/CommunityPlanner.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
