<template>
  <div id="scrollbar"></div>
  <navbar :width="width" @clicked="toggleNavMenu" @height="getNavbarHeight" />

  <sidebar />

  <router-view
    :view="view"
    :subView="subView"
    :width="width"
    :height="height"
    :navbarHeight="navbarHeight"
    :bodyOverflow="bodyOverflow"
    :keydownAndWheelActive="keydownAndWheelActive"
    @height="toggleScroll"
    @handleScrolling="toggleHandleScrolling"
  />
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
      height: window.innerHeight,
      bodyOverflow: "",
      navbarHeight: 0,
      view: "home",
      subView: "about-me",
      keydownAndWheelActive: true,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.handleSession();
  },
  mounted() {
    this.handleSession();

    this.bodyOverflow = window.getComputedStyle(document.body).overflow;
    document.getElementById("scrollbar").style.display = "block";

    window.addEventListener("keydown", this.keydownHandler);
    window.addEventListener("wheel", this.wheelHandler);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    getNavbarHeight(e) {
      this.navbarHeight = e;
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

      this.toggleScroll({ state: true });

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
    toggleRouteKeyDownMain(e) {
      if (e.keyCode === 40) {
        // arrow key pressed down

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
            }, 50);
          }
        }

        sessionStorage.setItem(
          "aboutSubView",
          JSON.stringify(this.subView != undefined ? this.subView : "")
        );
        sessionStorage.setItem("view", JSON.stringify(this.view));
      } else if (e.keyCode === 38) {
        // arrow key pressed up

        if (this.view == "projects") {
          this.view = "about";
          setTimeout(() => {
            router.push({ name: "about" });
          }, 50);
        } else if (this.view == "about") {
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
    toggleRouteWheelMain(e) {
      if (e.deltaY >= 0) {
        // wheel or scroll down
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
            }, 50);
          }
        }

        sessionStorage.setItem(
          "aboutSubView",
          JSON.stringify(this.subView != undefined ? this.subView : "about-me")
        );
        sessionStorage.setItem("view", JSON.stringify(this.view));
      } else if (e.deltaY <= 0) {
        console.log("scrolling up");

        // wheel or scroll up
        if (this.view == "projects") {
          this.view = "about";
          setTimeout(() => {
            router.push({ name: "about" });
          }, 50);
        } else if (this.view == "about") {
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
    toggleScroll(event) {
      if (event.state == false) {
        this.keydownAndWheelActive = true;
        document.body.style.overflowY = "scroll";
        document.getElementById("scrollbar").style.display = "none";
        setTimeout(() => {
          this.keydownAndWheelActive = false;
        }, 50);
      }
      if (event.state == null) {
        this.keydownAndWheelActive = false;
      } else {
        document.getElementById("scrollbar").style.display = "block";
        document.body.style.overflowY = "hidden";
        this.keydownAndWheelActive = true;
        setTimeout(() => {
          window.addEventListener("keydown", this.keydownHandler);
          window.addEventListener("wheel", this.wheelHandler);
        }, 500);

        if (event.direction == "up") {
          if (this.view == "projects") {
            this.view = "about";
            setTimeout(() => {
              router.push({ name: "about" });
            }, 50);
          } else if (this.view == "about") {
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
        } else if (event.direction == "down") {
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
              }, 50);
            }
          }
        }
      }
    },
    wheelHandler(e) {
      if (this.keydownAndWheelActive == true) {
        this.toggleRouteWheelMain(e);
      } else {
        window.removeEventListener("wheel", this.wheelHandler);
      }
    },
    keydownHandler(e) {
      if (this.keydownAndWheelActive == true) {
        this.toggleRouteKeyDownMain(e);
      } else {
        window.removeEventListener("keydown", this.keydownHandler);
      }
    },
  },
};
</script>
