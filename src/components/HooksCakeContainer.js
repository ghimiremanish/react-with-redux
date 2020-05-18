import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div style={{padding: '0 10% '}}>
            <h1>Number of cakes: {numberOfCakes}</h1>
            <button onClick={()=> dispatch(buyCake())}>BUY</button>
        </div>
    )
}

export default HooksCakeContainer
