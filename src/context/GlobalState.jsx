import React, { createContext, useReducer } from 'react';
 import AppReducer from './AppReducer'

 const initialState = {
    transaction: [
        {id: 1, text: 'books', amount: -100},
        {id: 2, text: 'rent', amount: 1000},
    ]
 }

 export const GlobalState = createContext(initialState)

 export const GlobalProvider = ({ children })=> {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    let deleteTransaction = (id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
     return (
        <GlobalState.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
        }} >
            {children}
        </GlobalState.Provider>
     )
 }