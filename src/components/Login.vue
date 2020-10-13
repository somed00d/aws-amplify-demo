<template>
  <div class="login-page-wrapper">
    <Auth />
  </div>
</template>

<script>
import Auth from "./Auth";
export default {
  name: "Login",
  components: {
    Auth,
  },
};
</script>

<style scoped>
.login-page-wrapper {
  margin: 2em 6em;
}
</style>
