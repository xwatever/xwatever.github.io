<template>
  <!-- <div
    class="min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
  >
    <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
      <h1 class="text-2xl font-bold mb-4">Welcome to My Vue App</h1>
      <p class="text-gray-700">
        This is a centered card with a full-screen background.
      </p>
    </div>
  </div> -->
  <Navbar />

  <router-view />
</template>

<script>
import "./assets/v2/css/main.css";
import Navbar from "./components/v2/essentials/NavbarComponent.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
