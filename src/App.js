import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ToLists from './ToList';



const App=()=>{

  // let curTime=Date().toLocaleTimeString();
  const state=useState;
  const [text,setText]=useState("");
  const [list,setList]=useState([]);
  const changeIt=(event)=>{
    setText(event.target.value)

  };
  const makeList=()=>{
    setList((preItem)=>{
      return [...preItem,text];
    });
    setText("");
  };
  const DeleteItem=(id)=>{
    setList((preItem)=>{
      return preItem.filter((elm,index)=>{
        return index !== id;
      });
    });
  }
  return(
    < >
      <div className="card-container">
        <div className="my-card">
          <br />
          <h2 className='head-text'>My Todo List</h2>
          <br />
          <div className="input-area">
          <input type="text" placeholder='Add Task Todo' onChange={changeIt} value={text}/>
          <button className='round-btn' onClick={makeList}>+</button>
          </div>
          <ul>
              {/* <li>{text}</li> */}
              {list.map((items,index)=>{
                return <ToLists 
                text={items}
                key={index}
                id={index}
                onselect={DeleteItem}
                />;
              })}
            </ul>
        </div>
      </div>
      
    </>
  );
};

export default App;