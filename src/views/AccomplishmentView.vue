<template>
  <div id="projects" :class="{ fade: main == true || main == false }">
    <div
      v-if="main == true"
      id="introduction"
      :class="{ fade: main == true || main == false }"
    >
      Here's what i've made so far
    </div>

    <div v-if="main == true" class="card-contents">
      <div
        class="card"
        id="manage-cost-and-schedules-for-civil-construction-app"
        @click="toggleProjects"
        :class="{ 'fade-in': main == true || main == false }"
      >
        <div class="header">
          <img :src="civilConstructionAppImage" />
        </div>
        <div class="description" :class="{ active: true }">
          <center>Manage Cost and Schedules for Civil Construction App</center>
        </div>
      </div>

      <div
        class="card"
        id="optional-course-scheduling-app"
        @click="toggleProjects"
        :class="{ 'fade-in': main == true || main == false }"
      >
        <div class="header">
          <img :src="optionalCourseSchedulingAppImage" />
        </div>
        <div class="description" :class="{ active: true }">
          <center>Optional Course Scheduling App</center>
        </div>
      </div>
    </div>

    <div class="redirecting-menu fade" v-if="main == false">
      <div class="back_button" @click="toggleAccomplishment">
        <i class="far fa-arrow-alt-circle-left" style="font-size: 0.85em"></i>
        Back
      </div>

      <span
        class="project-name"
        v-if="viewed == 'manage-cost-and-schedules-for-civil-construction-app'"
      >
        Manage Cost and Schedules for Civil Construction App
      </span>
      <span
        class="project-name"
        v-if="viewed == 'optional-course-scheduling-app'"
      >
        Optional Course Scheduling App
      </span>
    </div>

    <router-view :viewed="viewed" />
  </div>
</template>

<script>
import civilConstructionAppImage from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/1.png";
import optionalCourseSchedulingAppImage from "./../assets/img/optional-course-scheduling-app/0.png";

import router from "./../router";

export default {
  data: function () {
    return {
      civilConstructionAppImage: civilConstructionAppImage,
      optionalCourseSchedulingAppImage: optionalCourseSchedulingAppImage,
      main: true,
      viewed: "",
    };
  },
  mounted() {
    this.$emit("height", {
      state: false,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  methods: {
    toggleProjects(event) {
      if (event.target.parentElement.parentElement.id == "projects") {
        this.viewed = event.target.id;
        this.main = false;

        setTimeout(() => {
          router.push({ name: event.target.id });
        }, 50);
      } else {
        this.viewed = event.target.parentElement.parentElement.id;
        this.main = false;

        setTimeout(() => {
          router.push({ name: event.target.parentElement.parentElement.id });
        }, 50);
      }
    },
    toggleAccomplishment() {
      this.viewed = "";
      this.main = true;

      setTimeout(() => {
        router.push({ name: "projects" });
      }, 50);
    },
  },
};
</script>
