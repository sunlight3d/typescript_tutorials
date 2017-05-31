
class Person {
    message: string;
    constructor(message: string){
        this.message = message;
    }
    sayHello():string {
        return `Hello, ${this.message}`;
    }
    private _fullName: string;
    get fullName():string {
        return this._fullName;
    }
    set fullName(newFullName: string) {
        if(newFullName.length > 5) {
            this._fullName = newFullName;
        }
    }
}

class Student extends Person {
    universityName: string;
    constructor(message: string, universityName: string) {
        super(message);
        this.message = "hellio";
        this.universityName = universityName;
    }
}
let person = new Person("How are you?");
person.message = "haliat";
person.fullName = "Abcdef12345";
person.fullName = "Abc";
// document.body.innerHTML = person.fullName;
class Calculation {
    static PI = 3.1416;
}
let squarePi = Calculation.PI * Calculation.PI;
document.body.innerHTML = `square PI = ${squarePi}`;
