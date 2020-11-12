import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "@/components/sign/SignIn.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{
      path: "/",
      component: () => import('../components/main/Main.vue')
    }]
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;