<template>
  <nav class="navbar is-size-6">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <logo size="20" />
          <span class="has-margin-left-5" style="text-transform: uppercase; font-weight: bold;"
            >Eldoret Bible College</span
          >
        </router-link>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/#about">
            About Us
          </a>
          <a class="navbar-item" href="/#courses">
            Courses
          </a>
          <a class="navbar-item" href="/#campus">
            Campus
          </a>
          <a class="navbar-item" href="/#team">
            Team
          </a>
          <a class="navbar-item" href="/#testimonial">
            Testimonials
          </a>
          <router-link to="/gallery" class="navbar-item">
            Gallery
          </router-link>
          <router-link to="/download" class="navbar-item">
            Downloads
          </router-link>
          <span class="navbar-item">
            <a href="/#contact" class="button is-primary is-inverted">
              <span>Contacts</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "./logo";
export default {
  name: "nav-bar",
  components: { Logo }
};
</script>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
}
</style>
