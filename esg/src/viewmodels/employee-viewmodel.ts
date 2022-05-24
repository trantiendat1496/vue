import { DepartmentModel, EmployeeModel, DepartmentData } from "@/models/employee-model";
import uniqBy from "lodash-es/uniqBy";
import { computed, observable } from "mobx";

export class EmployeeViewModel {
  @observable employees: DepartmentModel[] = [];

  constructor() {
    //
  }

  @computed get employeeData() {
    let something: any[] = [];
    DepartmentData.forEach((department) => {
      const employees = department.employees.map((employee) => {
        return {
          ...employee,
          departmentId: department.departmentId,
          departmentName: department.departmentName,
        };
      });
      something = [...something, ...employees];
      something.sort((a, b) => Number(a.salary) - Number(b.salary));
    });
    return something;
  }

  @computed get employeeForSalary() {
    let something: any[] = [];
    DepartmentData.forEach((department) => {
      const employees = department.employees.map((employee) => {
        return {
          ...employee,
          departmentId: department.departmentId,
          departmentName: department.departmentName,
        };
      });

      something = [...something, employees];
      let totalSalary = 0;
      const data = something.find((el) => el.map((e: any) => (totalSalary += Number(e.salary))));
      // const data = something.find((el) => Number(el.salary) > 0);
      console.log(data);
    });
    return something;
  }

  @computed get topSalary() {
    const topSalaryEachRoom = this.employeeForSalary.map((employeeForSalaryDetail) => {
      return employeeForSalaryDetail[employeeForSalaryDetail.length - 1];
    });
    console.log(topSalaryEachRoom);

    const departmentIdOfTopSalary = topSalaryEachRoom.sort((x, y) => y.totalSalary - x.totalSalary)[0].departmentId;
    const departmentTopSalary = this.employeeData.filter((employeeDetail) => employeeDetail.departmentId === departmentIdOfTopSalary);
    return departmentTopSalary;
  }
}
