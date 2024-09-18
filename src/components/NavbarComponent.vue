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

    <div
      class="menu"
      :class="{
        active: dropDownMenu,
      }"
    >
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
      <router-link
        title="More to come, probably still having my assignments from my college days as projects"
        to="/cv"
        class="link"
        :class="{
          active: viewedPage == 'cv',
        }"
      >
        Curriculum Vitae
      </router-link>
      <router-link
        title="More to come, probably still having my assignments from my college days as projects"
        to="/resume"
        class="link"
        :class="{
          active: viewedPage == 'resume',
        }"
      >
        Resume
      </router-link>
      <!-- <i
        title="See my curriculum vitae or resume"
        class="view-button fa-solid fa-file"
      ></i> -->
    </div>

    <div
      class="mobile-config fa-solid"
      :class="{
        active: dropDownMenu,
        'fa-bars': mobileView,
      }"
      title="Menu dropdown"
      @click="toggleDropdown"
    ></div>
  </nav>
</template>

<script>
export default {
  props: ["width"],
  watch: {
    $route: function (from, to) {
      if (to !== from) {
        this.dropDownMenu = false;
        this.viewedPage = from.name;
      }
    },
    width: function (oldItem, newItem) {
      console.log(oldItem);
      console.log(newItem);
      if (oldItem < 550) {
        this.mobileView = true;
      } else if (oldItem > 550) {
        this.mobileView = false;
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
  methods: {
    toggleDropdown() {
      this.dropDownMenu = !this.dropDownMenu;
    },
  },
};
</script>
