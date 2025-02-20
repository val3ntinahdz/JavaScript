// Switch syntax
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]
  
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
  
//     default:
//       ...
//       [break]
// }

const day = 3;
switch(day) {
    case 0:
        console.log('sunday');
        break;
    case 1:
        console.log('monday');
        break;
    case 2: 
        console.log('tuesday');
        break;
    default: 
        console.log('its not monday, tuesday nor sunday');
}


let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

// Grouping of "case"
let language = 'french';

switch(language) {
    case language = 'japanese': // (*) grouped 3 cases
    case language = 'hindi':
    case language = 'italian':
        alert('wot?');
        alert('incorrect!');
        break;
    case language = 'english':
        alert('LMAO, french people literally prefer spanish over gringos');
        break;
    case language = 'french':
        alert("oui oui, c'est exact! Dans la ville de l'amour, on parle français.");
        break;
}