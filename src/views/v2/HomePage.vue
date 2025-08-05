<template>
  <HomeMain />
  <ProfessionalBackground />
  <PortfolioSummary />
</template>

<script>
import "./../../assets/v2/css/home.css";
import HomeMain from "./../../components/v2/home/HomeMainComponent.vue";
import ProfessionalBackground from "./../../components/v2/home/ProfessionalBackgroundComponent.vue";
import PortfolioSummary from "./../../components/v2/home/PortfolioSummaryComponent.vue";

import Lenis from "@studio-freight/lenis";

export default {
  components: {
    HomeMain,
    ProfessionalBackground,
    PortfolioSummary,
  },
  setup() {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },
};
</script>
