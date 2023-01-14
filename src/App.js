
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import SignIn from '././components/SignIn';
import Register from '././components/Register';
import Home from './components/Home';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </Router>
    </>
    
  );
}

export default App;
