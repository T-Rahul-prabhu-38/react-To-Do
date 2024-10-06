import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FaDeleteLeft } from "react-icons/fa6";

export const TodoList = ({handleDelete,data,handleCheckTodo,checked})=>{

    return(
        <li className='todo-item'>
                                    <span className={checked ? "checkList":"notCheckList"}>{data}</span>
                                    <button className='check-btn' onClick={()=>handleCheckTodo(data)}><BsFileEarmarkCheckFill /></button>
                                    <button className='delete-btn' onClick={()=>handleDelete(data)}><FaDeleteLeft /> </button>
        </li>
    );
}   