<template>
  <div>
    <hero />

    <about />

    <courses />

    <campuses />

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
import Courses from "./components/courses";
import Campuses from "./components/campuses";

export default {
  name: "Landing",
  components: {
    Campuses,
    Courses,
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
