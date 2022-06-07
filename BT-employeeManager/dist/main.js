"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const employeeList_1 = require("./employeeList");
let employeeList = new employeeList_1.EmployeeList();
let employeeHa = new employee_1.Employee("Ha", "Nguyen", 2003, "Ha Noi", "Thanh Xuan");
let employeeKhai = new employee_1.Employee("Khai", "Ngo", 2001, "Ha Noi", "Thanh Xuan");
let employeeMai = new employee_1.Employee("Mai", "Nguyen", 2001, "Hai Noi", "Thanh Xuan");
employeeList_1.EmployeeList.addingEmployee(employeeHa, employeeKhai, employeeMai);
// employeeList.addingEmployee(employeeKhai)
// employeeList.addingEmployee(employeeMai)
console.log(employeeList_1.EmployeeList);
