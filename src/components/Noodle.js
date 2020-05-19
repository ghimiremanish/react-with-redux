import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyNoodle, buySoup} from '../redux'

function Noodle() {
    const numberOfNoodle = useSelector(state => state.Noodle.numberOfNoodle)
    const numberOfSoup = useSelector(state => state.Noodle.numberOfSoup)
    const dispatch = useDispatch()
    return (
        <div style={{padding: '0 10%', border: '1px solid black'}}>
            <h1 style={{color: 'red'}}>Number Of Noodles: {numberOfNoodle}</h1>
            <button onClick={() => dispatch(buyNoodle())}>BUY NOODLE</button>
            <h1 style={{color: 'red'}}>Number Of Soups: {numberOfSoup}</h1>
            <button onClick={()=> dispatch(buySoup())}>BUY SOUP</button>
        </div>
    )
}

export default Noodle
