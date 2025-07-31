<template>
  <header
    :class="[
      'navigation-pane-header',
      isHovered ? 'navigation-pane-header-hovered' : 'invisible',
    ]"
  >
    <div
      id="navigation-pane"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <i
        :class="[
          'visible',
          currentIndex === 0 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        :class="[
          'visible',
          currentIndex === 1 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        :class="[
          'visible',
          currentIndex === 2 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        :class="[
          'visible',
          currentIndex === 3 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        :class="[
          'visible',
          currentIndex === 4 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
    </div>
  </header>
</template>

<script>
import "./../../../assets/v2/css/navigation-pane.css";

export default {
  props: ["currentIndex"],
  data: function () {
    return {
      isHovered: false,
    };
  },
};
</script>
