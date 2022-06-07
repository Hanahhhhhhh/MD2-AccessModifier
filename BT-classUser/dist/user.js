"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    getInfo() {
        return {
            "UserName": this.name,
            "UserEmail": this.email,
            "role": this.isAdmin()
        };
    }
    isAdmin() {
        if (this.role === 0) {
            return "admin";
        }
        else if (this.role === 1) {
            return "user";
        }
        else if (this.role === 2) {
            return "public";
        }
        else {
            return "role is not defined";
        }
    }
}
exports.User = User;
var int;
(function (int) {
    int[int["admin"] = 0] = "admin";
    int[int["user"] = 1] = "user";
    int[int["public"] = 2] = "public";
})(int || (int = {}));
let user1 = new User("hanguyen", "hanguyen@gmail.com", 1);
console.log(user1.getInfo());
