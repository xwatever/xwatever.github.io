<template>
  <div id="resume" style="display: none">
    <div id="content">
      <!--
        ==============================================
          Name
        ==============================================
      -->
      <span class="name">Muhammad Darmawan</span>

      <!--
        ==============================================
          Contacts
        ==============================================
      -->
      <div class="contacts">
        <ul>
          <li style="text-align: left">
            <i class="fa-solid fa-envelope" style="color: #07798d"></i>
            muhammaddarmawan1999@gmail.com
          </li>
          <li style="text-align: right">
            <i class="fa-brands fa-linkedin" style="color: #07798d"></i>
            https://www.linkedin.com/in/muhammad-darmawan-595420227/
          </li>
        </ul>
      </div>

      <!--
        ==============================================
          Project Experience
        ==============================================
      -->
      <div class="project-experience">
        PROJECT EXPERIENCE
        <ul>
          <li class="project" style="margin-top: 0.25em">
            <div class="left">
              <span style="font-weight: bold">Thesis;&nbsp;</span>
              <span class="location"
                >Pekanbaru City, Riau Province, Indonesia</span
              >
              <div class="right">
                <span class="date">April 2023 - June 2024</span>
              </div>
            </div>
          </li>
          <li class="details">
            Thesis Assignment for Informatics Engineer Bachelor's Degree at
            Universitas Islam Riau, making Manage Cost and Schedules for Civil
            Construction App for Civil Engineering of Universitas Islam Riau
          </li>
          <li class="detailed-details">
            Web App for managing schedule, and cost for projects. Made with
            VueJS + ExpressJS
          </li>
          <li class="detailed-details">
            Using Differential Evolution as method to get material
            recommendation for project tasks
          </li>

          <li class="project">
            <div class="left">
              <span style="font-weight: bold">Internship;&nbsp;</span>
              <span class="location"
                >Pekanbaru City, Riau Province, Indonesia</span
              >
              <div class="right">
                <span class="date" style="text-align: right"
                  >July 2020 - December 2021</span
                >
              </div>
            </div>
          </li>
          <li class="details">
            Internship assignment for Informatics Engineering at Universitas
            Islam Riau, making an Optional Course Scheduling App for Civil
            Engineering of Universitas Islam Riau
          </li>
          <li class="detailed-details">
            Web App for managing optional course at civil engineering made with
            Laravel + VueJS framework, SPA/MPA Hybrid
          </li>
          <li class="detailed-details">
            Authentication for user with 4 levels; Guest, Super Admin, Admin,
            College Student
          </li>
          <li class="detailed-details">
            Also has simple forum feature for students and staffs communicating
          </li>
        </ul>
      </div>

      <!--
        ==============================================
          Work Experience
        ==============================================
      -->
      <div class="work-experience">
        WORK EXPERIENCE
        <ul>
          <li class="project" style="margin-top: 0.25em">
            <span style="font-weight: bold; display: block"
              >Department of Population and Civil Registration - Back Office
              Employee;&nbsp;</span
            >
            <div class="left">
              <span class="location"
                >Pekanbaru City, Riau Province, Indonesia</span
              >
              <div class="right">
                <span class="date">September 2022 - Present</span>
              </div>
            </div>
          </li>
          <li class="details">
            General office work such as document managing, operating apps,
            making reports, etc
          </li>
          <li class="details">
            Fill in when certain Front Officer has leave from work on that day
          </li>

          <li class="project">
            <span style="font-weight: bold; display: block"
              >Universitas Islam Riau - Laboratory Assistant;</span
            >
            <div class="left">
              <span class="location" style="text-align: right"
                >Pekanbaru City, Riau Province, Indonesia</span
              >
              <div class="right">
                <span class="date">September 2019 - July 2021</span>
              </div>
            </div>
          </li>
          <li class="details">
            Teaching juniors as Lecturer Assistant on practicum lessons: C++,
            DBMS, MySQL, Python, Matlab, PHP
          </li>
          <li class="detailed-details">
            Have juniors keeping up with building practice source code. While
            explaining how the code works, helping them with debugging if bug or
            errors found
          </li>
        </ul>
      </div>

      <!--
        ==============================================
          Education
        ==============================================
      -->
      <div class="education">
        EDUCATION
        <ul>
          <li class="institute" style="margin-top: 0.25em">
            Universitas Islam Riau, Engineering Faculty | Bachelor of
            Informatics Engineering
            <span class="institute-details">
              <div class="left">
                Pekanbaru City, Riau Province, Indonesia
                <div class="right">September 2017 - June 2024</div>
              </div>
            </span>
          </li>
          <li>Concentration: Artificial Intelligent | GPA: 3.73 / 4.0</li>

          <li class="institute">
            Sekolah Menengah Kejuruan Negeri 2 Pekanbaru | Graduate of
            Vocational High School for Computer Software Engineering Major
            <span class="institute-details">
              <div class="left">
                Pekanbaru City, Riau Province, Indonesia
                <div class="right">July 2014 - June 2017</div>
              </div>
            </span>
          </li>
        </ul>
      </div>

      <!--
        ==============================================
          Interest
        ==============================================
      -->
      <div class="interest">
        SKILL & INTERESTS
        <ul>
          <li style="margin-top: 0.25em">
            <span class="interests">Interests:</span>
            Photography, Music, Gaming, Badminton
          </li>
          <li>
            <span class="interests">Tech Stack:</span>
            C++, Python, PHP, JavaScript, HTML, CSS, MySQL, Laravel, VueJS,
            ExpressJS
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {
    setTimeout(() => {
      window.addEventListener("beforeprint", () => {
        document.title = "muhammad-darmawan-resume";
        document.body.style.backgroundColor = "white";
      });
      window.addEventListener("afterprint", () => {
        document.body.style.backgroundColor = "#dfd4d4";
      });
      window.print();
    }, 3500);
  },
};
</script>
