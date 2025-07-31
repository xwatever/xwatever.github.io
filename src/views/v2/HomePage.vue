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

export default {
  components: {
    HomeMain,
    ProfessionalBackground,
    PortfolioSummary,
  },
};
</script>
