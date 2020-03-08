import React,{useState} from 'react';
import ToDoItem from './ToDoitem';



function ToDoList(props){
    const {items,setItems} = props ;
    return(
       <div><h1 className="text-center">ToDo List</h1>
            <ul>
                {props.items.map(item=>{
                    return <ToDoItem key={item.id} item={item} items={items} setItems={setItems}/>
                })}
                
            </ul>
            <button className="btn btn-danger mt-5 btn-block" onClick={(e)=>{setItems([])}}>Clear List</button>
       </div>
       
    //    <ul>
    //        {/* <ToDoItem/> */}
    //    </ul>
       
    )
}

export default ToDoList;