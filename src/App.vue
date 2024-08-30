<template>
  <navbar :width="width" />

  <sidebar />

  <router-view />
</template>

<script>
import Navbar from "./components/NavbarComponent.vue";
import Sidebar from "./components/SidebarComponent.vue";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    sidebar: Sidebar,
  },
  data: function () {
    return {
      width: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>
