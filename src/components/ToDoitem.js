import React,{useState} from 'react';
// import ToDoItem from './ToDoitem';

// const todos=["fuck off"];


function ToDoItem(props){
    // console.log(props.items)
    let {items,setItems,item} = props;
    // console.log(items.id);
    const handleDelete =(id)=>{
        let updatedItems = items.filter(abc => abc.id !== id);
        // console.log(updatedItems);
        setItems(updatedItems);
    }
    return(
    //    <p>hello there</p>
       <li className="list-group-item text-capitailize d-flex justify-content-between my-2">
           <h6>{item.item}</h6>
           <div className="todo-buttons">
               {/* <button  className="btn btn-success my-2">edit</button> */}
               <button onClick={()=>handleDelete(item.id)} className="btn btn-danger">delete</button>
           </div>
       </li>
    
       
    )
}

export default ToDoItem;