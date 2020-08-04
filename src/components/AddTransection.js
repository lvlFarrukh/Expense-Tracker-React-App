import React from 'react'

export const AddTransection = () => {
    return (
        <div id="Addtrans">
            <h4>Add Transection</h4>
            <hr/>
            <form>
                <div className="form-controll">
                    <label htmlFor="description">Description</label><br/>
                    <input type="text"/>
                </div>
                <div className="form-controll">
                    <label htmlFor="transection">Transection Amount</label><br/>
                    <input type="text"/>
                </div>
                <button>Add Transection</button>
            </form>
        </div>
    );
}