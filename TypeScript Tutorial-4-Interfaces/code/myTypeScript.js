// let myDevice = {name: "iphone", version: 6};
// document.body.innerHTML = `name = ${myDevice.name}, version = ${myDevice.version}`
// interface DeviceInformation {
//     name: string;
//     version: number;
//     color?:string;
// }
// let myDevice: DeviceInformation = {
//                                     name: "iphone",
//                                     version: 7,
//                                     color: "black"
//                                 };
// interface Resolution {
//     readonly width: number;
//     readonly height: number;
// }
// let resolution: Resolution = <Resolution>{};
// resolution.width = 1024;
// resolution.height = 768;
// let resolution:Resolution = {width: 16, height: 9};
// resolution.width = 100;
// resolution.height = 200;
var roArray = [1, 2, 3, 4];
// roArray[0] = 10;
// roArray.push(50);
// roArray.length = 10;
var myArray = roArray;
myArray[0] = 100;
myArray.push(-10);
myArray.length = 10;
document.body.innerHTML = "myArray = " + myArray;
var rect = {};
rect.width = 100;
rect.height = 100;
rect.color = "green";
