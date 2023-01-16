import { useNavigate } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';
const NavBar = () => {
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem('token');
        NotificationManager.success('Logout Successfull', 'Success', 2000);
        navigate('/signin');
    }
    return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Expense Tracker</div>
        <div className='navbar__item' style={{fontSize:'22px'}}>
            <button className="btn btn_" onClick={logout}>Logout</button>    
        </div>   
        <NotificationContainer/>     
    </header>
)
};

export default NavBar;
