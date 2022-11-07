//01. implementa una fn clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con la propiedades de source.

function Person({ name, age }) {
  (this.name = name), (this.age = age);
}

function clone(source) {
  const user = new Person(source);
  console.log(user);
}

clone({ name: 'ana', age: 34 });
clone({ name: 'silvia', age: 54 });
