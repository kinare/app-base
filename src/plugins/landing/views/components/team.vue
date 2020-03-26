<template>
  <section class="hero is-fullheight is-white is-bold" id="team">
    <div class="hero-body">
      <div class="container">
        <div class="content has-margin-bottom-100">
          <h1 class="heading">Team</h1>
          <p>EBC team</p>
        </div>
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="columns is-multiline">
              <div class="column is-one-third" v-for="(member, index) in team" :key="index">
                <div class="card">
                  <div class="card-image">
                    <figure
                      class="image is-3by4"
                      :style="
                        `background: url(/img/team/${member.avatar});
                        background-position: center center;
                        background-size: cover;
                        background-repeat: no-repeat`
                      "
                    />
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <h3 class="title is-5 has-text-primary" style="margin-bottom: 0.5rem">
                        {{ member.name }}
                      </h3>
                      <p class="is-6 is-grey-light">{{ member.title }}</p>
                    </div>
                  </div>
                </div>
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
  name: "Team",
  computed: {
    team() {
      return [
        {
          name: "Dr. Rebecca Polis",
          title: "Vice President",
          avatar: "rebeca.jpg"
        },
        {
          name: "Dr. John Polis",
          title: "Founder and President",
          avatar: "john.jpg"
        },
        {
          name: "Ben Ambani",
          title: "(DD,MDiv,MPA)",
          avatar: "ambani.jpg"
        },
        {
          name: "Rev. Jeremiah Kibet",
          title: "Academic/Distance Learning Program",
          avatar: "jeremiah.jpg"
        },
        {
          name: "Faith Keter",
          title: "Administration/Finance",
          avatar: "faith.jpg"
        },
        {
          name: "Ph.D Wambua Kyalo Benjamin",
          title: "Post Graduate/Research",
          avatar: "wambua.png"
        }
      ];
    }
  }
};
</script>

<style scoped></style>
