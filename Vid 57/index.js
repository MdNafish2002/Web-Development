console.log("Loops")
let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i)
// }
let obj={
    Name: "Nafish",
    Role: "Engineer"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
        console.log(element)
        console.log(key)
}