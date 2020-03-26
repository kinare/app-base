<template>
  <div>
    <section class="hero is-fullheight is-bold">
      <div class="hero-head">
        <nav-bar />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="content has-margin-bottom-100">
            <h1 class="heading">Downloads</h1>
          </div>
          <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="(download, index) in downloads" :key="index">
              <a :href="`/download/${download.url}`" target="_blank">
                <div class="box download">
                  <h1 class="title is-size-1" style="font-size: 25px">
                    <b-icon icon="file-pdf" size="is-large" type="is-danger" />
                  </h1>
                  <small class="has-text-grey">{{ download.name }}</small>
                </div>
              </a>
            </div>
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
  name: "Download",
  components: { Foot, NavBar },
  computed: {
    downloads() {
      return [
        {
          name: "2020 EBC CTH,DTH,BTH CALENDAR",
          url: "2020 EBC CTH,DTH,BTH CALENDAR.pdf"
        },
        {
          name: "General Application Form",
          url: "BTH_app_form2019 2.docx"
        },
        {
          name: "2020 MASTERS CALENDAR",
          url: "2020 MASTERS CALENDAR.pdf"
        },
        {
          name: "Bible-compressed",
          url: "Bible-compressed.pdf"
        },
        {
          name: "EBC MASTERS APPLICATION FORM 2020",
          url: "EBC MASTERS APPLICATION FORM 2020.pdf"
        },
        {
          name: "eldoret bible college brochure",
          url: "eldoret bible college brochure 2017-1.pdf"
        },
        {
          name: "Fee structure for masters 2020",
          url: "Fee structure for masters 2020.pdf"
        },
        {
          name: "FEES STRUCTURE",
          url: "FEES STRUCTURE.pdf"
        }
      ];
    }
  }
};
</script>

<style scoped>
.download {
  border: none !important;
}
</style>
