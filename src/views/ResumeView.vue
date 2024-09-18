<template>
  <div id="resume" class="fade-in" style="display: none">
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
          <li style="text-align: left">muhammaddarmawan1999@gmail.com</li>
          <li style="text-align: right">
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
          <li class="project" style="margin-top: 0">
            <span style="width: 50%">Thesis;</span>
            <span class="location" style="text-align: right; width: auto"
              >Civil Engineering of Universitas Islam Riau</span
            >
          </li>
          <li class="date">April 2023 - June 2024</li>
          <li class="details">
            Assignment for Thesis, making Manage Cost and Schedule for Civil
            Engineering Project App
          </li>
          <li class="details">
            Web App for managing schedule, and cost from other source for
            projects. Made with VueJS + ExpressJS
          </li>
          <li class="details">
            Using Differential Evolution as method to get material
            recommendation for project tasks
          </li>

          <li class="project">
            <span>Internship;</span>
            <span class="location" style="text-align: right; width: auto"
              >Civil Engineering of Universitas Islam Riau</span
            >
          </li>
          <li class="date">July 2020 - December 2021</li>
          <li class="details">
            Internship assignment, making an Optional Course Scheduling App
          </li>
          <li class="details">
            Web App for managing optional course at civil engineering made with
            Laravel + Vue framework, SPA/MPA Hybrid
          </li>
          <li class="details">
            Authentication for user with 4 levels; Guest, Super Admin, Admin,
            College Student
          </li>
          <li class="details">
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
          <li class="project" style="margin-top: 0">
            <span
              >Department of Population and Civil Registration - Back Office
              Employee;</span
            >
            <span class="location" style="text-align: right; width: auto"
              >Pekanbaru City, Riau Province, Indonesia</span
            >
          </li>
          <li class="date">September 2022 - Present</li>
          <li class="details">
            General office work such as document managing, operating apps,
            making reports, etc
          </li>
          <li class="details">
            Fill in when certain Front Officer has leave from work on that day
          </li>

          <li class="project">
            <span>Universitas Islam Riau - Laboratory Assistant;</span>
            <span class="location" style="text-align: right; width: auto"
              >Pekanbaru City, Riau Province, Indonesia</span
            >
          </li>
          <li class="date">September 2019 - July 2021</li>
          <li class="details">
            Teaching juniors as Lecturer Assistant on practicum lessons: C++,
            DBMS, MySQL, Python, Matlab, PHP
          </li>
          <li class="details">
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
          <li class="institute" style="margin-top: 0">
            Universitas Islam Riau, Engineering Faculty
            <span class="details"
              >| Bachelor of Information Technology | Pekanbaru City, Riau
              Province, Indonesia | September 2017 - June 2024</span
            >
          </li>
          <li>Concentration: Artificial Intelligent | GPA: 3.73 / 4.0</li>

          <li class="institute">
            Sekolah Menengah Kejuruan Negeri 2 Pekanbaru
            <span class="details"
              >| Graduate of Vocational School for Computer Software Engineering
              Major | Pekanbaru City, Riau Province, Indonesia | July 2014 -
              June 2017</span
            >
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
          <li>
            <span class="interests">Interests:</span>
            Photography, Music, Badminton
          </li>
          <li>
            <span class="programming-language"
              >Progamming Language, and Stack:</span
            >
            C++, PHP, JavaScript, HTML, CSS, MySQL
          </li>
          <li>
            <span class="framework">Framework:</span>
            Laravel, VueJS, ExpressJS
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
      window.print();
    }, 3500);
  },
};
</script>
