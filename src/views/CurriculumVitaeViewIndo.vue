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
          <li>
            <i class="fa-solid fa-image-portrait"></i>&nbsp;&nbsp;Laki-laki
          </li>
          <li>
            <i class="fa-solid fa-calendar"></i>&nbsp;&nbsp;9 Agustus, 1999
          </li>
          <a
            href="https://api.whatsapp.com/send?phone=6282282674247"
            style="text-decoration: none"
          >
            <li>
              <i class="fa-brands fa-square-whatsapp"></i
              >&nbsp;&nbsp;+62-822-8267-4247
            </li>
          </a>
        </ul>
        <ul class="links">
          <a
            href="mailto:muhammaddarmawan1999@gmail.com"
            style="text-decoration: none"
          >
            <li>
              <i class="fa-solid fa-envelope"></i
              >&nbsp;&nbsp;muhammaddarmawan1999@gmail.com
            </li>
          </a>
          <a href="https://github.com/xwatever" style="text-decoration: none">
            <li>
              <i class="fa-brands fa-square-github"></i>&nbsp;&nbsp;xwatever
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-darmawan-595420227/"
            style="text-decoration: none"
          >
            <li>
              <i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;Muhammad Darmawan
            </li>
          </a>
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
          <span>Rangkuman</span>
          <hr />
          <p>
            Saya merupakan lulusan baru Sarjana Teknik Informatika di
            Universitas Islam Riau. Saya berkeinginan untuk bekerja sebagai
            programmer. Saya ingin menggunakan seluruh pengetahuan yang saya
            miliki untuk diimplementasikan, membuat suatu aplikasi yang bisa
            dibanggakan.
          </p>
        </div>

        <!--
          =============================================
            Skills
          =============================================
        -->
        <div class="skills">
          <span>Kemampuan</span>
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
          <span>Pengalaman</span>
          <hr />

          <p>Pengalaman Project Aplikasi</p>
          <ul>
            <li class="project">
              Aplikasi Manajemen Biaya dan Penjadwalan untuk Bangunan Konstruksi
              Sipil
            </li>
            <li class="date">April 2023 - Juni 2024</li>
            <li class="details">
              Project Skripsi untuk Teknik Informatika, Dibuat menggunakan VueJS
              + ExpressJS
            </li>
          </ul>
          <ul>
            <li class="project-">Aplikasi Penjadwalan Mata Kuliah Pilihan</li>
            <li class="date">Juli 2020 - Desember 2021</li>
            <li class="details work">
              Project Magang untuk Teknik Informatika, Dibuat menggunakan
              Laravel + VueJS
            </li>
          </ul>

          <p>Pengalaman Kerja</p>
          <ul>
            <li class="project">
              Dinas Kependudukan dan Pencatatan Sipil - Karyawan Back Office
            </li>
            <li class="date">September 2022 - Sekarang</li>
            <li class="details"></li>
          </ul>
          <ul>
            <li class="project-">Universitas Islam Riau - Asisten Dosen</li>
            <li class="date">September 2019 - Juli 2021</li>
            <li class="details"></li>
          </ul>
        </div>

        <!--
          =============================================
            Education
          =============================================
        -->
        <div class="education">
          <span>Edukasi</span>
          <hr />

          <div class="institute">
            <ul>
              <li class="degree">Sarjana Teknik Informatika</li>
              <li class="location">Universitas Islam Riau, Indonesia</li>
              <li class="date">2017 - 2024</li>
            </ul>
          </div>
          <div class="institute instance">
            <ul>
              <li class="degree">
                Lulusan SMK Jurusan Rekayasa Perangkat Lunak
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
