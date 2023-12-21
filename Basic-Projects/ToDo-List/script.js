const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('checkbox');
        checkbox.addEventListener('change', () => this.toggleCompletion(checkbox, name));

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "&#x270E;";
    	edit.addEventListener('click', () => this.edit(input, name, edit));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "&#x1f5d1;";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(checkbox);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    toggleCompletion(checkbox, name) {
        const index = todos.indexOf(name);
        todos[index] = checkbox.checked ? `[COMPLETED] ${name}` : name;
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

    edit(input, name, editButton){
        if(input.disabled == true){
            editButton.innerHTML = "&#x1F4BE;"; // You can use any save icon you prefer

            input.disabled = !input.disabled;
            input.focus();
        }
    	else{
            editButton.innerHTML = "&#x270E;";
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        check();
    }
})

function check(){
    const inputValue = document.querySelector('.input').value.trim(); // Get input value and trim whitespace

    if (inputValue !== "") {
        new item(inputValue);
        todos.push(inputValue);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        document.querySelector('.input').value = ""; // Clear input field after adding task
    } else {
        alert("Please enter a task."); // Show error message for empty input
    }
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("Hit the GYM!");