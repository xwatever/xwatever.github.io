<template>
  <header
    :class="['navbar-header', isScrolled ? '' : 'navbar-header-scrolled']"
  >
    <nav id="navbar">
      <!-- <h1 class="text-xl font-bold">MyApp</h1> -->
      <div>
        <h1 :class="[isScrolled ? 'invisible' : 'visible text-xl font-bold']">
          <a href="/">MyApp</a>
        </h1>
      </div>
      <div>
        <ul class="flex gap-6 text-gray-700">
          <li>
            <a
              href="/about"
              :class="[isScrolled ? 'invisible' : 'hover:underline']"
              >About</a
            >
          </li>
          <li>
            <a
              href="/portfolio"
              :class="[isScrolled ? 'invisible' : 'hover:underline']"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="/contact"
              :class="[isScrolled ? 'invisible' : 'hover:underline']"
              >Contact</a
            >
          </li>
          <li class="relative cursor-pointer" @click="isOpen = !isOpen">
            <i class="fa-solid fa-gear"></i>

            <transition name="slide-fade">
              <div
                v-if="isOpen"
                class="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" -->
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >English <span class="fi fi-gb"></span>
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >Bahasa Indonesia <span class="fi fi-id"></span>
                  </a>
                </div>
              </div>
            </transition>
          </li>
          <li class="relative cursor-pointer" @click="isOpen = !isOpen">
            <span class="fi fi-gb mr-2"></span
            ><i class="fa-solid fa-caret-down"></i>

            <transition name="slide-fade">
              <div
                v-if="isOpen"
                class="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" -->
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >English <span class="fi fi-gb"></span>
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >Bahasa Indonesia <span class="fi fi-id"></span>
                  </a>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import "./../../../assets/v2/css/navbar.css";
import "./../../../../node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data: function () {
    return {
      isScrolled: false,
      isOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0.1;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
