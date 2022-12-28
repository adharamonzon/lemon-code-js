'use strict';

const usernameForm = document.getElementById('name');
const surnameForm = document.getElementById('surname');
const ageForm = document.getElementById('age');
const submitBtn = document.getElementById('btn');
const text = document.getElementById('text');

const user = { username: 'Carla', surname: 'Pérez', age: 22 };
const updatedUser = { username: '', surname: '', age: 22 };
text.innerHTML = `${user.username} ${user.surname} ${user.age}`;

function set(ev) {
  ev.preventDefault();
  updatedUser.username = usernameForm.value;
  updatedUser.surname = surnameForm.value;
  updatedUser.age = ageForm.value;
  text.innerHTML = `${updatedUser.username} ${updatedUser.surname} ${user.age}`;
}
submitBtn.addEventListener('click', set);
