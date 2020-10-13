<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  max-width: 400px;
  padding: 10px 0;
  margin: 0 auto;
  font-family: monospace;
  font-weight: 600;
  font-size: 1.5em;
}
a {
  margin: 0 1em;
  color: #4361ee;
}
</style>
