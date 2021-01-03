const inputField = document.getElementById('inputField');
const toDoContainer =document.getElementById('to-do-items-container');
const arr = [];
const addBtn = document.getElementById('add-to-do');

addBtn.addEventListener('click', ()=>{
  const toDo = document.createElement('p');
  toDo.innerText = inputField.value;
  arr.push(toDo.innerText);
  toDoContainer.appendChild(toDo);
  inputField.value = '';
  toDo.addEventListener('click', ()=>{
    toDo.classList.add('done');
  });
  toDo.addEventListener('dblclick', ()=>{
    toDoContainer.removeChild(toDo);
  });
});
