import React, {useState} from 'react'
import Todo from '../components/Todo';
const Form = () => {
    const [todoo, setTodoo] = useState({})
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState( [
        {todoo: '1',todo: ' todo 1'},
        {todoo: '2',todo: ' todo 2'},
        {todoo: '3', todo: ' todo 3'}
        
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim()=== ''){
alert('el campo no puede estar vacio')
return
        }
        setTodos([...todos,todoo,todo])
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
            <Todo todo={value.todoo + value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
            ))
       }
       
        </>
    )
}
export default Form