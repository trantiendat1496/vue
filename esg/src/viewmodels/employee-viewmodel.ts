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
    });

    return something;
  }

  @computed get topSalary() {
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
      something.sort((a, b) => Number(b.salary) - Number(a.salary));
    });
    return something;
  }

  @computed get topTotalSalary() {
    let something: any[] = [];
    DepartmentData.forEach((department) => {
      const employees = department.employees.map((employee) => {
        return {
          ...employee,
          departmentId: department.departmentId,
          departmentName: department.departmentName,
          totalSalaryDepartment: department.employees.map((s) => s.salary).reduce((a, b) => Number(a) + Number(b), 0),
        };
      });
      something = [...something, ...employees];
    });

    const max = Math.max(...something.map((a) => a.totalSalaryDepartment));

    const result = something.filter((m) => m.totalSalaryDepartment == max);
    return result;
  }
}
