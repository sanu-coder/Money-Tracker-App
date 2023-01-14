import React from "react";

const ExpenseTotal=(props)=>{
    return (
        <div className="alert alert-primary card1_">
            <div style={{textAlign:"center"}}>
            <img src='https://cdn-icons-png.flaticon.com/512/1810/1810320.png' height="213px" width="213px"/>
                    
                </div>
            <span className="cardWritten">Spent so far : <b>Rs.{props.spent}/-</b> </span>
        </div>
    );
}

export default ExpenseTotal;