// get data through fetch api
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((resp) =>{
        return resp.json()
    })
    .then((data)=>{
        displayData(data)
    })     


// function to display data
const displayData = (data)=>{
    // console.log(data);

    let incoTodos = data.filter((todo)=>todo.completed===false)
    let comTodos = data.filter((todo)=>todo.completed === true)

    displayIncomplete(incoTodos)
    displayComplete(comTodos)
}


// Show incomplete todos
const displayIncomplete = (incoTodos)=>{
    document.getElementById('incompleteTodo').onclick = ()=>{
        
        // display the Incomplete todos
        document.getElementById('incompletedTodos').style.display = 'block'
        document.getElementById('completedTodos').style.display = 'none'
        document.getElementById('createNew').style.display = 'none'

        let todosList = ''
        incoTodos.map((todo)=>{
            todosList += `
            <div class="todoItem">
                <div class="ids">
                    <p>User Id:${todo.userId}</p>
                    <p>Todo Id:${todo.id}</p>
                </div>
                <h4>Title: ${todo.title}</h4>
                <div class="state">
                    <label for="btnComplete">Completed: </label>
                    <button name="btnComplete" id="btnComplete" style="background-color: #d2691e;" value="${todo.completed}">False</button>
                </div>
            </div>
            `
            document.getElementById('incompletedTodos').innerHTML += todosList
        })
    }
    
}


// Show complete todos
const displayComplete = (comTodos)=>{
    document.getElementById('completedTodo').onclick = ()=>{
        
        // display the Complete todos
        document.getElementById('completedTodos').style.display = 'block'
        document.getElementById('incompletedTodos').style.display = 'none'
        document.getElementById('createNew').style.display = 'none'

        let todosList = ''
        comTodos.map((todo)=>{
            todosList += `
            <div class="todoItem">
                            <div class="ids">
                                <p>User Id: ${todo.userId}</p>
                                <p>Todo Id: ${todo.id}</p>
                            </div>
                            <h4>Title: ${todo.title}</h4>
                            <div class="state">
                                <label for="btnComplete">Completed: </label>
                                <button name="btnComplete" style="background-color: #008000;" id="btnComplete" value="${todo.completed}">True</button>
                            </div>
                        </div>
            `
            document.getElementById('completedTodos').innerHTML += todosList
        })
    }
    
}

// form validation
const formValidate = ()=>{
    if(document.getElementById('userID').value == ''){
        let err = 'Kindly supply user Id!'
        document.getElementById('userErr').style.display = 'block'
        document.getElementById('userErr').innerHTML += err
    }
    if(document.getElementById('title').value == ''){
        let err = 'Title is required!'
        document.getElementById('titleErr').style.display = 'block'
        document.getElementById('titleErr').innerHTML += err
    }
}

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

// Reset form elements
const reset = ()=>{
    document.getElementById('userID').value = ''
    document.getElementById('title').value = ''
}