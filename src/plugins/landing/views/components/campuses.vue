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
          name: "TOWN CAMPUS ELDORET",
          time: "Time: 8.00 .A.M TO 5.00 P.M.(MON-FRI)",
          description: "Khetia Building along Ronald Ngala street 6th floor right wing."
        },
        {
          name: "NAIROBI WOODLEY CAMPUS",
          time: "Time: 5.00 .P.M TO 8.00 P.M.(MON-FRI)",
          description: "Located at Chrisco Central Church"
        },
        {
          name: "KITENGELA CAMPUS",
          time: "Time: 9.00.A.M TO 5.00 P.M(SATURDAYS)",
          description: "EPZ ESTATE(NEXT TO KITENGELA MEDICAL)."
        },
        {
          name:
            "NAIROBI VIEW PARK TOWERS CAMPUS EBC in partnership with Joe Kayo School of Ministry",
          time: "Time: 5.00 .P.M TO 8.00 P.M. (MON-FRI)",
          description: "View park Towers Along Utalii Lane, 7th Floor, Room 6 Monday-Friday."
        }
      ];
    }
  }
};
</script>

<style scoped></style>
