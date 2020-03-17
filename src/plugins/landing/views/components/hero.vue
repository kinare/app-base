<template>
  <div>
    <section class="hero">
      <div class="hero-head">
        <nav-bar />
      </div>
    </section>
    <b-carousel
      :animated="true"
      :has-drag="true"
      :autoplay="true"
      :pause-hover="false"
      :pause-info="false"
      :pause-info-type="'is-primary'"
      :interval="3000"
      :repeat="true"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-fullheight-with-navbar is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.text }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
import NavBar from "../../../../components/nav-bar";
export default {
  name: "Hero",
  components: { NavBar },
  data: function() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  }
};
</script>

<style scoped></style>
