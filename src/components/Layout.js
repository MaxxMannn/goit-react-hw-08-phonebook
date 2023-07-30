import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import './styled.css';

export const Layout = () => {
  
  return (
    <div className='layoutContainer'>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer/>
    </div>
  );
};