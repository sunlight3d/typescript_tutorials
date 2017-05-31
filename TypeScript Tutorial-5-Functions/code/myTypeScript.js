/*
function addTwoNumbers(x, y):number {
    return x + y;
}
let myAdd = function(x, y): number {
    return x + y;
}
alert("x + y = "+addTwoNumbers(1,2));
*/
//Function with optional parameters
// function getFullInformation(firstName: string, lastName?:string) : string {
//     if (lastName) {
//         return `Firstname = ${firstName}, lastName = ${lastName}`;
//     }
//     return `Firstname = ${firstName}`;
// }
// let result1 = getFullInformation("Nguyen");
// let result2 = getFullInformation("Nguyen", "Duc Hoang");
// alert(result2);
// function calculateRectangleArea(width: number, height = 20): number {
//     return width * height;
// }
// let result:number = calculateRectangleArea(10);
// let result2:number = calculateRectangleArea(10, 30);
// alert(`area = ${result2}`);
// //Rest parameters
// function getInputNames(firstName: string, ...restOfNames: string[]): string {
//     return firstName + " " + restOfNames.join(" ");
// }
// let result = getInputNames("Nguyen", "Duc Hoang", "Helen", "Daek");
// // alert(`Result = ${result}`);
// //this
var calculation = {
    x: 1,
    y: 2,
    addTwoNumbers: function () {
        var _this = this;
        return function () {
            return _this.x + _this.y;
        };
    }
};
calculation.addTwoNumbers();
// Overloads
function getNumberValue(input) {
    if (typeof input == "number") {
        return input;
    }
    else if (typeof input == "string") {
        return input.length;
    }
    else {
        return -1;
    }
}
getNumberValue(100);
getNumberValue("hello");
getNumberValue({ name: "meo meo" });
