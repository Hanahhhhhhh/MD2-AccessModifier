import {Employee} from "./employee";

export class EmployeeList {
   static employeeList: Employee[] = []

    // constructor() {
    // }

    static displayEmployeeList(): void {
        for (let i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i].firstName)
        }
    }

    static addingEmployee(...employeeObj: Employee[]): void {
        console.log(...employeeObj)
        this.employeeList.push(...employeeObj)
    }

    static displayEmployeeListFullDetail(): void {
        for (let i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i])
        }
    }

    static deleteEmployee(index:number): void {
        this.employeeList.splice(index, 1)
    }

    static editingEmployeeDetail(index:number,
                          firstName: string,
                          lastname: string,
                          dateOfBirth: number,
                          address: string,
                          companyAddress: string): Employee {
        let currentEmployee = this.employeeList[index]
        currentEmployee.firstName = firstName;
        currentEmployee.dateOfBirth = dateOfBirth;
        currentEmployee.address = address;
        currentEmployee.companyAddress = companyAddress;
        return currentEmployee;
    }

}

