import React, {useContext} from 'react'
import { GlobalState } from '../context/GlobalState'

export const Expenses = () => {
    const transaction = useContext(GlobalState);
    const income = transaction.transaction.filter(v => v.amount > 0);
    const expense = transaction.transaction.filter(v => v.amount < 0);
    const incomeTotal = income.reduce((acc, item) => (acc += item.amount), 0);
    const expenseTotal = expense.reduce((acc, item) => (acc += item.amount), 0);
    console.log(income)
    return (
        <div className="expense">
            <div style={{borderRight: '2px solid #80808085'}}>
                <h5>INCOME</h5>
                <span style={{color: 'green'}}>${incomeTotal}</span>
            </div>
            <div>
                <h5>EXPENSE</h5>
                <span style={{color: 'red'}}>-${Math.abs(expenseTotal)}</span>
            </div>
        </div>
    );
}