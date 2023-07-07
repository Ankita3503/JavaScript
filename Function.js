//Regular function 
 let multiplication = function(a,b){
    return a*b;
 }

 console.log(multiplication(5,6));

 // Arrow function
 let mul= (a,b) => a*b;
 console.log(mul(3,4))

 //1. No Argument arrow function:-
 let myFunction1 = () => console.log("No argument function");

 myFunction1();

 //2. Arrow function as an Expression: The function can be dynamically created, which can be used as an expression.

 let num =10 ;
 let myFunction = (num >20) ? console.log("number is greater than 20") : console.log("number is less than 20");
 
 myFunction;    // since myFunction is not a function so , it is called without braces.


 // Arrow Functions as Object Methods
 let myObj = {
    language: "javascript",
    codeEditor: "Vs Code",
    showLanguage:() => {
      console.log(this.language);
    }
  }
  
  myObj.showLanguage();
  // output - undefined
  
  
 


 
