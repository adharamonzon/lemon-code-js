// ARRAY OPERATOINS:
//1. "head" implementa una fn head(inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza DESTRUCTURING

const arr = ['Maria', 'Ana', 'Marcos'];

//destructuring
const [firstName] = arr;
console.log(firstName);

//destructuring de los parámetros que se le pasan a la fn.
const head = ([firstName]) => firstName;

console.log(head(arr));

//2. Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza REST operator.

const arr2 = [1, 2, 3, 4];
//destructuring de los argumentos, separamos el primero del resto donde utilizamos el rest operator para pasarlo como argumento a la fn.
const tail = ([first, ...others]) => {
  console.log(...others);
};

tail(arr2);

//3. Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
//utiliza los métodos que ofrece Array.prototype

const arr3 = ['A', 'B', 'C', 'D', 'E'];
const init = (arg) => {
  arg.pop();
  console.log(arg);
};

init(arr3);

//4. Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const arr4 = ['sevilla', 'salamanca', 'valencia', 'ciudad real'];
const last = (arg) => {
  console.log(arg.pop());
};

last(arr4);
