<template>
  <div id="scrollbar"></div>
  <navbar
    :width="width"
    @clicked="toggleNavMenu"
    :mobileView="mobileView"
    @height="getNavbarHeight"
  />

  <div class="wrapper">
    <sidebar />

    <router-view
      :view="view"
      :subView="subView"
      :width="width"
      :keydownAndWheelActive="keydownAndWheelActive"
      @height="toggleScroll"
      @handleScrolling="toggleHandleScrolling"
      @about="toggleAboutSubView"
    />
  </div>
</template>

<script>
import Navbar from "./components/NavbarComponent.vue";
import Sidebar from "./components/SidebarComponent.vue";
import router from "./router";
import store from "./store";

import "./assets/css/main.css";
import "./assets/css/page.css";
import "./assets/css/mobile_view.css";
import "./assets/css/wider_resolution_view.css";
import "./assets/css/animation.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    sidebar: Sidebar,
  },
  data: function () {
    return {
      // width: window.innerWidth,
      // height: window.innerHeight,
      // navbarHeight: 0,
      // view: "home",
      // subView: "about-me",
      // keydownAndWheelActive: true,
      // ScrollDebounce: true,
      width: 0,
      height: 0,
      navbarHeight: 0,
      view: "home",
      subView: "about-me",
      keydownAndWheelActive: true,
      ScrollDebounce: false,
      mobileView: false,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);

    this.handleResize();
    this.handleSession();
  },
  mounted() {
    this.handleSession();

    setTimeout(() => {
      // let view = "home";
      // let subView = "about-me";
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.view = view;
      this.subView = subView;
      setTimeout(() => {
        console.log(this.width);
        console.log(this.height);
        console.log(this.navbarHeight);
        console.log(this.view);
        console.log(this.subView);
        console.log(this.keydownAndWheelActive);
        console.log(this.ScrollDebounce);

        if (this.width <= 768) {
          this.mobileView = true;
          document.getElementById("scrollbar").style.display = "none";
          document.body.style.overflowY = "scroll";
        } else {
          this.mobileView = false;
          document.getElementById("scrollbar").style.display = "block";
          document.body.style.overflowY = "hidden";
        }

        setTimeout(() => {
          if (!this.mobileView) {
            window.addEventListener("keydown", this.keydownHandler);
            window.addEventListener("wheel", this.wheelHandler);
          }
        }, 150);
      }, 50);
    }, 50);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      setTimeout(() => {
        if (this.width <= 768) {
          this.mobileView = true;
        } else {
          this.mobileView = false;
        }
      }, 100);
    },
    getNavbarHeight(e) {
      this.navbarHeight = e;
    },
    handleSession() {
      store.dispatch("getView");

      setTimeout(() => {
        this.view = store.state.view;
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

      if (!this.mobileView) {
        this.toggleScroll({ state: true });
      }

      if (e == "home") {
        this.subView = "about-me";
      } else if (e == "projects") {
        this.subView = "work";
      }
      setTimeout(() => {
        sessionStorage.setItem(
          "aboutSubView",
          JSON.stringify(this.subView != undefined ? this.subView : "")
        );
        sessionStorage.setItem("view", JSON.stringify(this.view));
        setTimeout(() => {
          store.dispatch("getView");
          store.dispatch("getAboutSubView");
        }, 150);
      }, 100);
    },
    toggleRouteKeyDownMain(e) {
      if (e.keyCode === 40) {
        // arrow key pressed down

        if (this.view == "home") {
          this.view = "about";
          setTimeout(() => {
            router.push({ name: "about" });
          }, 50);
        } else if (this.view == "about" && this.mobileView == false) {
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

        setTimeout(() => {
          sessionStorage.setItem(
            "aboutSubView",
            JSON.stringify(this.subView != undefined ? this.subView : "")
          );
          sessionStorage.setItem("view", JSON.stringify(this.view));
          setTimeout(() => {
            store.dispatch("getView");
            store.dispatch("getAboutSubView");
          }, 150);
        }, 100);
      } else if (e.keyCode === 38) {
        // arrow key pressed up

        if (this.view == "projects") {
          this.view = "about";
          setTimeout(() => {
            router.push({ name: "about" });
          }, 50);
        } else if (this.view == "about" && this.mobileView == false) {
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

        setTimeout(() => {
          sessionStorage.setItem(
            "aboutSubView",
            JSON.stringify(this.subView != undefined ? this.subView : "")
          );
          sessionStorage.setItem("view", JSON.stringify(this.view));
          setTimeout(() => {
            store.dispatch("getView");
            store.dispatch("getAboutSubView");
          }, 150);
        }, 100);
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
        } else if (this.view == "about" && this.mobileView == false) {
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

        setTimeout(() => {
          sessionStorage.setItem(
            "aboutSubView",
            JSON.stringify(this.subView != undefined ? this.subView : "")
          );
          sessionStorage.setItem("view", JSON.stringify(this.view));
          setTimeout(() => {
            store.dispatch("getView");
            store.dispatch("getAboutSubView");
          }, 150);
        }, 100);
      } else if (e.deltaY <= 0) {
        // wheel or scroll up
        if (this.view == "projects") {
          this.view = "about";
          setTimeout(() => {
            router.push({ name: "about" });
          }, 50);
        } else if (this.view == "about" && this.mobileView == false) {
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

        setTimeout(() => {
          sessionStorage.setItem(
            "aboutSubView",
            JSON.stringify(this.subView != undefined ? this.subView : "")
          );
          sessionStorage.setItem("view", JSON.stringify(this.view));
          setTimeout(() => {
            store.dispatch("getView");
            store.dispatch("getAboutSubView");
          }, 150);
        }, 100);
      }
    },
    toggleScroll(event) {
      setTimeout(() => {
        if (event.state == false) {
          if (!this.mobileView) {
            this.keydownAndWheelActive = true;
            document.body.style.overflowY = "scroll";
            document.getElementById("scrollbar").style.display = "none";
            setTimeout(() => {
              this.keydownAndWheelActive = false;
              setTimeout(() => {
                this.wheelHandler();
                this.keydownHandler();
              }, 50);
            }, 50);
          }
        } else if (event.state == null) {
          if (!this.mobileView) {
            this.keydownAndWheelActive = false;
          }
        } else {
          if (!this.mobileView) {
            this.keydownAndWheelActive = true;
            document.getElementById("scrollbar").style.display = "block";
            document.body.style.overflowY = "hidden";

            window.addEventListener("keydown", this.keydownHandler);
            window.addEventListener("wheel", this.wheelHandler);

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
        }
      }, 75);
    },
    wheelHandler(e) {
      if (this.keydownAndWheelActive == true) {
        if (this.ScrollDebounce) return;

        this.toggleRouteWheelMain(e);

        this.ScrollDebounce = true;
        setTimeout(() => {
          this.ScrollDebounce = false;
        }, 1500);
      } else {
        window.removeEventListener("wheel", this.wheelHandler);
      }
    },
    keydownHandler(e) {
      if (this.keydownAndWheelActive == true) {
        if (this.ScrollDebounce) return;

        this.toggleRouteKeyDownMain(e);

        this.ScrollDebounce = true;
        setTimeout(() => {
          this.ScrollDebounce = false;
        }, 1500);
      } else {
        window.removeEventListener("keydown", this.keydownHandler);
      }
    },
    toggleAboutSubView() {
      setTimeout(() => {
        store.dispatch("getAboutSubView");
        this.subView = "";
        setTimeout(() => {
          this.subView = store.state.aboutSubView;
        }, 100);
      }, 150);
    },
  },
};
</script>
