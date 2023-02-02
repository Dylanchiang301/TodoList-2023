import React,{useEffect} from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import { IconContext } from 'react-icons';

const TodoForm = ({input, setInput, todos, setTodos,editTodo,setEditTodo}) => {

    const updateTodo = (title, id, complete) =>{
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, complete} : todo
        );
        setTodos(newTodo);
        setEditTodo('');
    };

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput('');
        }
    },[setInput, editTodo]);

    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!editTodo){
            setTodos(
                [...todos,{
                id: Date.now(),
                title: input,
                complete: false,
            }]);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.complete)
        }
    };
    return (
    <>
    <p className='text'>Add to list</p>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                className='todo-input'
                type='text'
                value={input}
                required
                onChange={handleChange}
            />
            <button className='todo-btn' type='submit'>
                <IconContext.Provider value={{className:'todo-plusbtn'}}>
                    <AiOutlinePlus />
                </IconContext.Provider>
            </button>
        </form>
    </>
  )
}

export default TodoForm