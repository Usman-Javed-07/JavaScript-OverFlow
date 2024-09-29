
// switch 

// let role; 
let role = 'Pro';


switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'Modrate':
        console.log('Modrate User');
        break;
    case  'Pro':
        console.log ('Pro user');
        break;
    default:
        console.log('unknown User');    
}


// by using if else statement

if (role === 'guest') 
    console.log('guest user');
else if (role === 'Modrate')
    console.log('modrate user');
else if (role === 'Pro')
console.log('Pro user');
else console.log("unknow user");