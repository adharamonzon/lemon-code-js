//01. implementa una fn clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con la propiedades de source.

function Person({ name, age }) {
  (this.name = name), (this.age = age);
}

function clone(source) {
  const user = new Person(source);
  console.log(user);
  return user;
}

clone({ name: 'ana', age: 34 });
clone({ name: 'silvia', age: 54 });

//02. implementa una fn merge que,dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source,
//y en caso de propiedades con el mismo nombre source sobreescribe a target.

const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };

function merge(source, target) {
  //si implementamos primero target, el name que del objeto c será 'Luisa'
  const c = { ...source, ...target };
  console.log(c);
  return c;
}

merge(b, a);
