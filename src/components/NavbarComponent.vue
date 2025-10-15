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
      <span
        title="My socials and contacts"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'home',
        }"
        >HOME
      </span>
      <span
        title="My life summary, probably"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'about',
        }"
      >
        ABOUT
      </span>
      <span
        title="More to come, probably still having my assignments from my college days as projects"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'projects',
        }"
      >
        PROJECTS
      </span>

      <!--

      <router-link
        title="More to come, probably still having my assignments from my college days as projects"
        to="/cv"
        @click="toggleMenu"
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
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'resume',
        }"
      >
        Resume
      </router-link>

      <span
        title="More to come, probably still having my assignments from my college days as projects"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'cv',
        }"
      >
        Curriculum Vitae
      </span>
      <span
        title="More to come, probably still having my assignments from my college days as projects"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'resume',
        }"
      >
        Resume
      </span> -->
      <!-- <i
        title="See my curriculum vitae or resume"
        class="view-button fa-solid fa-file"
      ></i> -->

      <!-- <router-link
        title="More to come, probably still having my assignments from my college days as projects"
        to="/cv"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'cv',
        }"
      >
        Curriculum Vitae
      </router-link>
-->
      <!-- <router-link
        title="More to come, probably still having my assignments from my college days as projects"
        to="/resume"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'resume',
        }"
      >
        Resume
      </router-link> -->

      <!-- <router-link
        title="More to come, probably still having my assignments from my college days as projects"
        to="/cv"
        @click="toggleMenu"
        class="link"
        :class="{
          active: viewedPage == 'cv',
        }"
      >
        Curriculum Vitae
      </router-link> -->
    </div>

    <div
      class="fa-solid"
      :class="{
        active: dropDownMenu,
        'fa-bars': mobileView,
        'mobile-config': mobileView,
      }"
      title="Menu dropdown"
      @click="toggleDropdown"
    ></div>
  </nav>
</template>

<script>
import router from "./../router";

export default {
  props: ["mobileView"],
  watch: {
    $route: function (from, to) {
      if (to !== from) {
        this.dropDownMenu = false;
        this.viewedPage =
          from.name == "manage-cost-and-schedules-for-civil-construction-app" ||
          from.name == "optional-course-scheduling-app"
            ? "projects"
            : from.name;
      }
    },
  },
  mounted() {
    var navbarHeight = document
      .getElementsByClassName("navbar")[0]
      .getBoundingClientRect().height;
    if (!this.mobileView) {
      this.$emit("height", navbarHeight);
    }
  },
  data: function () {
    return {
      dropDownMenu: false,
      viewedPage: "home",
    };
  },
  methods: {
    toggleDropdown() {
      this.dropDownMenu = !this.dropDownMenu;
    },
    toggleMenu(e) {
      const route = e.target.innerHTML.replace(/ /g, "");
      if (route == "HOME") {
        this.$emit("clicked", "home");
        setTimeout(() => {
          router.push({ name: "home" });
        }, 50);
      } else if (route == "ABOUT") {
        this.$emit("clicked", "about");
        setTimeout(() => {
          router.push({ name: "about" });
        }, 50);
      } else if (route == "PROJECTS") {
        this.$emit("clicked", "projects");
        setTimeout(() => {
          router.push({ name: "projects" });
        }, 50);
      }
    },
  },
};
</script>
