<template>
  <div id="projects">
    <div v-if="main == true" id="introduction">
      Here's what i've made so far
    </div>

    <div v-if="main == true" class="card-contents">
      <div
        class="card"
        id="manage-cost-and-schedules-for-civil-construction-app"
        @click="toggleProjects"
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
      >
        <div class="header">
          <img :src="optionalCourseSchedulingAppImage" />
        </div>
        <div class="description" :class="{ active: true }">
          <center>Optional Course Scheduling App</center>
        </div>
      </div>
    </div>

    <div class="redirecting-menu">
      <div
        class="back_button"
        v-if="main == false"
        @click="toggleAccomplishment"
      >
        <!-- <router-link to="/constructions"> -->
        <i class="far fa-arrow-alt-circle-left" style="font-size: 0.85em"></i>
        Back
        <!-- </router-link> -->
      </div>
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
