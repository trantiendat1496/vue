<template>
  <div>
    <v-text-field></v-text-field>

    <v-data-table
      :headers="headers"
      :items="vm.employeeData"
      :items-per-page="10"
      class="elevation-1 mt-4"
      hide-default-footer
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { EmployeeViewModel } from "@/viewmodels/employee-viewmodel";
import { Component, Provide, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Provide() vm = new EmployeeViewModel();

  headers = [
    { text: "Id", value: "id" },
    { text: "Name", value: "name" },
    { text: "Age", value: "age" },
    { text: "Salary", value: "salary" },
    { text: "Department", value: "departmentName" },
  ];
}
</script>

<style scoped></style>
