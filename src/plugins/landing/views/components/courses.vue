<template>
  <section class="hero is-medium is-white is-bold" id="courses">
    <div class="hero-body">
      <div class="container">
        <div class="content has-margin-bottom-70">
          <h1 class="heading">Courses</h1>
        </div>
        <div class="columns is-multiline">
          <div class="column is-half">
            <div class="content has-margin-bottom-70 has-text-left">
              <h1 class="heading">EBC Programmes</h1>
              <p>
                EBC provides its students with on and off campus library services. We have Spirit
                filled and Anointed teaching staff. These are men and women of God who have been in
                the Ministry for over 20 years.
                <a href="/download/BTH_app_form2019 2.docx" target="_blank">Join now</a> to be
                equipped by World renowned ministers.
              </p>
              <h3>Duration & Attendance Pattern</h3>
              <p>
                In order to meet the needs of busy church leaders, EBC programs are split into three
                Trimesters of 3 weeks each.
              </p>
              <h3>Trimesters</h3>
              <p>February, June, October. <br />April, August, December</p>
            </div>
          </div>
          <div class="column is-half">
            <div class="media" v-for="(course, index) in courses" :key="index">
              <div class="media-left">
                <button class="button is-rounded is-small is-primary">{{ index + 1 }}</button>
              </div>
              <div class="media-content">
                <p class="title is-4 is-primary" style="color: #00a8ff">{{ course.title }}</p>
                <p class="subtitle is-6">
                  {{ course.period }} <br />
                  {{ course.body || "" }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "courses",
  computed: {
    courses() {
      return [
        {
          title: "Bachelor of Theology",
          period: "Academic Period : 3 YEARS",
          body: ""
        },
        {
          title: "Diploma in Theology",
          period: "Academic Period : 2 YEARS",
          body: ""
        },
        {
          title: "Diploma in Entrepreneurship",
          period: "Academic Period : 2 YEARS",
          body: "Examining Body : KNEC"
        },
        {
          title: "Certificate in Theology",
          period: "Academic Period : 1 YEAR"
        }
      ];
    }
  }
};
</script>

<style scoped></style>
