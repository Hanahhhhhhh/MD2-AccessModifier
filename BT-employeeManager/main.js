"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var employeeList_1 = require("./employeeList");
var employeeList = new employeeList_1.EmployeeList();
var employeeHa = new employee_1.Employee("Ha", "Nguyen", 2003, "Ha Noi", "Thanh Xuan");
var employeeKhai = new employee_1.Employee("Khai", "Ngo", 2001, "Ha Noi", "Thanh Xuan");
var employeeMai = new employee_1.Employee("Mai", "Nguyen", 2001, "Hai Noi", "Thanh Xuan");
employeeList.addingEmployee(employeeHa, employeeKhai, employeeMai);
// employeeList.addingEmployee(employeeKhai)
// employeeList.addingEmployee(employeeMai)
console.log(employeeList);
