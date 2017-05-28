var myObj = { name: "iphone", version: 6 };
document.body.innerHTML = "name = " + myObj.name + ", version = " + myObj.version;
var myDevice = {
    name: "iphone",
    version: 7,
    color: "green"
};
var resolution = { width: 1024, height: 768 };
// resolution.height = 100;
var roArray = [1, 2, 3, 4];
var b = roArray;
b[10] = 100;
b.push(20);
b.length = 100;
