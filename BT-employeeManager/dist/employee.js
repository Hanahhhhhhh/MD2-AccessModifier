"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(firstName, lastname, dateOfBirth, address, companyAddress) {
        this._firstName = firstName;
        this._lastname = lastname;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._companyAddress = companyAddress;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get companyAddress() {
        return this._companyAddress;
    }
    set companyAddress(value) {
        this._companyAddress = value;
    }
}
exports.Employee = Employee;
