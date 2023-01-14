import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) =>{
    console.log("hit");
    const eventEmit = (user)=>{
        
        props.emitEvent(user);
    }
    
    return (
        <div>
            <ul className="list-group">
                { props.expenses.length!=0 ?
                    props.expenses.map((expense,idx)=> {
                        return (
                        <ExpenseItem key={expense.id} index={idx} name={expense.name} cost={expense.cost} event={eventEmit}/>
                        );
                    }) 
                    :
                    <p>You haven't spent your money</p>
                }
            </ul>
        </div>
    );

}
export default ExpenseList;