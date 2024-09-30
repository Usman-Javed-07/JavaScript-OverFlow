  

//   land scape of two numbers . 

// if width is grater it returns true if height is greater than returns false
// my code 
let img = islandscape (500 , 400) ;
console.log(img);
 
function islandscape ( width , height) {

    if (width > height) {
        return true;
    }
    else return false;
}




// mosh code

console.log (landscape (600 , 800));

function landscape (width , height) {
    return (width > height);
}