   // show only string 

   const movie = {
    name : 'abc',
    releaseYear : 2012 , 
    rating : 4.2 ,
    director : 'xyz'
   };


   showProperties(movie);
     
  
   function showProperties (obj) {
      for (let key in obj)
        if (typeof obj[key] == 'string')
            console.log (key , obj[key]);
   } 



// show only number


const person = {
    Name : 'ali', 
    fName : 'muhammad',
    age : 30,
    sNo : 123, 
    bloodGroup : 'O-'
};

function deatail (object) {
  
    for (let key in object) 
        if (typeof object[key] == "number")
            console.log (key , object[key]);
}

deatail (person);