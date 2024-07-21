let form = document.querySelector('form');
let ulEl = document.getElementsByClassName('fruits')[0];
console.log(ulEl);
let liEl = document.querySelectorAll('li');

liEl.forEach((el)=>{
  let edit = document.createElement('button');
  edit.className = "edit-btn";
  edit.innerText = "Edit"
  
  el.appendChild(edit);
})


// document.body.addEventListener(())

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const inputEl = document.getElementById('fruit-to-add').value;
  
  let li = document.createElement('li');
  li.className = 'fruit';
  li.innerHTML = `${inputEl}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`

  ulEl.appendChild(li);
})

ulEl.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete-btn')){
    const fruitToDelete = e.target.parentElement;
    // console.log(fruitToDelete);
    ulEl.removeChild(fruitToDelete)
  }
})