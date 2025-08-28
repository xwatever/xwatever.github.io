import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("./../../views/v1/HomeView.vue");
const AboutView = () => import("./../../views/v1/AboutView.vue");
const AccomplishmentView = () =>
  import("./../../views/v1/AccomplishmentView.vue");
const CurriculumVitaeView = () =>
  import("./../../views/v1/CurriculumVitaeViewIndo.vue");
// const CurriculumVitaeView = () => import("./../../views/v1/CurriculumVitaeView.vue");
const ResumeView = () => import("./../../views/v1/ResumeView.vue");
const CarouselComponent = () =>
  import("./../../components/v1/CarouselComponent.vue");

const routes = [
  {
    path: "/v1/",
    redirect: { name: "home" },
  },
  {
    path: "/v1/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/v1/about",
    name: "about",
    component: AboutView,
    // children: [

    // ],
  },
  {
    path: "/v1/cv",
    name: "cv",
    component: CurriculumVitaeView,
  },
  {
    path: "/v1/resume",
    name: "resume",
    component: ResumeView,
  },
  {
    path: "/v1/projects",
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
