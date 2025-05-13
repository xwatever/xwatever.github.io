<template>
  <div id="about">
    <div id="about-me" :class="{ fade: subView == 'about-me' }">
      <div class="title">About me</div>
      <div class="content" :class="{ 'fade-in': subView == 'about-me' }">
        <p>
          I live in Pekanbaru, Indonesia. I have learned code for 10 years,
          attending Vocational Highschool as Software Engineer student, college
          as Informatics Technology student, and haven't started my career as a
          programmer yet. I want to start my journey as a Front-End Developer to
          make myself better at designing.
        </p>
        <p>
          I have learned to use Framework like Laravel, VueJS, ExpressJS for my
          college assignments. I strive for making something i have visualised
          works, but sometimes i'm just trying to make things simple if i dont
          have the capability for it. Things would've been better if i'm
          developing or creating more stuffs so i can improve my knowledge more.
        </p>
      </div>
    </div>
    <div id="education" :class="{ fade: subView == 'education' }">
      <div class="title">My Education</div>
      <div class="content">
        <div class="institute" :class="{ 'fade-in': subView == 'education' }">
          Bachelor of Informatics Engineering
          <div class="left">
            <span class="location"
              >Universitas Islam Riau, Pekanbaru, Indonesia</span
            >
            <div class="right">
              <span class="date"> September 2017 - June 2024 </span>
            </div>
          </div>
          <div class="details">
            I was assigned as laboratory assistant for practicum study at
            certain subject. My role was to teach juniors to implement code that
            they have learned from lecturer at class, as well as assisting
            lecturer in evaluate student's grade based on their performance at
            practicum session and laboratory assignments. My concentration was
            Artificial Intelligent, and i'm intrigued by how math and some
            formulae have made something so complex.
          </div>
        </div>
        <div
          class="last institute"
          :class="{ 'fade-in': subView == 'education' }"
        >
          Graduate of Vocational High School for Computer Software Engineering
          Major
          <div class="left">
            <span class="location">
              Sekolah Menengah Kejuruan Negeri 2 Pekanbaru, Indonesia
            </span>
            <div class="right">
              <span class="date">July 2014 - June 2017</span>
            </div>
          </div>
          <div class="details">
            I learned coding for the first time here. Was taught basics of
            programming languages. It feels like magic when i tried to implement
            code to work, and felt like i'm doing some hacking stuff, LOL. Being
            intrigued by how software created, this is where i started to think
            "maybe, having a job as a programmer would be good for my future".
          </div>
        </div>
      </div>
    </div>

    <div id="work" :class="{ fade: subView == 'work' }">
      <div class="title">I had and have worked in these places</div>
      <div class="content">
        <div class="job" :class="{ 'fade-in': subView == 'work' }">
          September 2022 - Present, Pekanbaru City, Riau Province, Indonesia,
          Department of Population and Civil Registration - Back Office Employee
        </div>
        <div class="job" :class="{ 'fade-in': subView == 'work' }">
          September 2019 - July 2021, Pekanbaru City, Riau Province, Indonesia,
          Universitas Islam Riau - Laboratory Assistant
        </div>
        <div class="cv-n-resume">
          <div class="left">
            <!-- Check out my resume here -->
            <span class="resume" @click="toggleResume"
              >Check out my resume here</span
            >
            <div class="right">
              <!-- Check out my cv here -->
              <span class="cv" @click="toggleCV">Check out my cv here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import resume from "./../../assets/v1/pdf/muhammad-darmawan-resume.pdf";
import cv from "./../../assets/v1/pdf/muhammad-darmawan-cv.pdf";

