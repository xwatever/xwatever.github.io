import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../../views/v2/HomePage.vue");
const AboutPage = () => import("../../views/v2/AboutPage.vue");
const PortfolioPage = () => import("../../views/v2/PortfolioPage.vue");
const ContactPage = () => import("../../views/v2/ContactPage.vue");

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
];

const router = createRouter({
  mode: "hash",
  // history: createWebHistory("/portfolio/"),
  history: createWebHistory(),
  routes,
});

export default router;
