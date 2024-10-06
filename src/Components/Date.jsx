import { useEffect, useState } from 'react';
import './todo.css'

export default function DateTime() {

    const[dateTime,setDateTime] = useState(' ');

    useEffect(()=>{
        const interval =  setInterval(()=>{
            const now  = new Date();
            const dateNow = now.toLocaleDateString();
            const timeNow = now.toLocaleTimeString();     
            setDateTime(`${dateNow} - ${timeNow}`);
        },1000);

        return () => clearInterval(interval);
    },[])

    return(
        <h2 className="date-time">{dateTime}</h2>
    );
};
