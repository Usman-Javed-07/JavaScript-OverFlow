    //   fizz Buzz game 

    // Divisible by 3 => Fizz
    // Divisible by 5 => Buzz
    // Divisible by both 3 and 5 => FizzBuzz
    // Not Divisible by 3 or 5 => input
    // not a number => not a number


   
    const input = fizzbuzz (true)
    console.log (input);

function fizzbuzz (number) {
    
    // if not a number
    if ( typeof number !== 'number') {
        return 'not a number';
    } 
    // divisible by 3 
    else if (number % 3 === 0 && number % 5 !==0)
    {
        return 'Fizz';
    }
    // divisible by 5 
    else if (number % 5 === 0 && number % 3 !==0)
    {
        return 'Buzz';
    }
    // divisible by both 

    else if (number % 3 === 0 && number % 5 === 0) {
        return 'fizzBuzz';
    }
    // not divisible by 3 or 5
    else if (number % 3 !== 0 && number % 5 !== 0)
    {
        return (number);
    }
}

fizzbuzz ();