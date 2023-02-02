import React,{useState} from 'react'
import {AiOutlineClose,AiFillEdit} from 'react-icons/ai';
import { IconContext } from 'react-icons';

const TodoTask = ({todo,handleDelete,handleEdit}) => {

    const [isChecked, setIsChecked] = useState(todo.complete);
    const checkBoxChange = (e) =>{
        setIsChecked(!isChecked);
    };

   

    return (
     <li className='todo-row'>
        <div className='todo-checkbox'> 
            <input
                type='checkbox'
                id={todo.id}
                checked={isChecked}
                name={todo.title}
                onChange={checkBoxChange}
            />
            <label htmlFor={todo.id}>
            </label>
            <p>
                {todo.title}
            </p>
        </div>
        <div>
            <button className='edit-btn' onClick={()=> handleEdit(todo)}>
            <IconContext.Provider value={{className:'icons'}}>
                <AiFillEdit />
            </IconContext.Provider>
            </button>

            <button  className='delete-btn' onClick={()=> handleDelete(todo)}>
                <IconContext.Provider value={{className:'icons'}}>
                <AiOutlineClose  />
                </IconContext.Provider>
            </button>
        </div>
     </li>
  )
}

export default TodoTask