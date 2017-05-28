
let myObj = {name: "iphone", version: 6};
document.body.innerHTML = `name = ${myObj.name}, version = ${myObj.version}`;
interface DeviceInformation {
    name: string;
    version: number;
    color?:string;
}
let myDevice:DeviceInformation = {
                                    name: "iphone",
                                    version: 7,
                                    color:"green"
                                };
interface Resolution {
    readonly width: number;
    readonly height: number; //do not use const
}
let resolution:Resolution = {width: 1024, height: 768};
// resolution.height = 100;
let roArray: ReadonlyArray<number> = [1,2,3,4];
let b:number[] = roArray as number[];
b[10] = 100;
b.push(20);
b.length = 100;
