<template>
  <div>
    <hero />

    <about />

    <team />

    <testimonial />

    <contact />

    <foot />
  </div>
</template>

<script>
import Hero from "./components/hero";
import About from "./components/about";
import Team from "./components/team";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Foot from "./components/foot";

export default {
  name: "Landing",
  components: {
    Foot,
    Contact,
    Testimonial,
    Team,
    About,
    Hero
  }
};
</script>

<style scoped></style>
