// write a function that takes two numbers and returns the maximum of the two 


// my code
function maximum (a = 2, b = 2) {
      
    if (a > b) {
        console.log ( "a is " , a , " which is maximum ");
    }
    else if (a === b) {
        console.log (" both numbers are euqals");
    }
    else {
        console.log ("b is ", b , " which is maximum");
    }
}
maximum ();


// mosh code 

let number = max ( 1 , 3)
console.log (number);

function max (a , b) {
    return (a > b ) ? a : b ;
}