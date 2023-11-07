import React, { useState } from 'react';
import './App.css'; 
import TodoList from './components/TodoList';

const App = () => {
  const [inputList, setInputLit] =useState("");
  const [Items,setItems] = useState([]);

  const itemEvent =(event)=>{
    setInputLit(event.target.value);
  };

  // use state and arry to save list
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems, inputList];
    })
    setInputLit("");
  };

  const deletItems=(id)=>{
    console.log(" deleted");
    
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !==id;
         
      });
    });
  };


  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>Todo list</h1>
        <br /> 

        <input type="text" placeholder='Add a item' 
        value={inputList } onChange={itemEvent}/>
        
        <button onClick={listOfItems}>+</button>

        <ol>
           {/* <li>{inputList}</li> */}
          {/* use map function to store a list */}
          {Items.map((itemval, index)=>{
          return(
            <TodoList key={index} 
            id={index} text={itemval}
            onSelect ={deletItems}/>
            )
          })}
        </ol>
      </div>
       
    </div>
  )
};

export default App
