import {Outlet,Navigate} from 'react-router-dom';
import React from 'react';

export const MainLayout:React.FC = ()=>{
  const hasRead = localStorage.getItem('hasReadWelcomes')
  if (hasRead === 'yes') {
    return <Navigate to="/home" />
  } else {
    return <div><Outlet /></div>
  }
}
