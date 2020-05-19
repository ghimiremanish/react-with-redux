import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIcecream } from '../redux'

function HookIcecreamContainer() {
    const numberOfIcecream = useSelector(state => state.icecream.numberOfIcecream)
    const dispatch = useDispatch()
    return (
        <div style={{padding:'0 10%'}}>
            <h2>Number Of IceCream: {numberOfIcecream}</h2>
            <button onClick={() => dispatch(buyIcecream())}>BUY</button>
        </div>
    )
}

export default HookIcecreamContainer
