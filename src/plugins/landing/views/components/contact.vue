<template>
  <section class="hero is-medium is-white is-bold" id="contact">
    <div class="hero-body">
      <div class="container">
        <div class="content has-margin-bottom-100">
          <h1 class="heading">Contact us</h1>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4 is-offset-2  has-text-left">
            Eldoret Bible College <br />
            P .O. Box 7860-30100 <br />
            Eldoret, Kenya. (E.A).<br />
            eldoretbiblecollege@gmail.com <br />
            info@eldoretbiblecollege.org <br />
            TEL: (+254 ) 712 819 505 <br />
            TEL: (+254 ) 782 000 003
          </div>
          <div class="column is-4">
            <p class="has-text-justified">
              Eldoret Bible College goal is to offer affordable training to get as many as we can
              trained. Partner with us and support a needy student train: Bank: Gurranty Trust.
              Paybill 910200 AC 2170008761
            </p>
            <a
              class="button is-fullwidth is-medium has-margin-top-30 has-margin-bottom-30 is-primary"
              >Send us mail</a
            >
            <p>Or follow us on social platform</p>
            <p>
              <a class="button is-rounded is-primary has-margin-5">
                <b-icon icon="twitter" size="is-small"> </b-icon>
              </a>
              <a class="button is-rounded is-primary has-margin-5">
                <b-icon icon="facebook" size="is-small"> </b-icon>
              </a>
              <a class="button is-rounded is-primary has-margin-5">
                <b-icon icon="twitter" size="is-small"> </b-icon>
              </a>
            </p>
          </div>
          <div class="column is-full">
            <gmap-map :center="center" :zoom="15" style="width: 100%; height: 300px; ">
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              ></gmap-marker>
            </gmap-map>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data: function() {
    return {
      center: { lat: 0.5154553, lng: 35.27712580000002 },
      markers: [
        {
          position: { lat: 0.5154553, lng: 35.27712580000002 }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
