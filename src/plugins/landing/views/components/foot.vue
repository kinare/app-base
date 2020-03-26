<template>
  <section class="hero is-small is-primary is-bold">
    <div class="hero-body">
      <div class="content has-text-centered">
        <a href="#home" class="has-text-white is-pulled-right">
          <b-icon icon="arrow-up" /><br />
          Top
        </a>
        <p class="is-6">© {{ new Date().getFullYear() }} Eldoret Bible College</p>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from "./hero";
export default {
  name: "Foot",
  // eslint-disable-next-line vue/no-unused-components
  components: { Hero }
};
</script>

<style scoped></style>
