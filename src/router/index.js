import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import DescriptionView from "../views/DescriptionView.vue";

// Layouts
import RootLayout from "../layouts/RootLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: RootLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/register",
          name: "register",
          component: RegisterView,
        },
        {
          path: "/description",
          name: "description",
          component: DescriptionView,
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
});

export default router;
