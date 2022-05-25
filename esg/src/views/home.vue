<template>
  <v-container>
    <h2>Top 5 nhân viên có lương cao nhất</h2>
    <v-data-table
      :headers="headers"
      :items="vm.topSalary"
      :items-per-page="5"
      class="elevation-1 mt-4"
      hide-default-footer
    ></v-data-table>

    <h2 class="mt-10">Danh sách nhân viên của phòng ban có tổng lương cao nhất</h2>
    <v-data-table
      :headers="headers"
      :items="vm.topTotalSalary"
      :items-per-page="5"
      class="elevation-1 mt-4"
      hide-default-footer
    ></v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { EmployeeViewModel } from "../viewmodels/employee-viewmodel";

@Component
export default class Home extends Vue {
  @Provide() vm = new EmployeeViewModel();

  headers = [
    { text: "Id", value: "id" },
    { text: "Name", value: "name" },
    { text: "Age", value: "age" },
    { text: "Salary", value: "salary" },
    { text: "Department", value: "departmentName" },
  ];

  mounted() {
    // console.log(this.vm.employeeData);
    // this.vm.topSalary;
  }
}
</script>
