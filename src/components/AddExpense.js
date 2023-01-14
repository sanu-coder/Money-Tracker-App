import React, { useState } from "react";
import { editBudget } from "../apis/apiCalls";
import jwt from 'jwt-decode';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const AddExpenseForm = (props) => {
    console.log(props.expenses);
   
    let remaining = props.total-props.spent;
    const clickHandler = (event) =>{
        event.preventDefault();
        const name = document.getElementById('name').value;
        const cost = document.getElementById('cost').value;
        const category = document.getElementById('category').value;
        let {spent} = props;

        if(!name || !category || !cost){
            NotificationManager.error('Fill the form completely', "Error", 2000);
            return;
        }else if(remaining<cost){
            NotificationManager.error('You donot have sufficient balance', "Error", 2000);
            return;
        }
        let arr = props.expenses;

        arr.push({name,cost,category});
        console.log(arr);


        editBudget(props._id, {items : arr,  spent : spent + parseInt(cost)}).then((response)=>{
            
            console.log(response);

           
            arr=[];
            document.getElementById("addExpenseForm").reset();
            let user_ = jwt(localStorage.getItem('token'))._doc;
            props.event(user_);
            
        })
    }
    return (
        <form id="addExpenseForm">
            <div className="row">
                <div className="col-md-12 has-validation">
                    <label >Name</label>
                    <input required='required'
                    type='text' className="form-control" id="name"
                    />
                </div>
                
                <div className="col-md-12 mt-3">
                    <label >Cost</label>
                    <input required='required'
                    type='number' className="form-control" id="cost"
                    />
                </div>

                <div className="col-md-12 mt-3">
                    <label >Category</label>
                    <select id="category" required='required' className="form-select">
                    <option value="">-----</option>
                    <option value="dress">Dress</option>
                    <option value="grocery">Grocery</option>
                    <option value="stationary">Stationary</option>
                    <option value="furniture">Furniture</option>
                    <option value="electronic">Electronic-Gadgets</option>
                    </select>
                </div>
                

                <div className="col-md-12 mt-3" >
                    <button type="submit" className="btn btn-primary" onClick={(event)=>{clickHandler(event)}}>
                        Save
                    </button>
                </div>
            </div>
            <NotificationContainer/>
        </form>
    );
}

export default AddExpenseForm;