//   infinite loop

let i = 0 ;
while (i < 5 ) {
    console.log(i);
    // i++ you forget i++
}

for (i = 0 ; i < 5 ; ) // you forget i++

let x = 0;
do {
    // i++; you forget i++ this well crash your browser
}while(x < 5);