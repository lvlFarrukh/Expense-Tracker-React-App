import React, {useContext, useState} from 'react'
import { GlobalState } from '../context/GlobalState'


export const AddTransection = () => {
    const { addTransaction } = useContext(GlobalState)
    const [des, setDes] = useState('')
    const [amt, setAmt] = useState('')

    const addTans = (e) =>{
        e.preventDefault()
        des !== '' & amt !== undefined 
        && addTransaction({text: des, amount: parseInt(amt)})
           setDes('')
           setAmt('')
    }
    return (
        <div id="Addtrans">
            <h4>Add Transection</h4>
            <hr/>
            <form onSubmit={(e) =>{addTans(e)}}>
                <div className="form-controll">
                    <label htmlFor="description">Description</label><br/>
                    <input value={des} type="text" onChange={(e) =>{
                        setDes(e.target.value)
                    }}/>
                </div>
                <div className="form-controll">
                    <label htmlFor="transection">Transection Amount</label><br/>
                    <input type="number" value={amt} onChange={(e) =>{
                        setAmt(e.target.value)
                    }}/>
                </div>
                <button type="submit">Add Transection</button>
            </form>
        </div>
    );
}