import React, {useState} from 'react'
import Todo from '../components/Todo';
const Form = () => {
    const [todo, setTodo] = useState({})
    const [todoo, setTodoo] = useState({})
    const [todos, setTodos] = useState( [
        {todoo: 'todo ', todo: 'todo 1'},
        {todoo: 'todo ',todo: 'todo 2'},
        {todoo: 'todo ', todo: 'todo 3'}
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim()=== ''){
alert('el campo no puede estar vacio')
return
        }
        setTodos([...todos, todo])
    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        
        <>
        <form onSubmit={e => e.preventDefault()}>
<label>Agregar tarea</label><br/>
<input type="text" name="todo" onChange={handleChange}/>
<input type="text" name="todoo" onChange={handleChange}/>
<button onClick={handleClick}>agregar</button>
            </form>
       {
           todos.map((value, index) => (
            <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
            ))
       }
       
        </>
    )
}
export default Form