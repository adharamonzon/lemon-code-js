//implementa una función concar (inmutable) tal que, dados 2 arrays como entrada, devuelva la concaenación de ambos. Utiliza rest / spread operartos.
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const concatArrayPrototipe = (arr1, arr2) => {
  const concatArg = arr1.concat(arr2);

  console.log(concatArg);
};

concatArrayPrototipe(arr1, arr2);

const concatSpread = (arr1, arr2) => {
  const result = [...arr1, ...arr2];

  console.log(result);
};

concatSpread(arr1, arr2);

//opcional: implementa una versión que acepte múltiples arrays de entrada (más de 2).

const oldNames = ['Sara', 'Alberto', 'Juan', 'Raquel'];
const names = ['Antonio', 'Maria', 'Josefa'];
const newNames = ['Alejandra', 'Carlos', 'Manuel', 'Silvia'];

const concatAllNames = (...names) => {
  const result = [];

  names.forEach((array) => result.push(...array));
  console.log(result);
};

concatAllNames(oldNames, names, newNames);
