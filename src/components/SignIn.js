import React from "react";
import { loginUser } from "../apis/apiCalls";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from "react-router-dom";
const SignIn=()=>{
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
       
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
       
        console.log(email);
        console.log(password);
        
       if(!password || !email){
        NotificationManager.error('Fill all the credentials', 'Error', 2000);
        return;
       }
        loginUser({email, password}).then(async (response) => {
            console.log(response);
            if(response.result==="success"){
                await NotificationManager.success('Login Successfull', 'Success', 2000);
            
                navigate('/dashboard');
            }
            else if(response.token===""){
                NotificationManager.error(response.result, 'Error', 2000);
            }else{
                NotificationManager.error("Internal Error",'Error', 2000);
            }
        })
    }
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 ">
            <div className="row p-3">
                <div className="card card_">
                <div className="card-body">
                <h3 className="card-title text-center">Welcome to <u style={{color:"blue"}}>MONEY TRACKER APP</u> 👋👋👋</h3>
                    <br/>
                    <h3 className="card-title text-center">Log in</h3>
                    <div className="card-text">
                        
                        <form className="form1">
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control form-control-sm" id="email" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                
                                <input type="password" className="form-control form-control-sm" id="password"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-3" onClick={(event)=> { handleSubmit(event) }}><span className="m-3" style={{fontSize:"20px"}}>Sign In</span></button>
                            
                            <div className="sign-up">
                                Don't have an account? <a href="/register">Create One</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <NotificationContainer/>
        </div>

    );
}

export default SignIn;