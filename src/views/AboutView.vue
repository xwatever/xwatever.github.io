<template>
  <div id="about">
    <div id="about-me" :class="{ 'fade': viewID == 'about-me' }">
      About me
      <div class="about" :class="{ 'fade-in': viewID == 'about-me' }">
        I live in Pekanbaru, Indonesia. I have learned coding for 10 years, and
        haven't started my career as a programmer yet. I want to start my
        journey as a Front-End Developer to make myself better at designing. I
        have learned to use Framework like Laravel, VueJS, ExpressJS for my
        college assignments. I strive for making something i have visualised
        works, but sometimes i'm just trying to make things simple if i dont
        have the capability for it. Things would've been better if i'm
        developing or creating more stuffs so i can improve my knowledge more.
      </div>
    </div>
    <div id="education" :class="{ 'fade': viewID == 'education' }">
      My Education
      <div class="institute" :class="{ 'fade-in': viewID == 'education' }">
        Bachelor of Informatics Engineering
        <div class="left">
          Universitas Islam Riau, Pekanbaru, Indonesia
          <div class="right">September 2017 - June 2024</div>
        </div>
        <div class="details">
          I was assigned as laboratory assistant for practicum study at certain
          subject. My role was to teach juniors to implement code that they have
          learned from lecturer at class, as well as assisting lecturer in
          evaluate student's grade based on their performance at practicum
          session and laboratory assignments. My concentration was Artificial
          Intelligent, and i'm intrigued by how math and some formulae have made
          something so complex.
        </div>
      </div>
      <div class="institute" :class="{ 'fade-in': viewID == 'education' }">
        Graduate of Vocational High School for Computer Software Engineering
        Major
        <div class="left">
          Sekolah Menengah Kejuruan Negeri 2 Pekanbaru, Indonesia
          <div class="right">July 2014 - June 2017</div>
        </div>
        <div class="details" >
          I learned coding for the first time here. Was taught basics of
          programming languages. It feels like magic when i tried to implement
          code to work, and felt like i'm doing some hacking stuff, LOL. Being
          intrigued by how software created, this is where i started to think
          "maybe, having a job as a programmer would be good for my future".
        </div>
      </div>
    </div>

    <div id="work" :class="{ 'fade': viewID == 'work' }">
      I had and have worked in these places
      <div class="job" :class="{ 'fade-in': viewID == 'work' }">
        September 2022 - Present, Pekanbaru City, Riau Province, Indonesia,
        Department of Population and Civil Registration - Back Office Employee
      </div>
      <div class="job" :class="{ 'fade-in': viewID == 'work' }">
        September 2019 - July 2021, Pekanbaru City, Riau Province, Indonesia,
        Universitas Islam Riau - Laboratory Assistant
      </div>
    </div>
  </div>
</template>

<script>
import router from "./../router";

export default {
  data: function() {
    return {
      viewID: "about-me",
    };
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 40) {
        // arrow key pressed down        
        if (this.viewID == "about-me") {
          this.viewID = "education";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);          
        } else if (this.viewID == "education") {
          this.viewID = "work";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);
        } else if (this.viewID == "work") {          
          setTimeout(() => {
            router.push({ name: "projects" });
          }, 50);
        }       
      }
      else if (e.keyCode == 38) {
        // arrow key pressed up
        if (this.viewID == "work") {
          this.viewID = "education";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);
        } else if (this.viewID == "education") {
          this.viewID = "about-me";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);
        } else if (this.viewID == "about-me") {
          setTimeout(() => {
            router.push({ name: "home" });
          }, 50);
        }            
      }
    });

    window.addEventListener("wheel", (e) => {
      if (e.deltaY >= 0) {
        // Wheel Down
         if (this.viewID == "about-me") {
          this.viewID = "education";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);          
        } else if (this.viewID == "education") {
          this.viewID = "work";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);
        } else if (this.viewID == "work") {          
          setTimeout(() => {
            router.push({ name: "projects" });
          }, 50);
        }   
      } else if (e.deltaY <= 0) {
        // Wheel Up
         if (this.viewID == "work") {
          this.viewID = "education";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);
        } else if (this.viewID == "education") {
          this.viewID = "about-me";
          setTimeout(() => {
            this.toggleView(this.viewID)
          }, 50);
        } else if (this.viewID == "about-me") {
          setTimeout(() => {
            router.push({ name: "home" });
          }, 50);
        }         
      }
    });
    // document.getElementById('education').scrollIntoView();
  },
  methods: {
    toggleView(id) {          
      var element = document.getElementById(id);
      var headerOffset = 80;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

    },
  },
};
</script>
