import React,{useState} from 'react';
// import ToDoItem from './ToDoitem';
import { v4 as uuidv4 } from 'uuid';
let newItem = {};
// let temp =[];
function ToDoInput(props){
    const {items,setItems} = props ;
    // console.log(props);
    // console.log(props.items);
    let [todo,setToDo] = useState('');
    const submitForm = (evt) => {
        // console.log(todo)
        evt.preventDefault();
        newItem={
            id:uuidv4(),
            item:todo
        }
        console.log(items);
        setItems([...items,newItem]);
        console.log(items);
    }
    return(
        <div className=" card card-body my-3">
            <form onSubmit={submitForm}>
                <div className="input-group">
                    <input type="text" placeholder="Add a todo item" className="form-control" value={todo} onChange={(e)=>{setToDo(e.target.value)}}/>
                    
                    <input type="submit" className="btn btn-block mt-3 btn-primary "/>
                </div>
            </form>
        </div>
    )
}

export default ToDoInput;