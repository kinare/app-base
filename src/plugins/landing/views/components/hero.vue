<template>
  <div>
    <section class="hero is-primary is-bold" id="home">
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
      :interval="4000"
      :repeat="true"
      :icon-size="'is-medium'"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section
          class="hero is-fullheight-with-navbar"
          :style="
            `background: url(${carousel.cover});
               background-position: center;
               background-repeat: no-repeat;
               background-size: cover;`
          "
        >
          <div class="hero-body has-text-left">
            <div class="container">
              <div class="columns is-multiline is-vcentered">
                <div class="column is-half">
                  <h1 class="title" style="font-size: 4rem">{{ carousel.text }}</h1>
                  <p class="subtitle" style="font-size: 2.25rem">{{ carousel.subtitle }}</p>
                </div>
              </div>
            </div>
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
        {
          text: "ELDORET BIBLE COLLEGE @ 20 YEARS",
          subtitle: "Since April 12, 1998",
          cover:
            "https://images.unsplash.com/photo-1470686164816-830d3688f62c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=780591328d1d9c087c2173bcd7567cc6&auto=format&fit=crop&w=1506&q=80"
        },
        {
          text: "CHANGING LEADERS TO CHANGE THE CHRISTIAN TO CHANGE THE WORLD",
          subtitle: "Acquire affordable, high quality spiritually balanced Christian education",
          cover: "/img/background/bible2.jpg"
        },
        {
          text: "Promoting excellence and Christ-like character in Christian Ministry. ",
          subtitle: "",
          cover: "/img/background/bible.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.title,
.subtitle {
  color: white;
  text-shadow: -2px 0 8px rgba(0, 0, 0, 0.64);
}
</style>
