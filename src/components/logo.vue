<template>
  <img src="@/assets/logo.jpg" :width="size" :height="size" alt="logo" style="border-radius: 50%" />
</template>

<script>
export default {
  name: "logo",
  props: ["size"]
};
</script>

<style scoped />
