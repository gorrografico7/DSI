import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../Pages/login';
import Index from '../Pages/Index';
import NotFount from '../Pages/NotFount';
import Register from '../Pages/Register';
import ForgotPassword from '../Pages/ForgotPassword';
import Dashboard from '../Pages/Dashboard';
import { AuthProvider } from '../Context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/forget" element={<ForgotPassword/>} />
        <Route  path="/" element={<Index/>} />

        <Route path="/dashboard" element={
          <PrivateRoute element={<Dashboard/>}/>
        }  />
        
        <Route path="*" element={<NotFount/>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
