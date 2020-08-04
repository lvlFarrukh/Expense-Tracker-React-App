import React from 'react'

export const TransectionHistory = () => {
    return (
        <div id="history">
            <h4>Transection History</h4>
            <hr/>
            <ul>
                <li className="plus">
                    <button>X</button>
                    Project 1 income
                    <span>$1,000</span>
                </li>
                <li className="minus">
                    <button>X</button>
                    Project 1 income
                    <span>$1,000</span>
                </li>
            </ul>
        </div>
    );
}