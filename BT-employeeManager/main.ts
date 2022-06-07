import {Employee} from "./employee";
import {EmployeeList} from "./employeeList";

let employeeList = new EmployeeList()
let employeeHa = new Employee("Ha","Nguyen", 2003, "Ha Noi","Thanh Xuan")
let employeeKhai = new Employee("Khai","Ngo", 2001, "Ha Noi","Thanh Xuan")
let employeeMai = new Employee("Mai","Nguyen", 2001, "Hai Noi","Thanh Xuan")
EmployeeList.addingEmployee(employeeHa,employeeKhai,employeeMai)
// employeeList.addingEmployee(employeeKhai)
// employeeList.addingEmployee(employeeMai)

console.log(EmployeeList)
