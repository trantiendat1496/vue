export interface DepartmentModel {
  departmentId: string;
  departmentName: string;
  employees: EmployeeModel[];
}

export interface EmployeeModel {
  id: string;
  name: string;
  age: number;
  salary: string;
}

export const DepartmentData: DepartmentModel[] = [
  {
    departmentId: "1",
    departmentName: "mkt",
    employees: [
      {
        id: "1",
        name: "a",
        age: 21,
        salary: "13400111111100",
      },
      {
        id: "2",
        name: "b",
        age: 25,
        salary: "342000",
      },
    ],
  },
  {
    departmentId: "2",
    departmentName: "Dev",
    employees: [
      {
        id: "3",
        name: "c",
        age: 43,
        salary: "42340000",
      },
      {
        id: "4",
        name: "d",
        age: 29,
        salary: "76600000",
      },
      {
        id: "5",
        name: "e",
        age: 32,
        salary: "50000",
      },
    ],
  },
  {
    departmentId: "3",
    departmentName: "Tester",
    employees: [
      {
        id: "6",
        name: "f",
        age: 35,
        salary: "500000",
      },
      {
        id: "7",
        name: "e",
        age: 31,
        salary: "43753223",
      },
    ],
  },
  {
    departmentId: "4",
    departmentName: "QA",
    employees: [
      {
        id: "8",
        name: "g",
        age: 22,
        salary: "1210000",
      },
      {
        id: "9",
        name: "h",
        age: 34,
        salary: "12435530",
      },
      {
        id: "10",
        name: "j",
        age: 24,
        salary: "32347700",
      },
    ],
  },
];
