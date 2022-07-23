const TodoListsNode = document.getElementById('TodoListAll');
let TodoListsArr = [];

// Theme

document.body.onload = () => {
    if(localStorage.getItem('theme')){
        const html = document.querySelector("html")
        html.setAttribute("theme", localStorage.getItem('theme'))
        let themeIcon = html.getAttribute("theme")
        let themeIcons = document.querySelector("#themeIconId")
        if (themeIcon == "dark"){
            themeIcons.setAttribute('class', 'fa-solid fa-moon theme__icon-moon');
        } else if (themeIcon == "white") {
            themeIcons.setAttribute('class', 'fa-solid fa-sun theme__icon-sun');
        }
    }

    if(localStorage.getItem('todos')){
        TodoListsArr = JSON.parse(localStorage.getItem("todos"))
        TodoListsArr.forEach(todoList => {
            const TodoListsNode = document.getElementById('TodoListAll');
            const index = TodoListsArr.indexOf(todoList)
            TodoListsNode.innerHTML += `
            <div class="todolist-one" id="TodoList${index}">
                <div class="todolist-list-wrapper">
                    <div class="todolist-list-block">
                        <ol class="todolist-list" id="TodoListOl${index}">
        
                        </ol>
                    </div>
                </div>
                <div class="todolist__input-wrapper">
                    <input class="todolist__input" type="text" id="TodoListInp${index}" placeholder="todo task">
                </div>
                <div class="todolist__btn-wrapper">
                    <button class="todolist__btn" id="TodoListBtn" onclick="TodoListBtnAdd(${index})">Add task</button>
                </div>
        
                <div class="todolist__btn-rem-wrapper">
                    <button class="todolist__btn-rem" id="TodoListBtnRem" onclick="TodoListBtnRem(${index})">Delete task</button>
                </div>
            </div>
            `
            const TodoListNode = document.querySelector(`#TodoListOl${index}`);
            todoList.forEach(item => {
                TodoListNode.innerHTML += `<li>${item}</li>`;
            })

        })
    }else{
        localStorage.setItem("todos", JSON.stringify([]))
        
    }


}


function TodoListBtnAdd(indexf) {
    const TodoListInput = document.querySelector(`#TodoListInp${indexf}`).value;
    const TodoList = document.querySelector(`#TodoListOl${indexf}`);
    console.log(TodoListInput, 'значение имп');
    TodoListsArr[indexf].push(TodoListInput);
    console.log(TodoListsArr)
    TodoList.innerHTML += `<li>${TodoListInput}</li>`;
    localStorage.setItem("todos", JSON.stringify(TodoListsArr))
}

function TodoListBtnRem(indexf) {
    TodoListsArr[indexf].splice(-1,1)
    console.log(TodoListsArr[indexf], 'indexdell');
    const TodoList = document.querySelector(`#TodoListOl${indexf}`);
    TodoList.innerHTML = "";
    TodoListsArr[indexf].forEach(todo => {
      TodoList.innerHTML += `<li>${todo}</li>`
    })
    localStorage.setItem("todos", JSON.stringify(TodoListsArr))
  }

function BtnAddTodoList() {
    TodoListsArr.push([]);
    const index = TodoListsArr.length - 1 
    TodoListsNode.innerHTML += `
    <div class="todolist-one" id="TodoList${index}">
        <div class="todolist-list-wrapper">
            <div class="todolist-list-block">
                <ol class="todolist-list" id="TodoListOl${index}">

                </ol>
            </div>
        </div>
        <div class="todolist__input-wrapper">
            <input class="todolist__input" type="text" id="TodoListInp${index}" placeholder="todo task">
        </div>
        <div class="todolist__btn-wrapper">
            <button class="todolist__btn" id="TodoListBtn" onclick="TodoListBtnAdd(${index})">Add task</button>
        </div>

        <div class="todolist__btn-rem-wrapper">
            <button class="todolist__btn-rem" id="TodoListBtnRem" onclick="TodoListBtnRem(${index})">Delete task</button>
        </div>
    </div>
    `;

    localStorage.setItem("todos", JSON.stringify(TodoListsArr))
};

function BtnRemoveTodoList() {
    try {
        const todoLists = document.querySelectorAll('.todolist-one')
        todoLists[todoLists.length - 1].remove()
        TodoListsArr.splice(-1,1)
        localStorage.setItem("todos", JSON.stringify(TodoListsArr))
    }

    catch (err) {
        alert('all tasks have already been deleted, please dont press the button 😡😡😡')
    }

};

function BtnTheme(){
    const html = document.querySelector("html")
    console.log("клик");
    const currentTheme = html.getAttribute("theme")
    const newTheme = currentTheme === "dark" ? "white" : "dark"
    html.setAttribute("theme", newTheme)
    localStorage.setItem('theme', newTheme)
    let themeIcon = html.getAttribute("theme")
    let themeIcons = document.querySelector("#themeIconId")
    if (themeIcon == "dark"){
        themeIcons.setAttribute('class', 'fa-solid fa-moon theme__icon-moon');
    } else if (themeIcon == "white") {
        themeIcons.setAttribute('class', 'fa-solid fa-sun theme__icon-sun');
    }
}