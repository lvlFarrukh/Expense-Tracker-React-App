import React, { createContext, useReducer } from 'react';
 import AppReducer from './AppReducer'

 const initialState = {
    transaction: [
    ],
    totalTransaction: 1,
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

    let addTransaction = (transaction) =>{
        transaction['id'] = initialState.totalTransaction;
        initialState.totalTransaction = initialState.totalTransaction + 1
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
     return (
        <GlobalState.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction,
        }} >
            {children}
        </GlobalState.Provider>
     )
 }