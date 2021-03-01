const form = document.querySelector(".add-form");
const list = document.querySelector(".todos");
const searchİnput=document.querySelector('.search input');
console.log(searchİnput);

function add(par) {
  let html = `
 <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${par}!</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
 `
 list.innerHTML+=html;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = form.add.value.trim();
  if(todo.length){
      add(todo);
      form.reset()  
}
});

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();

    }
})

searchİnput.addEventListener('keyup',e=>{
  e.preventDefault()
    const values=searchİnput.value.trim().toLowerCase();
    //console.log(values);
    search(values)
})

function search(par){
 let myList=Array.from (list.children);
 console.log(myList);
 myList.filter((li)=>{
      //console.log(li.textContent);
      //console.log(li.textContent.includes(par));
      return !li.textContent.toLowerCase().includes(par);

 }).forEach((par)=>{
par.classList.add('class','filtered');
 })


 myList.filter((li)=>{
      //console.log(li.textContent);
      //console.log(li.textContent.includes(par));
      return li.textContent.toLowerCase().includes(par);

 }).forEach((par)=>{
par.classList.remove('filtered');
 })
 
}
