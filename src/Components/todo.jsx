import { useState } from "react";
import { TodoList } from "./todoList";
import DateTime from "./Date";
import { TodoForm } from "./todoForm";
import "./todo.css";
import { localStorageSetItem,localStorageGetItem } from "./localStorage";

const todoKey = "todopp";

export default function Todo() {
    const [task, setTask] = useState(()=> localStorageGetItem());

    const handleSubmit = (inputValue) => {
        const{id,content,checked} = inputValue; 
        if (!content) return;

        const ifContentPresnet = task.find((curr)=> {
            return curr.content === content;
        });
        if(ifContentPresnet) return;
        console.log(task);
        setTask((prev) => [...prev, {id,content,checked}]);
    };


    //local storage
    localStorageSetItem(task);
  

    const handleTick=(con)=>{
        const updatedTask = task.map((curr)=> {
           if(curr.content===con){
            return{...curr,checked:!curr.checked}; 
           }else{
            return curr;
           }
        });
        setTask(updatedTask);
    }


    const handleDelete = (value ) => {
        const updatedTask = task.filter((curr) => curr.content !== value);
        setTask(updatedTask);
    };

    const handleClear = () => {
        setTask([]);
    }; 

    return (
        <>
            <header>
                <h1>TO-DO List</h1>
                <DateTime />
            </header>
              <TodoForm onAddToDo={handleSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {task.map((curr) => {
                        return (
                            <TodoList key={curr.id} data={curr.content} handleDelete={handleDelete} checked={curr.checked} handleCheckTodo={handleTick} />
                        );
                    })}
                </ul>
            </section>
            <section> 
                <button className="clear-btn" onClick={handleClear}>
                    Clear all
                </button>
            </section>
        </>
    );
}
