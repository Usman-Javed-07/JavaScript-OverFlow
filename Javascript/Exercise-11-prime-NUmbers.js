//   Prime Numbers
   // prime numbers (whose factor are only 1 and itself)


   showPrime(10);
   
   function showPrime (limit) {
    
    for (let number = 0 ; number <= limit ; number++) 
    if (isPime(number)) console.log (number);
   }
   function isPime (number) {
    for (let factor = 2 ; factor < number ; factor ++)
        if (number % factor === 0) 
            return false ;
    return true ;    
   }