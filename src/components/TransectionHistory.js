import React, { useContext, } from 'react'

import { GlobalState } from '../context/GlobalState'

export const TransectionHistory = () => {
    // const [sign, setSign] = useState('+')
    const Transaction = useContext(GlobalState)
    // console.log(Transaction.transaction)
    const { deleteTransaction } = useContext(GlobalState)
        return (
        <div id="history">
            <h4>Transection History</h4>
            <hr />
            <ul>
                {
                    Transaction.transaction.map((v, i) =>{
                        return <li key={i} className={v.amount < 0 ? 'plus':'minus'}>
                                    <button onClick={() =>{deleteTransaction(v.id)}}>X</button>
                                        {v.text}
                                    <div className="am-div">
                                        <span>{v.amount < 0 ? '-':'+'}${Math.abs(v.amount)}</span>
                                    </div>
                                </li>
                    })
                }
                
            </ul>
        </div>
    );
}