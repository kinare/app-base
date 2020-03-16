<template>
  <h1>Login</h1>
</template>

<script>
export default {
  name: "Login",
  beforeRouteEnter(to, from, next) {
    next(v => {
      v.$store.dispatch("auth/login", {});
    });
  }
};
</script>

<style scoped></style>
