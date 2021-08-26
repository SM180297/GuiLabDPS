import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({})
    const [num, setTodoo] = useState({})
    const [todos, setTodos] = useState( [
        {num: '1',todo: ' todo 1'},
        {num: '2',todo: ' todo 2'},
        {num: '3',todo: ' todo 3'}
        
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleChang = e => setTodoo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim()=== '' || Object.keys(num).length === 0 || num.num.trim()=== ''){
alert('el campo no puede estar vacio')
return
        }
        setTodos([...todos,num,todo]) 
       
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
             <input type="text" name="num" onChange={handleChang}/>
            <button onClick={handleClick}>agregar</button>
            </form>
       {
           todos.map((value, index) => (
            <Todo todo={ value.todo } num={value.num}  key={index} index={index} deleteTodo={deleteTodo} />
            
            ))
       }
       
        </>
    )
}
export default Form