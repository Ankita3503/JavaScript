let person={
    fname:"Ankita",
    lname:"Kumari",
    age:21
}

 //for..in loop 

for(let x in person)   
{
    console.log(x);                 // it will display key in object
    console.log(person[x]);        // it will display value in object 
}

// Do not use for..in over an Array if the index order is important.

//for..of loop

const cars=["BMW" , "Volvo" , "Mini"];
for(let x of cars)
{
    console.log(x);     
}

let language ="Javascript";
for(let x of language)
{
    console.log(x);
}


