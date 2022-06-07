"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeList = void 0;
class EmployeeList {
    // constructor() {
    // }
    static displayEmployeeList() {
        for (let i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i].firstName);
        }
    }
    static addingEmployee(...employeeObj) {
        console.log(...employeeObj);
        this.employeeList.push(...employeeObj);
    }
    static displayEmployeeListFullDetail() {
        for (let i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i]);
        }
    }
    static deleteEmployee(index) {
        this.employeeList.splice(index, 1);
    }
    static editingEmployeeDetail(index, firstName, lastname, dateOfBirth, address, companyAddress) {
        let currentEmployee = this.employeeList[index];
        currentEmployee.firstName = firstName;
        currentEmployee.dateOfBirth = dateOfBirth;
        currentEmployee.address = address;
        currentEmployee.companyAddress = companyAddress;
        return currentEmployee;
    }
}
exports.EmployeeList = EmployeeList;
EmployeeList.employeeList = [];
