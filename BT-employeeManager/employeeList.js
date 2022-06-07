"use strict";
exports.__esModule = true;
exports.EmployeeList = void 0;
var EmployeeList = /** @class */ (function () {
    function EmployeeList() {
    }
    // constructor() {
    // }
    EmployeeList.displayEmployeeList = function () {
        for (var i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i].firstName);
        }
    };
    EmployeeList.addingEmployee = function () {
        var _a;
        var employeeObj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            employeeObj[_i] = arguments[_i];
        }
        console.log.apply(console, employeeObj);
        (_a = this.employeeList).push.apply(_a, employeeObj);
    };
    EmployeeList.displayEmployeeListFullDetail = function () {
        for (var i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i]);
        }
    };
    EmployeeList.deleteEmployee = function (index) {
        this.employeeList.splice(index, 1);
    };
    EmployeeList.editingEmployeeDetail = function (index, firstName, lastname, dateOfBirth, address, companyAddress) {
        var currentEmployee = this.employeeList[index];
        currentEmployee.firstName = firstName;
        currentEmployee.dateOfBirth = dateOfBirth;
        currentEmployee.address = address;
        currentEmployee.companyAddress = companyAddress;
        return currentEmployee;
    };
    EmployeeList.employeeList = [];
    return EmployeeList;
}());
exports.EmployeeList = EmployeeList;
