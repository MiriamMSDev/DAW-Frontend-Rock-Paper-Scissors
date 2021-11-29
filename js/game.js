let opciones = ['rock', 'paper', 'scissors'];
let opcionUsuario;

do{
    opcionUsuario = prompt('Choose an option: Rock, Paper o Scissors: ').toLowerCase();
}while(opcionUsuario !== 'rock' && opcionUsuario !== 'paper' && opcionUsuario !== 'scissors');

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let opcionPc = getRandom(0, 3);

const options = document.getElementById("options");
const innerTextOutPut = document.getElementById("innerTextOutPut");

alert('The user choose: ' + opcionUsuario + '\nThe PC choose: ' + opciones[opcionPc]);
options.innerText = 'The user choose: ' + opcionUsuario + '\nThe PC choose: ' + opciones[opcionPc];

if(opcionUsuario === 'rock' && opciones[opcionPc] === 'scissors'){
    alert('You win');
    innerTextOutPut.innerText = 'You win';
}else if(opcionUsuario === 'scissors' && opciones[opcionPc] === 'rock'){
    alert('PC win');
    innerTextOutPut.innerText = 'PC win';
}else if(opcionUsuario === 'scissors' && opciones[opcionPc] === 'paper'){
    alert('You win');
    innerTextOutPut.innerText = 'You win';
}else if(opcionUsuario === 'paper' && opciones[opcionPc] === 'scissors'){
    alert('PC win');
    innerTextOutPut.innerText = 'PC win';
}else if(opcionUsuario === 'paper' && opciones[opcionPc] === 'rock'){
    alert('You win');
    innerTextOutPut.innerText = 'You win';
}else if(opcionUsuario === 'rock' && opciones[opcionPc] === 'paper'){
    alert('PC win');
    innerTextOutPut.innerText = 'PC win';
}else if(opcionUsuario === opciones[opcionPc]){
    alert('Tie');
    innerTextOutPut.innerText = 'Tie';

}