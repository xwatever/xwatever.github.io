<template>
  <div
    v-if="viewed == 'manage-cost-and-schedules-for-civil-construction-app'"
    class="slideshow-container"
  >
    <div
      v-for="(img, index) in civilConstructionAppImages"
      class="mySlides fade"
      :key="index"
    >
      <div class="numbertext">{{ index }} / 9</div>
      <img :src="img" style="width: 100%" />
    </div>

    <a class="prev" @click="plusSlides(-1)">❮</a>
    <a class="next" @click="plusSlides(1)">❯</a>
  </div>

  <br />

  <div
    style="text-align: center"
    v-if="viewed == 'manage-cost-and-schedules-for-civil-construction-app'"
  >
    <span
      v-for="(img, index) in civilConstructionAppImages"
      class="dot"
      :key="index"
      @click="currentSlide(parseInt(index))"
    ></span>
  </div>
  <!-- <div class="slideshow-container">
    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="" style="width: 100%" />
      <div class="text">Caption Text</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="" style="width: 100%" />
      <div class="text">Caption Two</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="" style="width: 100%" />
      <div class="text">Caption Three</div>
    </div>

    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
  </div>
  <br />

  <div style="text-align: center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div> -->
</template>

<script>
import civilConstructionAppImage1 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/1.png";
import civilConstructionAppImage2 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/2.png";
import civilConstructionAppImage3 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/3.png";
import civilConstructionAppImage4 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/4.png";
import civilConstructionAppImage5 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/5.png";
import civilConstructionAppImage6 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/6.png";
import civilConstructionAppImage7 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/7.png";
import civilConstructionAppImage8 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/8.png";
import civilConstructionAppImage9 from "./../assets/img/manage-cost-and-schedules-for-civil-construction-app/9.png";

import optionalCourseSchedulingAppImage0 from "./../assets/img/optional-course-scheduling-app/0.png";
import optionalCourseSchedulingAppImage1 from "./../assets/img/optional-course-scheduling-app/1.png";
import optionalCourseSchedulingAppImage2 from "./../assets/img/optional-course-scheduling-app/2.png";
import optionalCourseSchedulingAppImage3 from "./../assets/img/optional-course-scheduling-app/3.png";
import optionalCourseSchedulingAppImage4 from "./../assets/img/optional-course-scheduling-app/4.png";
import optionalCourseSchedulingAppImage5 from "./../assets/img/optional-course-scheduling-app/5.png";
import optionalCourseSchedulingAppImage6 from "./../assets/img/optional-course-scheduling-app/6.png";
import optionalCourseSchedulingAppImage7 from "./../assets/img/optional-course-scheduling-app/7.png";
import optionalCourseSchedulingAppImage8 from "./../assets/img/optional-course-scheduling-app/8.png";
import optionalCourseSchedulingAppImage9 from "./../assets/img/optional-course-scheduling-app/9.png";

export default {
  props: ["viewed"],
  mounted() {
    setTimeout(() => {
      this.showSlides(this.slideIndex);
    }, 100);
  },
  data: function () {
    return {
      civilConstructionAppImages: {
        1: civilConstructionAppImage1,
        2: civilConstructionAppImage2,
        3: civilConstructionAppImage3,
        4: civilConstructionAppImage4,
        5: civilConstructionAppImage5,
        6: civilConstructionAppImage6,
        7: civilConstructionAppImage7,
        8: civilConstructionAppImage8,
        9: civilConstructionAppImage9,
      },
      optionalCourseSchedulingAppImages: {
        1: optionalCourseSchedulingAppImage0,
        2: optionalCourseSchedulingAppImage1,
        3: optionalCourseSchedulingAppImage2,
        4: optionalCourseSchedulingAppImage3,
        5: optionalCourseSchedulingAppImage4,
        6: optionalCourseSchedulingAppImage5,
        7: optionalCourseSchedulingAppImage6,
        8: optionalCourseSchedulingAppImage7,
        9: optionalCourseSchedulingAppImage8,
        10: optionalCourseSchedulingAppImage9,
      },
      slideIndex: 1,
    };
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      // console.log(slides);
      // console.log(dots);
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      setTimeout(() => {
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
      }, 150);
    },
  },
};
</script>
