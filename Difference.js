// Difference between = , == , ===

let a=10;    // = it is an assignment operator
console.log(a);

let b="Ankita";
b=10;             // let can be re-assigned but not de-declared
if(a==b)    // == it is a comparison operator  it basically checks the value 
{
    console.log("True")
}
else
{
    console.log("False");
}


let c="ankita";
let d="ankita";
if(c==d)    // === it is a strictly comparison operator  it basically checks the value  and type
{
    console.log("True")
}
else
{
    console.log("False");
}