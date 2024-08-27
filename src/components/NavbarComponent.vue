<template>
  <nav class="navbar">
    <div class="title">xwatever's portfolio</div>
    <!-- <i
      class="fa-regular toggle-sidebar-button centerofcontent"
      :class="{
        'fa-circle-down': !dropDownMenu,
        'fa-circle-up': dropDownMenu,
      }"
    >
    </i> -->

    <div class="menu">
      <router-link
        title="My socials and contacts"
        to="/home"
        class="link"
        :class="{
          active: viewedPage == 'home',
        }"
      >
        HOME
      </router-link>
      <router-link
        title="My life summary, probably"
        to="/about"
        class="link"
        :class="{
          active: viewedPage == 'about',
        }"
      >
        ABOUT
      </router-link>
      <router-link
        title="More to come, probably still having my assignments from my college days as projects"
        to="/projects"
        class="link"
        :class="{
          active: viewedPage == 'projects',
        }"
      >
        PROJECTS
      </router-link>
      <i
        title="See my curriculum vitae or resume"
        class="view-button fa-solid fa-file"
      ></i>
    </div>

    <div
      class="mobile-config fa-solid"
      :class="{
        active: dropDownMenu,
        'fa-bars': mobileView,
      }"
      title="Menu dropdown"
    ></div>
  </nav>
</template>

<script>
export default {
  props: ["width"],
  watch: {
    $route: function (from, to) {
      if (to !== from) {
        this.viewedPage = from.name;
      }
    },
  },
  mounted() {
    if (this.width < 550) {
      this.mobileView = true;
    }
  },
  data: function () {
    return {
      mobileView: false,
      dropDownMenu: false,
      viewedPage: "home",
    };
  },
  methods: {},
};
</script>
