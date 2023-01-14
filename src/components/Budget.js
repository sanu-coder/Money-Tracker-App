import React, { useState } from 'react';
import jwt from 'jwt-decode';
import { editBudget } from '../apis/apiCalls';
const Budget = (props) => {
    let user_ = jwt(localStorage.getItem('token'))._doc;
    
    const [text, setText] = useState('Edit');
    const [user, setUser] = useState(user_);
    user.password="";
    const [budget, setBudget] = useState(user.total);
    const clickHandler =()=>{
        if(text==='Edit'){
            setText('Save');
        }else{
            let value = document.getElementById('budget').value;
            // place API call to update budget
            
            editBudget(user._id, {total : value}).then((response)=>{
                user_ = jwt(localStorage.getItem('token'))._doc;
                
                setUser(user_);
                setBudget(value);
                setText('Edit');
                props.event(user_);
            })
            
        }
    } 
    return (
        <div>
            <div className='alert alert-secondary card1_'>
                <div style={{textAlign:"center"}}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Numismatics_and_Notaphily_icon.png' height="200px" width="200px"/>
                    
                </div>
                    <div className='d-flex justify-content-between cardWritten'>
                       
                        {
                            text === 'Edit' ? 
                            <span>Budget: <b>Rs. {user.total}/-</b> </span> : 
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Rs.</span>
                            <input className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id='budget' type='number' defaultValue={budget}/>
                            </div>
                        }
                        <button className='btn btn-primary btn-edit ml-2' onClick={clickHandler}>{text}</button>  
                    </div>
                
                </div>
                

            </div>
            
        
    );
};


export default Budget;