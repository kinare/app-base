<template>
  <div class="hero is-medium ">
    <div class="hero-body">
      <b-carousel
        :animated="true"
        :has-drag="true"
        :autoplay="true"
        :pause-hover="false"
        :pause-info="false"
        :pause-info-type="'is-primary'"
        :interval="3000"
        :repeat="true"
        :indicator="true"
        :indicator-background="false"
        :indicator-inside="true"
        :indicator-mode="'hover'"
        :indicator-position="'is-bottom'"
        :indicator-style="'is-lines'"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section class="hero is-medium is-white">
            <div class="hero-body">
              <div class="content has-text-centered has-padding-left-80 has-padding-right-80">
                <p>{{ carousel.text }}</p>
                <figure class="image is-96x96 is-inline-block">
                  <img class="is-rounded" :src="carousel.avatar" />
                </figure>
                <h3 class="title">{{ carousel.name }}</h3>
                <p class="subtitle has-text-grey-light">{{ carousel.title }}</p>
              </div>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  data: function() {
    return {
      carousels: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          name: "Michael Kamau",
          avatar: "https://bulma.io/images/placeholders/96x96.png",
          title: "Developer"
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          name: "Faith Chetorich",
          avatar: "https://bulma.io/images/placeholders/96x96.png",
          title: "Secretary"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