export default {
  props: [
    "view",
    "subView",
    "width",
    "height",
    "navbarHeight",
    "keydownAndWheelActive",
    "mobileView",
  ],
  watch: {
    subView(val) {
      setTimeout(() => {
        var element =
          document.getElementById(val) != null
            ? document.getElementById(val)
            : document.getElementById("about-me");
        var headerOffset =
          this.width >= 1466 ? 80 + (3 * this.width) / 100 : 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        this.element =
          document.getElementById(val) != null
            ? document.getElementById(val)
            : document.getElementById("about-me");

        setTimeout(() => {
          var height = element.getBoundingClientRect().height;

          if (
            height > this.height - this.navbarHeight + 1 &&
            !this.mobileView
          ) {
            this.$emit("height", { state: false });
          }
        }, 95);
      }, 50);
    },
    keydownAndWheelActive(val) {
      if (val == false && !this.mobileView) {
        window.addEventListener("keydown", (e) => {
          this.toggleRouteKeyDown(e);
        });
        window.addEventListener("wheel", (e) => {
          this.toggleRouteWheel(e);
        });
      }
    },
  },

  data: function () {
    return {
      onTop: false,
      onBottom: false,
      element: null,

      resume: resume,
      cv: cv,
    };
  },
  mounted() {
    if (this.mobileView == true) {
      document.getElementById("scrollbar").style.display = "none";
      document.body.style.overflowY = "scroll";
    } else {
      setTimeout(() => {
        this.toggleView();
        this.onTop = false;
        this.onBottom = false;
      }, 150);
    }
  },
  methods: {
    toggleView() {
      setTimeout(() => {
        var element =
          document.getElementById(this.subView) != null
            ? document.getElementById(this.subView)
            : document.getElementById("about-me");
        var headerOffset =
          this.width >= 1466 ? 80 + (3 * this.width) / 100 : 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        this.onTop = true;

        setTimeout(() => {
          var height = element.getBoundingClientRect().height;
          if (
            height > this.height - this.navbarHeight + 1 &&
            !this.mobileView
          ) {
            this.$emit("height", { state: false });
          }
        }, 95);
      }, 50);
    },
    toggleResume() {
      window.open(resume, "_blank");
    },
    toggleCV() {
      window.open(cv, "_blank");
    },
    toggleRouteKeyDown(e) {
      setTimeout(() => {
        if (this.onTop == true && this.keydownAndWheelActive == false) {
          if (e.keyCode === 38) {
            setTimeout(() => {
              this.$emit("height", { state: true, direction: "up" });
            }, 200);
          }
        }
      }, 100);

      var cumulativeOffset = function (element) {
        var top = 0;
        var bottom = 0;
        var offsetHeight = element.offsetHeight;

        do {
          top += element.offsetTop || 0;
          bottom += element.offsetTop || 0;
          element = element.offsetParent;
        } while (element);

        return {
          top: top,
          bottom: bottom + offsetHeight,
        };
      };

      if (this.keydownAndWheelActive == false) {
        setTimeout(() => {
          var element_top =
            cumulativeOffset(document.getElementById(this.element)).top -
            this.navbarHeight;

          var element_bottom =
            cumulativeOffset(document.getElementById(this.element)).bottom -
            this.navbarHeight;

          setTimeout(() => {
            var top = window.pageYOffset || document.documentElement.scrollTop;

            var bottom =
              window.pageYOffset + (this.height - this.navbarHeight) ||
              document.documentElement.scrollBottom;

            setTimeout(() => {
              var scrolled = Math.abs(window.scrollY - top);

              if (element_top >= top - scrolled) {
                window.scrollTo({
                  top: element_top,
                  behavior: "smooth",
                });
                setTimeout(() => {
                  this.onTop = true;
                  document.getElementById("scrollbar").style.display = "block";
                  document.body.style.overflowY = "hidden";
                }, 50);

                if (this.onTop == true) {
                  if (e.keyCode === 38) {
                    this.onTop = false;
                  } else {
                    setTimeout(() => {
                      document.body.style.overflowY = "scroll";
                      document.getElementById("scrollbar").style.display =
                        "none";
                    }, 50);
                  }
                }
              } else if (element_bottom <= bottom + scrolled) {
                window.scrollTo({
                  top: top - (bottom - element_bottom),
                  behavior: "smooth",
                });
                setTimeout(() => {
                  this.onBottom = true;
                  document.getElementById("scrollbar").style.display = "block";
                  document.body.style.overflowY = "hidden";
                }, 50);

                if (this.onBottom == true) {
                  if (e.keyCode === 40) {
                    setTimeout(() => {
                      this.$emit("height", { state: true, direction: "down" });

                      this.onBottom = false;

                      setTimeout(() => {
                        this.toggleRouteWheel();
                        this.toggleRouteKeyDown();
                      }, 100);
                    }, 200);
                  } else {
                    setTimeout(() => {
                      document.body.style.overflowY = "scroll";
                      document.getElementById("scrollbar").style.display =
                        "none";
                    }, 50);
                  }
                }
              } else {
                this.onTop = false;
                this.onBottom = false;
              }
            }, 100);
          }, 100);
        }, 50);
      } else if (this.keydownAndWheelActive == true) {
        window.removeEventListener("keydown", this.toggleRouteKeyDown);
      }
    },
    toggleRouteWheel(e) {
      setTimeout(() => {
        if (this.onTop == true && this.keydownAndWheelActive == false) {
          if (e.deltaY <= 0) {
            // scrolled up
            setTimeout(() => {
              this.$emit("height", { state: true, direction: "up" });
            }, 200);
          }
        }
      }, 100);

      var cumulativeOffset = function (element) {
        var top = 0;
        var bottom = 0;
        var offsetHeight = element.offsetHeight;

        do {
          top += element.offsetTop || 0;
          bottom += element.offsetTop || 0;
          element = element.offsetParent;
        } while (element);

        return {
          top: top,
          bottom: bottom + offsetHeight,
        };
      };

      if (this.keydownAndWheelActive == false) {
        setTimeout(() => {
          var element_top =
            cumulativeOffset(document.getElementById(this.element)).top -
            this.navbarHeight;

          var element_bottom =
            cumulativeOffset(document.getElementById(this.element)).bottom -
            this.navbarHeight;

          setTimeout(() => {
            var top = window.pageYOffset || document.documentElement.scrollTop;

            var bottom =
              window.pageYOffset + (this.height - this.navbarHeight) ||
              document.documentElement.scrollBottom;

            setTimeout(() => {
              var scrolled = Math.abs(window.scrollY - top);

              if (element_top >= top - scrolled) {
                window.scrollTo({
                  top: element_top,
                  behavior: "smooth",
                });
                setTimeout(() => {
                  this.onTop = true;
                  document.getElementById("scrollbar").style.display = "block";
                  document.body.style.overflowY = "hidden";
                }, 50);

                if (this.onTop == true) {
                  if (e.deltaY <= 0) {
                    this.onTop = false;
                  } else {
                    setTimeout(() => {
                      document.body.style.overflowY = "scroll";
                      document.getElementById("scrollbar").style.display =
                        "none";
                    }, 50);
                  }
                } else {
                  setTimeout(() => {
                    document.body.style.overflowY = "scroll";
                    document.getElementById("scrollbar").style.display = "none";
                  }, 50);
                }
              } else if (element_bottom <= bottom + scrolled) {
                window.scrollTo({
                  top: top - (bottom - element_bottom),
                  behavior: "smooth",
                });
                setTimeout(() => {
                  this.onBottom = true;
                  document.getElementById("scrollbar").style.display = "block";
                  document.body.style.overflowY = "hidden";
                }, 50);

                if (this.onBottom == true) {
                  if (e.deltaY >= 0) {
                    // scrolled down
                    setTimeout(() => {
                      this.$emit("height", { state: true, direction: "down" });

                      this.onBottom = false;

                      setTimeout(() => {
                        this.toggleRouteWheel();
                        this.toggleRouteKeyDown();
                      }, 100);
                    }, 200);
                  } else {
                    setTimeout(() => {
                      document.body.style.overflowY = "scroll";
                      document.getElementById("scrollbar").style.display =
                        "none";
                    }, 50);
                  }
                }
              } else {
                this.onTop = false;
                this.onBottom = false;
              }
            }, 100);
          }, 100);
        }, 50);
      } else if (this.keydownAndWheelActive == true) {
        window.removeEventListener("wheel", this.toggleRouteWheel);
      }
    },
  },
};
</script>
