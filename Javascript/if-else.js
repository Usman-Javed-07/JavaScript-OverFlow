//  hour 
// if hour between 6am and 12pm : good morning !
// if hour between 12pm and 6pm : good afternoon !
// otherwise : good evening !

let hour = 18;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log ('Good afternoon');
}

else if (hour >= 18 && hour <25) {
    console.log ('Good Evening');
}
else {
    console.log ('invalid');
}