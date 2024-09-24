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
    </div>
  </div>
</template>

<script>
export default {
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
