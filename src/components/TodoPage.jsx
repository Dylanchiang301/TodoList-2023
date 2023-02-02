import React from 'react'
import {useState} from 'react';
import ProgressBar from './ProgressBar';
import SwitchButton from './SwitchButton';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoPage = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState('');

    const handleDelete = ({id}) => {
        setTodos(prevState => prevState.filter(t => t.id !== id));
    }

    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id );
        setEditTodo(findTodo);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <h4>Add things to do</h4>
            <hr></hr>
            <ProgressBar/>
            {todos && 
                <TodoList 
                    todos={todos}
                    setTodos={setTodos}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            }
            <hr></hr>
            <SwitchButton/>
            <TodoForm
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
        </div>
  )
}

export default TodoPage