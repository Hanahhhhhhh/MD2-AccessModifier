"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
    constructor(name) {
        this.name = name;
        Application.count++;
    }
}
exports.Application = Application;
Application.count = 0;
console.log(Application.count);
let app1 = new Application('App one ');
console.log(Application.count);
let app2 = new Application('App two');
console.log(Application.count);
//# sourceMappingURL=application.js.map