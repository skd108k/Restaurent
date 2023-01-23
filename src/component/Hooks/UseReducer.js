import React, {useReducer} from 'react'
import './style.css'

const reducer = (state, action) => {
    if(action.type === "INCR"){
        state = state + 1;
    }
    if(state > 0 && action.type === "DCER"){
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {
//    const initialData = 10;
//    const [myNum, setMyNum] =  useState(initialData);
//    console.log(myNum);
const initialData = 5;
const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
     <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick = { () => dispatch({type: "INCR"})}>
        <span></span>
        <span></span>
         <span></span>
        <span></span>
        INCR
        </div> 
        <div class="button2" onClick = { () => dispatch({type: "DCER"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
        </div>
    </>
  );
};

export default UseReducer;
