import React from 'react'
import { BsFillClipboard2XFill } from "react-icons/bs";
const ToLists=(props) =>{
  
  return(
  <>
  <div className="one-line-element">
      <li>{props.text}</li>
      <BsFillClipboard2XFill className='icon' onClick={()=>{
        props.onselect(props.id)}
      }
      />
  </div>
  </>
  );
};

export default ToLists;
