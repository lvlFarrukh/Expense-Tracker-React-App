import React, { useContext } from 'react'
import { GlobalState } from '../context/GlobalState'

export const Currentbalance = () => {
    const transaction = useContext(GlobalState)
    const amount = transaction.transaction.map(v => v.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div className="curBal">
            <h4>CURRENT BALANCE</h4>
            <h1>${total}</h1>
        </div>
    );
}