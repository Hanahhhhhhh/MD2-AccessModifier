export class User {
    protected _name: string;
    protected _email: string;
    protected _role: int;

    constructor(name: string, email: string, role: int) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): int {
        return this._role;
    }

    set role(value: int) {
        this._role = value;
    }

    getInfo(): object {
        return {
            "UserName": this.name,
            "UserEmail": this.email,
            "role": this.isAdmin()
        }
    }

    isAdmin(): string {
        if (this.role === 0) {
            return "admin"
        } else if (this.role === 1){
            return "user"
        } else if (this.role === 2){
            return "public"
        } else {
            return "role is not defined"
        }
    }
}


enum int {admin, user, public}

let user1 = new User("hanguyen", "hanguyen@gmail.com", 1)

console.log(user1.getInfo())