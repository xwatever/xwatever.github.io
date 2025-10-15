<template>
  <div
    id="carousel"
    v-if="viewed == 'manage-cost-and-schedules-for-civil-construction-app'"
  >
    <div class="slideshow-container">
      <div
        v-for="(img, index) in civilConstructionAppImages"
        class="mySlides fade-carousel"
        :key="index"
      >
        <div class="numbertext">{{ index }} / 9</div>
        <img :src="img" style="width: 100%" />
      </div>

      <a class="prev" @click="plusSlides(-1)">❮</a>
      <a class="next" @click="plusSlides(1)">❯</a>
    </div>

    <br />

    <div style="text-align: center">
      <span
        v-for="(img, index) in civilConstructionAppImages"
        class="dot"
        :key="index"
        @click="currentSlide(parseInt(index))"
      ></span>
    </div>
  </div>

  <div id="carousel" v-if="viewed == 'optional-course-scheduling-app'">
    <div class="slideshow-container">
      <div
        v-for="(img, index) in optionalCourseSchedulingAppImages"
        class="mySlides fade-carousel"
        :key="index"
      >
        <div class="numbertext">{{ index }} / 10</div>
        <img :src="img" style="width: 100%" />
      </div>

      <a class="prev" @click="plusSlides(-1)">❮</a>
      <a class="next" @click="plusSlides(1)">❯</a>
    </div>

    <br />

    <div style="text-align: center">
      <span
        v-for="(img, index) in optionalCourseSchedulingAppImages"
        class="dot"
        :key="index"
        @click="currentSlide(parseInt(index))"
      ></span>
    </div>
  </div>

  <div id="content">
    <template
      v-if="viewed == 'manage-cost-and-schedules-for-civil-construction-app'"
    >
      <p>
        This app was made with VueJS + ExpressJS for my thesis assignment at
        Universitas Islam Riau. This app manage schedules and cost (by material
        usage and matching different types of material) from civil building
        projects.
      </p>
      <p>
        Other than teaching college students, Civil Engineering faculty have
        collaborate and operating civil projects for campus or outside of
        campus. Civil Engineering faculty does collab with certain company to
        manage projects with ease with an app. But there is no feature to make
        'forecast' of material usage on civil building with the same or
        different occurrence, and forecasting cost if there is delay or adding
        more days to complete certain tasks for the project. And that makes this
        app being offered to current head of civil engineering laboratory (Sir
        Mahadi Kurniawan) as solution (and of course for my thesis assignment)
      </p>
      <p>
        This app contains data for types of building, their constructing
        method/technique for references (material needed), types of material
        used in those projects (and their cost), projects performed, and its
        tasks, etc.
      </p>
      <p>
        So the way this app works, these projects will hold information about
        daily cost of each tasks and the duration of days the task will be
        completed. The usage of materials for constructing civil building are
        needed too for overall or project total cost.
      </p>
      <p>
        To make these usage of material have some kind of method or algorithm to
        change every combination that will be referenced or suggested as
        solution by the app, i had used Differential Evolution algorithm.
      </p>
      <p>
        And for forecasting postponing tasks, using daily cost as reference to
        predict overall project cost, not using some kind of algorithm, but just
        some basic logic by multiplying daily cost to added days to finish a
        certain task
      </p>
      <p>
        This app used template/design that i have been used for my internship
        assignment, but with a little improvement on its feature, like making
        sub menu on sidebar, using webpack or plugin or library like improving
        routing with Vue-Router.
      </p>
      <p>
        I have used more time on figuring how the algorithm works, database
        scheme, developing its back end, and felt the design already sufficient
        for it.
      </p>
    </template>
    <template v-if="viewed == 'optional-course-scheduling-app'">
      <p>
        This app was made with Laravel + VueJS for my Internship assignment at
        Universitas Islam Riau. This app manage schedules for civil
        engineering's optional courses. It is some kind of information system
        for college student, lecturer, and the one who managing this app to
        communicate and managing their classes schedules, grouping college
        student by their study concentration, and rooms or classes being use for
        lecturing.
      </p>
      <p>
        Being lecturer's assistant, i was offered to do internship at campus,
        developing apps for other faculty at Universitas Islam Riau. Meeting the
        current head of civil engineering laboratory (Sir Muttaqin) with some of
        fellow assistant, he was fascinated by how coding works, and wanted to
        learn code by tinkering finished app. With some discussion, we got
        agreement to make app to manage optional course.
      </p>
      <p>
        At first, we had respective feature work to develop this app, but since
        it took a while to develop my feature first (since my part is the intial
        part of the app), i told my fellow assistant that they can abandon doing
        this project and do other internship (If you are reading this i hope you
        forgive me. If not, atleast you are hearing my regret having you
        trusting me, this untrustworthy person)(and this dumbass haven't learn
        github yet, it was difficult to control version / patch from developing
        this app, just copying laravel development files to friends)
      </p>
      <p>
        I developed this app in laravel, trying to develop many features being
        offered to be developed (Learning MVC, Schema Builder, Middleware,
        Authorization, API, Etc) so i would enrich my knowledge developing
        laravel project (I did email notification too, but it wasn't included in
        the finished app for the internship, just development to learn more).
        And used JavaScript lib or framework like VueJS, Axios, etc. the app
        being delivered for internship wasn't in english (it was in bahasa or
        indonesia language), i did make this in english so it can be considered
        as project experience.
      </p>
      <p>
        Having heard from my vocational school friend that had already working
        as a programmer used VueJS on their project, and how it helped him in
        managing interfaces easier, and of course JavaScript being hot topic at
        that time, making me considering using VueJS at my laravel project too.
        making the app as an hybrid MPA/SPA, while still using blade as view,
        and vue components to work with interfaces.
      </p>
      <p>
        In this project, i haven't learn or consider using Vue Router to route
        my projects, with some kind of buggy interface (refreshing page will
        reroute user into dashboard/landing page, ignoring previous component
        viewed by user), i would only make few laravel blade view to route login
        page, then pages based on certain user level (Of course with auth,
        redirecting access to admin or student landing page without log on or
        invalid crsf token access to login page).
      </p>
      <p>
        Since it took me 2-3 semester to develop this app (because there is no
        end game/main goal to finish the app just like the head of civil
        engineering lab wanted, he just wanted an functioning app to be
        tinkered, if not being used on civil engineering lab, and my lazy ass
        postponing working on it). it took longer than i anticipated to finish
        my internship. Approaching near the end of 10th semester, i met with the
        head of civil engineering laboratory to consult about delivering the
        app, without finishing it as we discussed before. The head of civil
        engineering laboratory just declare the app as finished so i can finish
        my internship assignment (Thank you to sir Muttaqin for trusting me and
        helped me finish my internship).
      </p>
    </template>
  </div>
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
  async mounted() {
    if (
      this.viewed == "manage-cost-and-schedules-for-civil-construction-app" ||
      this.viewed == "optional-course-scheduling-app"
    ) {
      this.showSlides(this.slideIndex);
    }
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
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
};
</script>
