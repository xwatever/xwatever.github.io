<template>
  <div id="home" :class="{ fade: home }">
    <div class="image-profile">
      <img :src="profile_image" class="img" />
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
  </div>

  <!-- <div id="toggle-down">
    <router-link to="/about">
      <i class="fa-solid fa-angles-down"></i>
    </router-link>
  </div> -->
</template>

<script>
import profile_image from "./../assets/img/img.jpg";

export default {
  props: ["view"],
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
    }, 75);
    this.$emit("height", { state: true });
  },
};
</script>
