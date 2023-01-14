import jwt from "jwt-decode";
import React from "react";
import { TiDelete } from 'react-icons/ti';
import { editBudget } from "../apis/apiCalls";

const ExpenseItem = (props) => {
    const deleteHandler =(event)=>{
        let user = jwt(localStorage.getItem('token'))._doc;
        let arr = user.items;
        let {cost} = arr[props.index];
        console.log(cost)
        let spent = user.spent-cost;
        
        arr.splice(props.index, 1);
        let json = {items : arr, spent}

        editBudget(user._id, json).then((response)=>{
            console.log(response);
            user = jwt(localStorage.getItem('token'))._doc;
            props.event(user);
        })
        
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            

            <div>
                <span className="badge bg-primary rounded-pill mr-5" > 
                    Rs. {props.cost}
                </span>

                <TiDelete style={{cursor : "pointer", color:"blueviolet", marginLeft:"10px"}} size='2em' onClick={(e)=>{deleteHandler(e)}}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;