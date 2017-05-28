
//let x = 10;

/*
let fullName:string = "Nguyen Duc Hoang";
let numberOfFriends:number = 10;
let introduction:string = `
                            <p style="color: red;">My name is ${fullName}.</p>
                            Number of friends: ${numberOfFriends}
                            `;

document.body.innerHTML = introduction;
*/
/*
let listOfNumbers:number[] = [1,2,3,4];
let isDone:boolean = false
let listOfAnyValues: any[] = [2,3,"hello",true, isDone];
document.body.innerHTML = listOfAnyValues[2];
*/
var counter:number = 0;
setInterval(function() {
    counter = counter + 1;
    document.body.innerHTML = "counter = " +counter;
}, 500);
