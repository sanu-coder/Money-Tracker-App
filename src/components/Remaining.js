import React from "react";

const Remaining = (props) => {
    
    return (
        <div className='alert alert-success card1_'>
            <div style={{textAlign:"center"}}>
            <img src='https://cdn-icons-png.flaticon.com/512/584/584011.png' height="211px" width="213px"/>
                    
                </div>
                
            <span className="cardWritten">Remaining: Rs. <b>{props.remain}/-</b> </span>
        </div>
    );
}

export default Remaining;