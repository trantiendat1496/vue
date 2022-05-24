<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="vm.username"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="vm.password"
        :rules="passRules"
        label="Password"
        required
      ></v-text-field>
      <v-btn @click="vm.login()"> Login </v-btn>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { LoginViewModel } from "../viewmodels/login-viewmodel";

@Component
export default class Login extends Vue {
  @Provide() vm = new LoginViewModel();

  valid = true;
  nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ];
  passRules = [(v: any) => !!v || "Password is required"];
}
</script>

<style scoped></style>
