import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("./../views/HomeView.vue");
const AboutView = () => import("./../views/AboutView.vue");
const AccomplishmentView = () => import("./../views/AccomplishmentView.vue");
const CurriculumVitaeView = () => import("./../views/CurriculumVitaeView.vue");
const ResumeView = () => import("./../views/ResumeView.vue");
const CarouselComponent = () => import("./../components/CarouselComponent.vue");

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
  history: createWebHistory("/xwatever.github.io/"),
  routes,
});

export default router;
