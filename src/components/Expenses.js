import React from 'react'

export const Expenses = () => {
    return (
        <div className="expense">
            <div style={{borderRight: '2px solid #80808085'}}>
                <h5>INCOME</h5>
                <span style={{color: 'green'}}>0.00</span>
            </div>
            <div>
                <h5>EXPENSE</h5>
                <span style={{color: 'red'}}>0.00</span>
            </div>
        </div>
    );
}