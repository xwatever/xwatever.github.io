import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("./../views/HomeView.vue");
const AboutView = () => import("./../views/AboutView.vue");
const AccomplishmentView = () => import("./../views/AccomplishmentView.vue");
const CurriculumVitaeView = () =>
  import("./../views/CurriculumVitaeViewIndo.vue");
// const CurriculumVitaeView = () => import("./../views/CurriculumVitaeView.vue");
const ResumeView = () => import("./../views/ResumeView.vue");
const CarouselComponent = () => import("./../components/CarouselComponent.vue");

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
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
    children: [
      {
        path: "manage-cost-and-schedules-for-civil-construction-app/",
        name: "manage-cost-and-schedules-for-civil-construction-app",
        component: CarouselComponent,
      },
      {
        path: "optional-course-scheduling-app/",
        name: "optional-course-scheduling-app",
        component: CarouselComponent,
      },
    ],
  },
];

const router = createRouter({
  mode: "hash",
  // history: createWebHistory("/portfolio/"),
  history: createWebHistory(),
  routes,
});

export default router;
