import { useState } from "react";

export const TodoForm = ({onAddToDo}) =>{

    const [inputValue,setInputValue] = useState({});

    const handleInputChange = (e) =>{
        setInputValue({id:e,content:e,checked:false})
    }; 

    const handleSubmit =(event)=>{
        event.preventDefault();
        onAddToDo(inputValue);
        setInputValue({id:"",content:"",checked:""});    
    }
     
    
    return(
        <section className='form' >
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                    className='todo-input'
                    autoComplete='off' 
                    value={inputValue.content} 
                    onChange={(e)=>handleInputChange(e.target.value)}
                />
            </div>
            <div>
                <button type='submit' className='todo-btn'> Add Task</button>
            </div>

        </form>

    </section>
    );
}