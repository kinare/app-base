<template>
  <section class="hero is-medium is-white is-bold" id="campus">
    <div class="hero-body">
      <div class="container">
        <div class="content has-margin-bottom-100">
          <h1 class="heading">Campuses</h1>
          <p>EBC has campuses across the country which include</p>
        </div>
        <div class="columns is-multiline">
          <div class="column is-half" v-for="(campus, index) in campuses" :key="index">
            <div class="box has-padding-40">
              <h2 class="title" style="color: #00a8ff">{{ campus.name }}</h2>
              <p class="subtitle">{{ campus.time }}</p>
              <p class="is-grey-light">{{ campus.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "campuses",
  computed: {
    campuses() {
      return [
        {
          name: "MAIN CAMPUS ELDORET",
          time: "Time: 8.00 .A.M TO 5.00 P.M",
          description:
            "Outspan off Nairobi Road, 7 Km from Eldoret Town after Moi University Annex."
        },
        {
          name: "NAIROBI WOODLEY CAMPUS",
          time: "Time: 5.00 .P.M TO 8.00 P.M.(MON-FRI)",
          description: "Located at Chrisco Central Church"
        },
        {
          name: "KITENGELA CAMPUS",
          time: "Time: 9.00.A.M TO 5.00 P.M(SATURDAYS)",
          description: "Linex Guest house."
        },
        {
          name: "NAKURU CAMPUS",
          time: "Time: 9.00.A.M TO 5.00 P.M(SATURDAYS)",
          description: "Peniel Hotel Milimani, Golf road Nakuru."
        },
        {
          name:
            "NAIROBI CBD CAMPUS AT STANBANK HOUSE in partnership with Joe Kayo School of Ministry",
          time: "Time: 5.00 .P.M TO 8.00 P.M. (MON-FRI)",
          description: "1 st floor Royal Business College Moi Avenue, near National Archives"
        }
      ];
    }
  }
};
</script>

<style scoped></style>
