import TodoTask from './TodoTask';

const TodoList = ({todos,handleDelete,handleEdit}) => {


  return (
    // <div>
        <ul>
        {todos.sort((a,b) => b.id - a.id ).map((todo)=>(
           <TodoTask
             todo={todo}
             key={todo.id}
             handleDelete={handleDelete}
             handleEdit={handleEdit}
            />
        ))}
        </ul>
    // </div>
  )
}

export default TodoList