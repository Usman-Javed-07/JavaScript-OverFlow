//    count only  truthy values

// falsy values are
// undefined
// null
// ''
// false 
// 0 
//NaN


const array = [undefined , null , '' , false , 0 , NaN , 1 , 2  ]

console.log (countTruthy(array))

function countTruthy (array) {
     let count = 0 ;  
     for (let value of array)
        if (value)
            count ++;
        return count;
}