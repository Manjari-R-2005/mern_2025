import React, {useReducer} from 'react'

const initialvalue = {count:0};
const reducerFunction = (state,action) => {
    switch(action.type){
        case 'Increment':
            return {count: state.count+1}
        case 'Decrement':
            return {count: state.count-1}
        case 'Reset':
            return {count: 0}
        default:
            return {count: 0}
    }
}
const Reducer = () => {
    const [state,dispatch] = useReducer(reducerFunction,initialvalue)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type : 'Decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type : 'Reset'})}>Reset</button>
        <button onClick={() => dispatch({type : 'Increment'})}>Increment</button>
        
    </div>
  )
}

export default Reducer