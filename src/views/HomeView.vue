<template>
  <div id="home" :class="{ fade: home }">
    <div class="image-profile">
      <img
        :src="profile_image"
        :style="{
          position: 'absolute',
          top: 'calc(50% - 97px)',
          left: '10%',
          width: 'calc(195px + 1vh)',
          height: 'calc(195px + 1vh)',
          'border-radius': '50%',
        }"
      />
    </div>
    <div id="introduction" :class="{ 'fade-left': introduction }">
      Hello, My name is Muhammad Darmawan
      <span class="details"
        >I'm a Fresh Graduate, Aspiring to become a Front-End Developer</span
      >
      <div class="contacts">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/muhammad_darmawan09/"
        >
          <i class="fa-brands fa-square-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/muhammad-darmawan-595420227/"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/xwatever"
        >
          <i class="fa-brands fa-square-github"></i>
        </a>
      </div>
    </div>
    <!-- <div id="toggle-down">
      <router-link to="/about">
        <i class="fa-solid fa-angles-down"></i>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import profile_image from "./../assets/img.jpg";
import router from "./../router";

export default {
  data: function () {
    return {
      profile_image: profile_image,
      home: false,
      introduction: false,
    };
  },
  mounted() {
    this.home = true;
    setTimeout(() => {
      this.introduction = true;
    }, 10);
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 40) {
        // arrow key pressed
        router.push({ name: "about" });
      }
    });

    window.addEventListener("wheel", (e) => {
      if (e.deltaY >= 0) {
        // Wheel Down
        router.push({ name: "about" });
      }
    });
  },
  methods: {},
};
</script>
