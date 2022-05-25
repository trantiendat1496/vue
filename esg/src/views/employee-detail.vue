<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
    <v-card-title> Name: {{ emploeeDetail.name }} </v-card-title>
    <ul class="list-style-none text-left">
      <li>Age: {{ emploeeDetail.age }}</li>
      <li>Salary: {{ emploeeDetail.salary }}</li>
      <li>DepartmentName: {{ emploeeDetail.departmentName }}</li>
    </ul>
    <v-card-actions>
      <v-btn color="orange lighten-2" text @click="show = !show">
        {{ !show ? "show" : "hidden" }} form
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-form ref="form" v-model="valid" lazy-validation class="container">
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-select
            v-model="age"
            :items="listAge"
            :rules="[(v) => !!v || 'Item is required']"
            label="Age"
            required
          ></v-select>
          <v-text-field
            v-model="salary"
            :rules="salaryRules"
            label="Salary"
            suffix="$"
            required
          ></v-text-field>

          <v-select
            v-model="departmentName"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Department Name"
            required
          ></v-select>
          <v-btn :disabled="!valid" color="success" class="mr-4"> Validate </v-btn>
        </v-form>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import router from "@/router";
import { EmployeeViewModel } from "@/viewmodels/employee-viewmodel";
import { uniqBy } from "lodash";
import { Component, Provide, Vue } from "vue-property-decorator";

@Component
export default class EmployeeDetail extends Vue {
  @Provide() vm = new EmployeeViewModel();
  valid = true;
  show = false;
  name = "";
  nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ];
  salary = 0;
  age = 0;
  salaryRules = [
    (v: any) => !!v || "Salary is required",
    (v: any) => /.+[0-9].+/.test(v) || "Salary must be valid",
  ];
  departmentName = null;
  items: string[] = [];
  listAge: number[] = [];
  checkbox = false;
  emploeeDetail = this.vm.topSalary.find((x) => x.id == router.currentRoute.params.id);
  mounted() {
    for (let index = 18; index <= 50; index++) {
      this.listAge = [...this.listAge, index];
    }

    this.items = uniqBy(this.vm.topSalary, "departmentName").map((x) => x.departmentName);

    this.name = this.emploeeDetail.name;
    this.age = this.emploeeDetail.age;
    this.salary = this.emploeeDetail.salary;
    this.departmentName = this.emploeeDetail.departmentName;
  }
}
</script>

<style scoped></style>
