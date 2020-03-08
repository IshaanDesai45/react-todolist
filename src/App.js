import React,{useState} from 'react';
//components
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoinput';
import 'bootstrap/dist/css/bootstrap.min.css';
// let items=[{
//   id:0,
//   item:"fuck off"
// },
// {
//   id:1,
//   item:"get selected in gsoc 2020"
// }];
function App() {
  let [items,setItems]= useState([]);
  // let [id,setId]=useState(0);
  // let [item,setItem]= useState('');
  let [editItem,setEditItem]=useState(false);

  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4 ">
            <h3 className="text-capitalize text-center">todo input</h3>
            <ToDoInput items={items} setItems={setItems} />
            <ToDoList items={items} setItems={setItems}/>

        </div>
      </div>
    </div>
    
  );
}

export default App;
