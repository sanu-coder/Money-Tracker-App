import React, { useState } from "react";

import './App.css';
import AddExpenseForm from './components/AddExpense';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import NavBar from "./components/Navbar";
import Remaining from './components/Remaining';
import { NotificationContainer, NotificationManager } from "react-notifications";
import jwt from 'jwt-decode';
import { useNavigate } from "react-router-dom";
 const Dashboard = ()=>{
  const navigate = useNavigate();
  let user_ = jwt(localStorage.getItem('token'))._doc;
  if(!user_){
    navigate('/login');
  }
  const [user, setUser] = useState(user_);
  user.password="";
  console.log(user);
  const eventEmit = (user__) => {
    setUser(user__);
  }

  const emitEvent=(user__)=>{
    setUser(user__);
    NotificationManager.success('Expense Removed', "Success", 2000);
  }
  const eventEmit1 = (user__)=>{
    setUser(user__);
    NotificationManager.success('Expense Added', "Success", 2000);
  }
    return (
      <div>
        <NavBar/>
        <div className="container p-3">
        <h3 className='mt-3'>Welcome {user.fullname} 👋👋! Here's your <u style={{color : "blue"}}>expense records</u>  🤗</h3>

        <div className='row mt-3' >
          <div className="col-sm" >
            <Budget event={eventEmit}/>
          </div>

          <div className="col-sm">
            <Remaining remain = {user.total-user.spent}/>
          </div>

          <div className="col-sm">
            <ExpenseTotal spent = {user.spent}/>
          </div>
        </div>
        <div className="row m-1 mt-4 mb-4 card__" style={{border : "0.1 px solid black",padding : "20px"}}>
        <h3 className='mt-3'>Expenses</h3>
        <div >
            <div className='col-sm'>
              <ExpenseList expenses={user.items} emitEvent = {emitEvent}/>
            </div>
        </div>
        </div>
        <div className="row m-1 mt-4 mb-4 card__" style={{border : "0.1 px solid black",padding : "20px"}}>
          <h3 className='mt-3'> Add Expense</h3>

          <div className='mt-3'>
            <div className='col-sm'>
              <AddExpenseForm _id={user._id} expenses={user.items} total={user.total} spent = {user.spent} event={eventEmit1}/>
            </div>
          </div>
        </div>
        
      </div>
      <NotificationContainer/>

      </div>
        
    );
}
export default Dashboard;