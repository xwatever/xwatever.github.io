<template>
  <div id="home">
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
    <div class="introduction">
      Hello, My name is Muhammad Darmawan
      <span class="details"
        >I'm a Fresh Graduate for Bachelor of Informatics Engineering at
        Universitas Islam Riau</span
      >
      <span class="details">Aspiring to become Front End Web Developer</span>
      <div class="contacts">
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-github"></i>
        <i class="fa-solid fa-square-envelope"></i>
      </div>
    </div>
  </div>
</template>

<script>
import profile_image from "./../assets/img.jpg";

export default {
  data: function () {
    return {
      profile_image: profile_image,
    };
  },
  methods: {},
};
</script>
