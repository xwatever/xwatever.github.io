<template>
  <div id="about">
    <div id="about-me" :class="{ fade: subView == 'about-me' }">
      About me
      <div class="about" :class="{ 'fade-in': subView == 'about-me' }">
        I live in Pekanbaru, Indonesia. I have learned coding for 10 years, and
        haven't started my career as a programmer yet. I want to start my
        journey as a Front-End Developer to make myself better at designing. I
        have learned to use Framework like Laravel, VueJS, ExpressJS for my
        college assignments. I strive for making something i have visualised
        works, but sometimes i'm just trying to make things simple if i dont
        have the capability for it. Things would've been better if i'm
        developing or creating more stuffs so i can improve my knowledge more.
      </div>
    </div>
    <div id="education" :class="{ fade: subView == 'education' }">
      My Education
      <div class="institute" :class="{ 'fade-in': subView == 'education' }">
        Bachelor of Informatics Engineering
        <div class="left">
          Universitas Islam Riau, Pekanbaru, Indonesia
          <div class="right">September 2017 - June 2024</div>
        </div>
        <div class="details">
          I was assigned as laboratory assistant for practicum study at certain
          subject. My role was to teach juniors to implement code that they have
          learned from lecturer at class, as well as assisting lecturer in
          evaluate student's grade based on their performance at practicum
          session and laboratory assignments. My concentration was Artificial
          Intelligent, and i'm intrigued by how math and some formulae have made
          something so complex.
        </div>
      </div>
      <div class="institute" :class="{ 'fade-in': subView == 'education' }">
        Graduate of Vocational High School for Computer Software Engineering
        Major
        <div class="left">
          Sekolah Menengah Kejuruan Negeri 2 Pekanbaru, Indonesia
          <div class="right">July 2014 - June 2017</div>
        </div>
        <div class="details">
          I learned coding for the first time here. Was taught basics of
          programming languages. It feels like magic when i tried to implement
          code to work, and felt like i'm doing some hacking stuff, LOL. Being
          intrigued by how software created, this is where i started to think
          "maybe, having a job as a programmer would be good for my future".
        </div>
      </div>
    </div>

    <div id="work" :class="{ fade: subView == 'work' }">
      I had and have worked in these places
      <div class="job" :class="{ 'fade-in': subView == 'work' }">
        September 2022 - Present, Pekanbaru City, Riau Province, Indonesia,
        Department of Population and Civil Registration - Back Office Employee
      </div>
      <div class="job" :class="{ 'fade-in': subView == 'work' }">
        September 2019 - July 2021, Pekanbaru City, Riau Province, Indonesia,
        Universitas Islam Riau - Laboratory Assistant
      </div>

      <div class="cv-n-resume">
        <span class="resume" @click="toggleResume"
          >Check out my resume here</span
        >
        <span class="cv" @click="toggleCV">Check out my cv here</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import resume from "./../assets/muhammad-darmawan-resume.pdf";
import cv from "./../assets/muhammad-darmawan-cv.pdf";

export default {
  props: ["view", "subView", "width"],
  watch: {
    subView(val) {
      var element =
        document.getElementById(val) != null
          ? document.getElementById(val)
          : document.getElementById("about-me");
      var headerOffset = this.width >= 1466 ? 80 + (3 * this.width) / 100 : 80;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
  },
  data: function () {
    return {
      resume: resume,
      cv: cv,
    };
  },
  mounted() {
    setTimeout(() => {
      this.toggleView();
    }, 200);
  },
  methods: {
    toggleView() {
      var element =
        document.getElementById(this.subView) != null
          ? document.getElementById(this.subView)
          : document.getElementById("about-me");
      var headerOffset = this.width >= 1466 ? 80 + (3 * this.width) / 100 : 80;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    toggleResume() {
      // router.push({ name: "resume" });
      window.open(resume, "_blank");
    },
    toggleCV() {
      // router.push({ name: "cv" });
      window.open(cv, "_blank");
    },
  },
};
</script>
