<template>
  <Navbar />

  <transition name="fade" mode="out-in">
    <router-view />
  </transition>

  <transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div class="text-white text-xl animate-pulse">Loading...</div>
    </div>
  </transition>
</template>

<script>
import "./assets/v2/css/main.css";
import Navbar from "./components/v2/essentials/NavbarComponent.vue";
import router from "./router/v2";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: function () {
    return {
      isLoading: false,
    };
  },
  mounted() {
    router.beforeEach((to, from, next) => {
      this.isLoading = true;
      next();
    });

    router.afterEach(() => {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
