<template>
  <div class="login-form">
    <amplify-authenticator
      v-if="authState !== 'signedin'"
    ></amplify-authenticator>
    <div v-if="authState === 'signedin' && user">
      <amplify-sign-out></amplify-sign-out>
      <div>Hello, {{ user.username }}</div>
    </div>
  </div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "AuthStateApp",
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
    };
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
};
</script>

<style scoped>
.login-form {
  text-align: center;
}
</style>
