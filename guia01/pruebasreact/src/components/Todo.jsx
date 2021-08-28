import React from 'react'
const Todo = ({todoss,numss, indexx, deleteTodo}) => {
return (
    <>
    <div className="list">
    <h3>{numss} - {todoss}</h3><button className="btn-delete" onClick={()=> deleteTodo(indexx)}>x</button>
    </div>
    </>
)
}
export default Todo