import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element,access }) => {
  const [rol,setRol] = useState(null);
  const [loading, setLoading] = useState(true);  
  
  useEffect(()=>{
    setRol(sessionStorage.getItem('rol'));
  },[])

  if (!sessionStorage.getItem('email')) {
      return <Navigate to="/" replace />;
  }

  const getRol = () => {
    const userRol = sessionStorage.getItem('rol');
    setRol(userRol);
    setLoading(false);  
  };

  useEffect(() => {
    getRol();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  
  }

  // if (!tableAccess[rol] || !tableAccess[rol].includes(tabla)) {
  //   return <Navigate to="/access-denied" replace />;
  // }

  return (
      <div className="h-screen w-screen flex">
            {element}
        </div>
    );
};

export default PrivateRoute;
