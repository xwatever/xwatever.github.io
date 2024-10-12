<template>
  <navbar :width="width" @clicked="toggleNavMenu" />

  <sidebar />

  <router-view :view="view" :subView="subView" :width="width" />
</template>

<script>
import Navbar from "./components/NavbarComponent.vue";
import Sidebar from "./components/SidebarComponent.vue";
import router from "./router";
import store from "./store";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    sidebar: Sidebar,
  },
  data: function () {
    return {
      width: window.innerWidth,
      view: "home",
      subView: "about-me",
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  mounted() {
    this.handleSession();

    window.addEventListener("keydown", (e) => {
      this.toggleRouteKeyDown(e);
    });

    window.addEventListener("wheel", (e) => {
      this.toggleRouteWheel(e);
    });
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;      
    },
    handleSession() {
      store.dispatch("getView");
      store.dispatch("getAboutSubView");

      setTimeout(() => {
        this.view = store.state.view;
        this.subView =
          store.state.subView != undefined ? store.state.subView : "about-me";
        if (this.view == "home") {
          router.push({ name: "home" });
        } else if (this.view == "about") {
          router.push({ name: "about" });
        } else if (this.view == "projects") {
          router.push({ name: "projects" });
        }
      }, 50);
    },
    toggleNavMenu(e) {
      this.view = e;
      if (e == "home") {
        this.subView = "about-me";
      } else if (e == "projects") {
        this.subView = "work";
      }
      sessionStorage.setItem(
        "aboutSubView",
        JSON.stringify(this.subView != undefined ? this.subView : "")
      );
      sessionStorage.setItem("view", JSON.stringify(this.view));
    },
    toggleRouteKeyDown(e) {
      if (e.keyCode === 40) {
        // arrow key pressed down
        document.body.style.overflow = "hidden";
        if (this.view == "home") {
          this.view = "about";
          setTimeout(() => {
            router.push({ name: "about" });
          }, 50);
        } else if (this.view == "about") {
          if (this.subView == "about-me") {
            this.subView = "education";
          } else if (this.subView == "education") {
            this.subView = "work";
          } else if (this.subView == "work") {
            this.view = "projects";
            setTimeout(() => {
              router.push({ name: "projects" });
              document.body.style.overflow = "scroll";
            }, 50);
          }
        }

        sessionStorage.setItem(
          "aboutSubView",
          JSON.stringify(this.subView != undefined ? this.subView : "")
        );
        sessionStorage.setItem("view", JSON.stringify(this.view));
        // store.dispatch("getAboutView");
      } else if (e.keyCode === 38) {
        // arrow key pressed up
        if (this.view != "project") {
          document.body.style.overflow = "hidden";
        }
        // if (this.view == "projects") {
        //   this.view = "about";
        //   setTimeout(() => {
        //     router.push({ name: "about" });
        //   }, 50);
        // } else
        if (this.view == "about") {
          if (this.subView == "work") {
            this.subView = "education";
          } else if (this.subView == "education") {
            this.subView = "about-me";
          } else if (this.subView == "about-me") {
            this.view = "home";
            setTimeout(() => {
              router.push({ name: "home" });
            }, 50);
          }
        }

        sessionStorage.setItem(
          "aboutSubView",
          JSON.stringify(this.subView != undefined ? this.subView : "")
        );
        sessionStorage.setItem("view", JSON.stringify(this.view));
      }
    },
    toggleRouteWheel(e) {
      if (e.deltaY >= 0) {
        // wheel or scroll down
        document.body.style.overflow = "hidden";
        if (this.view == "home") {
          this.view = "about";
          setTimeout(() => {
            router.push({ name: "about" });
          }, 50);
        } else if (this.view == "about") {
          if (this.subView == "about-me") {
            this.subView = "education";
          } else if (this.subView == "education") {
            this.subView = "work";
          } else if (this.subView == "work") {
            this.view = "projects";
            setTimeout(() => {
              router.push({ name: "projects" });
              document.body.style.overflow = "scroll";
            }, 50);
          }
        }

        sessionStorage.setItem(
          "aboutSubView",
          JSON.stringify(this.subView != undefined ? this.subView : "about-me")
        );
        sessionStorage.setItem("view", JSON.stringify(this.view));
      } else if (e.deltaY <= 0) {
        // wheel or scroll up
        // if (this.view == "projects") {
        //   this.view = "about";
        //   setTimeout(() => {
        //     router.push({ name: "about" });
        //   }, 50);
        // } else
        if (this.view == "about") {
          if (this.subView == "work") {
            this.subView = "education";
          } else if (this.subView == "education") {
            this.subView = "about-me";
          } else if (this.subView == "about-me") {
            this.view = "home";
            setTimeout(() => {
              router.push({ name: "home" });
            }, 50);
          }
        }

        sessionStorage.setItem(
          "aboutSubView",
          JSON.stringify(this.subView != undefined ? this.subView : "")
        );
        sessionStorage.setItem("view", JSON.stringify(this.view));
      }
    },
  },
};
</script>
