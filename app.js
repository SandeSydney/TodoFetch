// Change display in the content section
const changeDisplay = (element)=>{
    if(element.id == 'createTodo'){
        document.getElementById('createNew').style.display = 'block'
        document.getElementById('incompletedTodos').style.display = 'none'
        document.getElementById('completedTodos').style.display = 'none'
    } else if(element.id == 'incompleteTodo'){
        document.getElementById('incompletedTodos').style.display = 'block'
        document.getElementById('completedTodos').style.display = 'none'
        document.getElementById('createNew').style.display = 'none'
    } else if(element.id == 'completedTodo'){
        document.getElementById('completedTodos').style.display = 'block'
        document.getElementById('incompletedTodos').style.display = 'none'
        document.getElementById('createNew').style.display = 'none'
    }
}