<template>
  <div id="cv" class="fade-in" style="display: none">
    <div id="contacts-content"></div>
    <div id="content">
      <!--
        ==============================================
          Name
        ==============================================
      -->
      <div class="name">
        <span>Muhammad Darmawan</span>
      </div>

      <!--
        ==============================================
          Contacts
        ==============================================
      -->
      <div class="contacts">
        <ul class="personal-info">
          <li><i class="fa-solid fa-image-portrait"></i>&nbsp;&nbsp;Male</li>
          <li>
            <i class="fa-solid fa-calendar"></i>&nbsp;&nbsp;August 9, 1999
          </li>
          <li>
            <i class="fa-brands fa-square-whatsapp"></i
            >&nbsp;&nbsp;+62-822-8267-4247
          </li>
        </ul>
        <ul class="links">
          <li>
            <i class="fa-solid fa-envelope"></i
            >&nbsp;&nbsp;muhammaddarmawan1999@gmail.com
          </li>
          <li>
            <i class="fa-brands fa-square-github"></i>&nbsp;&nbsp;xwatever
          </li>
          <li>
            <i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;Muhammad Darmawan
          </li>
        </ul>
        <img
          :src="cv_image"
          :style="{ height: '195px', 'margin-top': '-85px' }"
        />
      </div>

      <!--
        ==============================================
          Below Contents
        ==============================================
      -->
      <div class="below-content">
        <!--
          =============================================
            Summary
          =============================================
        -->
        <div class="summary">
          <span>Summary</span>
          <hr />
          <p>
            I am a fresh graduate of Bachelor of Informatics Engineering at
            Universitas Islam Riau. I am aspiring to be working as a programmer.
            I want to bring out everything i have learned to put into work,
            making something that i can be proud of.
          </p>
        </div>

        <!--
          =============================================
            Skills
          =============================================
        -->
        <div class="skills">
          <span>Skils</span>
          <hr />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Laravel</li>
            <li>VueJS</li>
            <li>ExpressJS</li>
          </ul>
        </div>

        <!--
          =============================================
            Experience
          =============================================
        -->
        <div class="experience">
          <span>Experience</span>
          <hr />

          <p>Project Experience</p>
          <ul>
            <li class="project">
              Manage Cost and Schedules for Civil Construction App
            </li>
            <li class="date">April 2023 - June 2024</li>
            <li class="details">
              Thesis assignment for Informatics Engineering, Made with VueJS +
              ExpressJS
            </li>
          </ul>
          <ul>
            <li class="project-">Optional Course Scheduling App</li>
            <li class="date">July 2020 - December 2021</li>
            <li class="details work">
              Internship assignment for Informatics Engineering, Made with
              Laravel + VueJS
            </li>
          </ul>

          <p>Work Experience</p>
          <ul>
            <li class="project">
              Department of Population and Civil Registration - Back Office
              Employee
            </li>
            <li class="date">September 2022 - Present</li>
            <li class="details"></li>
          </ul>
          <ul>
            <li class="project-">
              Universitas Islam Riau - Laboratory Assistant
            </li>
            <li class="date">September 2019 - July 2021</li>
            <li class="details"></li>
          </ul>
        </div>

        <!--
          =============================================
            Education
          =============================================
        -->
        <div class="education">
          <span>Education</span>
          <hr />

          <div class="institute">
            <ul>
              <li class="degree">Bachelor of Informatics Engineering</li>
              <li class="location">Universitas Islam Riau, Indonesia</li>
              <li class="date">2017 - 2024</li>
            </ul>
          </div>
          <div class="institute instance">
            <ul>
              <li class="degree">
                Graduate of Computer Science Engineer Major for Vocational High
                School
              </li>
              <li class="location">
                Sekolah Menengah Kejuruan Negara 2 Pekanbaru, Indonesia
              </li>
              <li class="date">2014 - 2017</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cv_image from "./../assets/img/cv_img.png";

export default {
  data: function () {
    return {
      cv_image: cv_image,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      window.addEventListener("beforeprint", () => {
        document.title = "muhammad-darmawan-cv";
        document.body.style.backgroundColor = "#dadada";
      });
      window.addEventListener("afterprint", () => {
        document.body.style.backgroundColor = "#dfd4d4";
      });
      window.print();
    }, 3500);
  },
};
</script>
