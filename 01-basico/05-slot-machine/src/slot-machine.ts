//Objetivo: crear una máquina tragaperras. Cada máquina tragaperras (instancia) tendrá un CONTADOR DE MONEDAS que automáticamente se irá incrementando conforme vayamos jugando.
//Al llamar al método play, el número de monedas se debe incrementar de forma automática y debe generar 3 BOLEANOS ALEATORIOS, que representarán el estado de las 3 ruletas. 
//El usuario ganará si los tres boleanos son TRUE y deberá mostrarse en consola "Congratulations!!! you won <nº de monedas> coins!!"
//reiniciar las monedas acumuladas. En caso de no ganar se mostrará el mensaje "good luck next time!"

class SlotMachine  {
  coins: number = 0; 
  tries : () => {}
}

let coinsAcc: number = 0;
let number: number = 0;
let winner: boolean= false;

const machine = new SlotMachine();

//html
const firstEl = document.getElementById('first');
const secondEl = document.getElementById('second');
const thirdEl = document.getElementById('third');
const resultEl = document.getElementById('result');

const coinsNumber = document.getElementById('coins');
const noCoins = document.getElementById('noCoins');

const btnPlay = document.getElementById('playbtn');
const btnAdd = document.getElementById('addCoins');

const trial = () => {
  return number = Math.floor(Math.random() * 10);
}
const run = () => {
  debugger;
  if (machine.coins > 0) {
      machine.coins = machine.coins -1;
      coinsNumber.innerHTML = 'coins:' +  machine.coins.toLocaleString()
      const first = trial();
      firstEl.innerHTML = first.toString();
      const second = trial();
      secondEl.innerHTML = second.toString();
      const third = trial();
      thirdEl.innerHTML = third.toString();
      if (first === second && second === third) {
        resultEl.innerHTML = `Resultado: Congratulations!!! you won ${machine.coins} coins!!`;
     } else {
      resultEl.innerHTML = `Resultado: No has ganado sigue jugando`; 
     }
  }
}

function play (coins: number): void {
  machine.coins += coins;
  coinsNumber.innerHTML = 'coins:' + machine.coins.toString();
}

function listener () {
  if (machine.coins === 0) {
    noCoins.innerHTML = '¡¡NO TIENES MONEDAS DISPONIBLES!!';
  } else {
    noCoins.innerHTML = '';
  }
  run()
}

function add () {
  play(5);
  noCoins.innerHTML = '';
}

btnPlay.addEventListener('click', listener)
btnAdd.addEventListener('click', add)