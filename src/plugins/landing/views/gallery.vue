<template>
  <div>
    <section class="hero is-fullheight is-bold">
      <div class="hero-head">
        <nav-bar />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="content has-margin-bottom-100">
            <h1 class="heading">Gallery</h1>
          </div>
          <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="(image, index) in images" :key="index">
              <div class="card">
                <div class="card-image" @click="showImage(image)">
                  <figure
                    class="image is-4by3"
                    :style="
                      `background: url(${image}); background-position: center; background-size: contain; background-repeat: no-repeat`
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="modal" :class="{ 'is-active': modal }">
            <div class="modal-background" @click="modal = false"></div>
            <div class="modal-content">
              <div class="container is-fluid">
                <img :src="currImage" :alt="currImage" />
              </div>
            </div>
            <button @click="modal = false" class="modal-close is-large" aria-label="close"></button>
          </div>
        </div>
      </div>
    </section>

    <foot />
  </div>
</template>

<script>
import NavBar from "../../../components/nav-bar";
import Foot from "./components/foot";
export default {
  name: "Gallery",
  components: { Foot, NavBar },
  data: function() {
    return {
      modal: false,
      currImage: "",
      images: []
    };
  },
  mounted() {
    this.images = require.context("@/assets/gallery", true, /^.*\.jpg$/);
    this.images = this.images.keys().map(this.images);
  },
  methods: {
    showImage: function(image) {
      this.modal = true;
      this.currImage = image;
    }
  }
};
</script>

<style scoped></style>
