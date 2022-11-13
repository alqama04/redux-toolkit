import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {increament,decreament,increamentByAmount} from './counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
        <button  onClick={() => dispatch(increament())}>Increment</button>
            {count}
        <button  onClick={() => dispatch(decreament())}>decrement</button>

        </div>
    );
}

export default Counter;
