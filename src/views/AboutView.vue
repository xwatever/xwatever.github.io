<template>
  <div ref="container" id="about">
    <!-- <div
      ref="sections"
      class="section-transition"
      :style="{ transform: `translateY(-${currentIndex * 100}vh)` }"
    > -->
    <div ref="sections" class="section-transition">
      <div id="about-me" :class="{ fade: subView == 'about-me' }">
        <span class="title">About me</span>

        <p>
          I live in Pekanbaru, Indonesia. I have learned code for 10 years,
          attending Vocational Highschool as Software Engineer student, college
          as Informatics Technology student, and haven't started my career as a
          programmer yet. I want to start my journey as a Front-End Developer to
          make myself better at designing.
        </p>
        <p>
          I have learned to use Framework like Laravel, VueJS, ExpressJS for my
          college assignments. I strive for making something i have visualised
          works, but sometimes i'm just trying to make things simple if i dont
          have the capability for it. Things would've been better if i'm
          developing or creating more stuffs so i can improve my knowledge more.
        </p>
      </div>
      <div id="education" :class="{ fade: subView == 'education' }">
        <span class="title">My Education</span>
        <div class="content">
          <div class="institute" :class="{ 'fade-in': subView == 'education' }">
            Bachelor of Informatics Engineering
            <div class="left">
              <span class="location"
                >Universitas Islam Riau, Pekanbaru, Indonesia</span
              >
              <div class="right">
                <span class="date"> September 2017 - June 2024 </span>
              </div>
            </div>
            <div class="details">
              I was assigned as laboratory assistant for practicum study at
              certain subject. My role was to teach juniors to implement code
              that they have learned from lecturer at class, as well as
              assisting lecturer in evaluate student's grade based on their
              performance at practicum session and laboratory assignments.
            </div>
          </div>
          <div
            class="last institute"
            :class="{ 'fade-in': subView == 'education' }"
          >
            Graduate of Vocational High School for Computer Software Engineering
            Major
            <div class="left">
              <span class="location">
                Sekolah Menengah Kejuruan Negeri 2 Pekanbaru, Indonesia
              </span>
              <div class="right">
                <span class="date">July 2014 - June 2017</span>
              </div>
            </div>
            <div class="details">
              I learned coding for the first time here. Was taught basics of
              programming languages.
            </div>
          </div>
        </div>
      </div>
      <div id="work" :class="{ fade: subView == 'work' }">
        <span class="title">I had and have worked in these places</span>
        <div class="content">
          <div class="job" :class="{ 'fade-in': subView == 'work' }">
            September 2022 - July 2025, Pekanbaru City, Riau Province,
            Indonesia, Department of Population and Civil Registration - Back
            Office Employee
          </div>
          <div class="job" :class="{ 'fade-in': subView == 'work' }">
            September 2019 - July 2021, Pekanbaru City, Riau Province,
            Indonesia, Universitas Islam Riau - Laboratory Assistant
          </div>
          <div class="cv-n-resume">
            <div class="left">
              <span class="resume" @click="toggleResume"
                >Check out my resume here</span
              >
              <div class="right">
                <span class="cv" @click="toggleCV">Check out my cv here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import resume from "./../assets/pdf/muhammad-darmawan-resume.pdf";
import cv from "./../assets/pdf/muhammad-darmawan-cv.pdf";

export default {
  props: ["view", "subView", "width", "keydownAndWheelActive", "mobileView"],
  watch: {
    subView(val) {
      if (val == "about-me")
        this.$refs.sections.style.transform = `translateY(-${0 * 100}vh)`;
      else if (val == "education")
        this.$refs.sections.style.transform = `translateY(-${1 * 100}vh)`;
      else if (val == "work")
        this.$refs.sections.style.transform = `translateY(-${2 * 100}vh)`;
    },
    keydownAndWheelActive(val) {
      if (val == false && !this.mobileView) {
        window.addEventListener("keydown", (e) => {
          this.toggleRouteKeyDown(e);
        });
        window.addEventListener("wheel", (e) => {
          this.toggleRouteWheel(e);
        });
      }
    },
  },
  data: function () {
    return {
      currentIndex: 0,
      pages: ["bg-blue-600", "bg-green-600", "bg-purple-600"],
      total: "",
      isScrolling: false,

      resume: resume,
      cv: cv,
    };
  },
  mounted() {
    this.$emit("about");
  },
  methods: {
    toggleResume() {
      window.open(resume, "_blank");
    },
    toggleCV() {
      window.open(cv, "_blank");
    },
    toggleRouteKeyDown(e) {
      if (this.isScrolling) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        this.currentIndex = Math.min(this.currentIndex + 1, this.total - 1);
        setTimeout(() => {
          this.$emit("height", { state: true, direction: "down" });
        }, 200);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
        setTimeout(() => {
          this.$emit("height", { state: true, direction: "up" });
        }, 200);
      }

      this.isScrolling = true;
      setTimeout(() => (this.isScrolling = false), 1500);
    },
  },
  toggleRouteWheel(e) {
    if (this.isScrolling) return;
    if (e.deltaY >= 0 || e.deltaY <= 0) {
      const direction = e.deltaY > 0 ? 1 : -1;
      this.currentIndex = Math.min(
        Math.max(this.currentIndex + direction, 0),
        this.total - 1
      );

      if (e.deltaY >= 0) {
        setTimeout(() => {
          this.$emit("height", { state: true, direction: "up" });
        }, 200);
      } else {
        setTimeout(() => {
          this.$emit("height", { state: true, direction: "down" });
        }, 200);
      }
    }

    this.isScrolling = true;
    setTimeout(() => {
      this.isScrolling = false;
    }, 1500);
  },
};
</script>
