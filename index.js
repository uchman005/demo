let hamburger = document.querySelector('.hambuger');
let mobileMenu = document.querySelector('.mobile-menu');
let icon = document.querySelector('.material-symbols-outlined');
hamburger.addEventListener('click', (event) => {
    mobileMenu.classList.toggle('d-none')
    if (mobileMenu.classList.contains('d-none')) {
        icon.innerHTML = 'menu';
    } else {
        icon.innerHTML = 'close';
    }
})

let open = document.querySelector('.open')
let close = document.querySelector('.close')
let buttons = document.querySelector('.buttons');

open.addEventListener('click', () => {
    open.classList.toggle('d-none')
    close.classList.toggle("d-none")
})
close.addEventListener('click', () => {
    open.classList.toggle('d-none')
    close.classList.toggle("d-none")
})

// function length(str, num = 0) {
//     if (str[num] === undefined) {
//         return num;
//     }
//     return length(str, num + 1);
// }

// let strlength =(str='')=>{
//     return str.length
// };

let count = document.querySelector('.count');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let num = Number(count.innerHTML);
increase.addEventListener('click', () => {
    num++;
    count.innerHTML = num;
})
decrease.addEventListener('click', () => {
    num--;
    count.innerHTML = num;
})


let input = document.querySelector('.input');
let add = document.querySelector('.add');
let todoList = document.querySelector('.todo-list');
let todos = [];
add.addEventListener('click', () => {
    let todo = input.value;
    todos.push(todo);
    input.value = '';

    let todoItems = '';
    for (let todo of todos) {
        todoItems += `<li>${todo}</li>`
    }
    todoList.innerHTML = todoItems;

})

