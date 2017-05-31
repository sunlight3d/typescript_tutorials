var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(message) {
        this.message = message;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.message;
    };
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newFullName) {
            if (newFullName.length > 5) {
                this._fullName = newFullName;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(message, universityName) {
        var _this = _super.call(this, message) || this;
        _this.message = "hellio";
        _this.universityName = universityName;
        return _this;
    }
    return Student;
}(Person));
var person = new Person("How are you?");
person.message = "haliat";
person.fullName = "Abcdef12345";
person.fullName = "Abc";
// document.body.innerHTML = person.fullName;
var Calculation = (function () {
    function Calculation() {
    }
    return Calculation;
}());
Calculation.PI = 3.1416;
var squarePi = Calculation.PI * Calculation.PI;
document.body.innerHTML = "square PI = " + squarePi;
