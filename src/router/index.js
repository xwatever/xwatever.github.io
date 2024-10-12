import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("./../views/HomeView.vue");
const AboutView = () => import("./../views/AboutView.vue");
const AccomplishmentView = () => import("./../views/AccomplishmentView.vue");
const CurriculumVitaeView = () => import("./../views/CurriculumVitaeView.vue");
const ResumeView = () => import("./../views/ResumeView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // children: [

    // ],
  },
  {
    path: "/cv",
    name: "cv",
    component: CurriculumVitaeView,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: AccomplishmentView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE - URL),
  routes,
});

export default router;
