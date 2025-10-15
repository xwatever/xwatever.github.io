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
            <a
              href="mailto:muhammaddarmawan1999@gmail.com"
              style="text-decoration: none"
            >
              <i class="fa-solid fa-envelope" style="color: #07798d"></i>
              muhammaddarmawan1999@gmail.com
            </a>
          </li>
          <li style="text-align: right">
            <a
              href="https://www.linkedin.com/in/muhammad-darmawan-595420227/"
              style="text-decoration: none"
            >
              <i class="fa-brands fa-linkedin" style="color: #07798d"></i>
              https://www.linkedin.com/in/muhammad-darmawan-595420227/
            </a>
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
            Developed a web app for managing cost and schedule for civil
            construction projects using Vue.js and Express.js.
          </li>
          <li class="details">
            Implemented a recommendation system for construction material to be
            used at project tasks using the Differential Evolution algorithm.
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
            Built an optional course scheduling web app for the Civil
            Engineering faculty using Laravel and Vue.js (SPA/MPA hybrid).
          </li>
          <li class="detailed-details">
            Multi-level user authentication (Admin, Staff, Student).
          </li>
          <li class="detailed-details">
            Integrated a simple forum for staff-student communication.
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
                <span class="date">September 2022 - July 2025</span>
              </div>
            </div>
          </li>
          <!-- <li class="details">
            General office work such as document managing, operating apps,
            making reports, etc. As well as one of Social media officer, giving
            information, guiding users to navigate using department's apps.
          </li> -->
          <li class="details">
            As one of Social Media Officer, Assisted 150 to 250 users per week
            in navigating the department’s apps, resolving inquiries, and
            ensuring successful submission of citizenship-related documents.
          </li>
          <li class="details">
            Identified and reported recurring user challenges, resulting in the
            implementation of documentation or guides that reduced app-related
            complaints by 67%.
          </li>
          <li class="details">
            Created user-fiendly guides and step-by-step instructions for app
            functionality, improving user satisfaction as measured in our public
            satisfaction survey.
          </li>

          <li class="project">
            <span style="font-weight: bold; display: block"
              >Islamic University of Riau - Laboratory Assistant;</span
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
          <!-- <li class="details">
            Teaching juniors as Lecturer Assistant on practicum lessons: C++,
            DBMS, MySQL, Python, Matlab, PHP
          </li> -->
          <li class="details">
            Teaching juniors on practicum lessons: C++, DBMS, MySQL, Python,
            Matlab, PHP. Guided and mentored up to 150 students per semester,
            ensuring their understanding of programming concepts and practical
            implementation of programming basics.
          </li>
          <li class="details">
            Debugged and resolved coding issues from students, achieving an
            average resolution time of 1 to 2 minutes per issue, making sure
            that i can proceed to teach one to two more source codes by the
            length of time given for my class.
          </li>
          <li class="details">
            Designed teaching materials and exercises used for my classes and
            for few fellow lecturer assitant, receiving positive feedback from
            students, associates, and lecturers.
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
            Islamic University of Riau, Engineering Faculty | Bachelor of
            Informatics Engineering
            <span class="institute-details">
              <div class="left">
                Pekanbaru City, Riau Province, Indonesia
                <div class="right">September 2017 - June 2024</div>
              </div>
            </span>
          </li>
          <li>Concentration: Artificial Intelligent | GPA: 3.75 / 4.0</li>

          <li class="institute">
            Public Vocational High School 2 Pekanbaru | Graduate of Computer
            Software Engineering Major
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
